#include "BlueLedToggleTask.h"

static const uint32_t BLUE_LED_STATUS_STDID = 0xCCC;

void blueLedToggleTask(void const* arg)
{
    //One time osDelayUntil initialization
    uint32_t prevWakeTime = osKernelSysTick();

    for (;;)
    {
        //TODO: Add BLUE_LED_TOGGLE_FREQ to prevWakeTime
        static const uint32_t BLUE_LED_TOGGLE_FREQ = 1000U;
        prevWakeTime += BLUE_LED_TOGGLE_FREQ;
        osDelayUntil(prevWakeTime);
        //TODO: Check blue toggle flag and toggle blue LED

        if (blueFlag != 0) {
            HAL_GPIO_TogglePin(LED_RED_GPIO_Port, LED_RED_Pin);
        }

        uint8_t readPin = HAL_GPIO_ReadPin(LED_RED_GPIO_Port, LED_RED_Pin);

        //TODO: Send CAN message indicating current state of LED
        osStatus_t status = osMutexAcquire(mutexHandle, 10U);
        if (status == osOK) {
            uint8_t dataArr[1];
            uint32_t mailbox;

            txHeader.StdId = BLUE_LED_STATUS_STDID;
            txHeader.DLC = 1;

            dataArr[0] = readPin;



            if (HAL_CAN_GetTxMailboxesFreeLevel(&hcan2) != 0) {
                HAL_CAN_AddTxMessage(&hcan2, &txHeader, dataArr, &mailbox);
            }
            osMutexRelease(mutexHandle);
        }

    }
}
