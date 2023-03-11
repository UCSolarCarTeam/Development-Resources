#include "GreenLedToggleTask.h"

static const uint8_t GREEN_LED_STATUS_STIDID = 0xDDD;

void greenLedToggleTask(void const* arg)
{
    //One time osDelayUntil initialization
    uint32_t prevWakeTime = osKernelSysTick();

    osMutexId_t* canMutex = (osMutexId_t*)arg;

    for (;;)
    {
        //TODO: Add GREEN_LED_TOGGLE_FREQ to prevWakeTime
        static const GREEN_LED_TOGGLE_FREQ = 10000U;
        prevWakeTime += GREEN_LED_TOGGLE_FREQ;
        osDelayUntil(prevWakeTime);
        //TODO: Check green toggle flag and toggle blue LED

        if (greenFlag != 0) {
            HAL_GPIO_TogglePin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);
        }

        uint8_t readPin = HAL_GPIO_ReadPin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);

        //TODO: Send CAN message indicating current state of LED
        osStatus_t status = osMutexAcquire(mutexHandle, 10U);
        if (status == osOK) {
            uint8_t dataArr[1];
            uint32_t mailbox;

            txHeader.StdId = GREEN_LED_STATUS_STDID;
            txHeader.dlc = 1;

            dataArr[0] = readPin;

            if (HAL_CAN_GetTxMailboxesFreeLevel(&hcan2) != 0) {
                HAL_CAN_ADDTxMessage(&hcan2, &txHeader, &dataArr, &mailbox);
            }

            osMutexRelease(&mutexHandle);
        }

    }
}
