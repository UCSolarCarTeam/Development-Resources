#include "BlueLedToggleTask.h"

static const uint32_t BLUE_LED_STATUS_STDID = 0xCCC;
static const uint32_t BLUE_LED_TOGGLE_FREQ = 1000;

void blueLedToggleTask(void const* arg)
{
    //One time osDelayUntil initialization
    uint32_t prevWakeTime = osKernelSysTick();

    osMutexId_t* canMutex = (osMutexId_t*)arg; // Get mutex that was passed as an argument

    for (;;)
    {
        //TODO: Add BLUE_LED_TOGGLE_FREQ to prevWakeTime
        prevWakeTime += BLUE_LED_TOGGLE_FREQ;
        osDelayUntil(prevWakeTime);
        //TODO: Check blue toggle flag and toggle blue LED
        if (blueFlag){
            HAL_GPIO_TogglePin(LED_RED_GPIO_Port, LED_RED_Pin);
        }

        //TODO: Send CAN message indicating current state of LED
        uint8_t blueLEDState = HAL_GPIO_ReadPin(LED_RED_GPIO_Port, LED_RED_Pin);

        if (osMutexAcquire(canMutex, 0) == osOK){
            if (HAL_CAN_GetTxMailboxesFreeLevel(&hcan2) >= 1){
                uint8_t data[1];
                uint32_t mailbox;
                CAN_TX.StdId = BLUE_LED_STATUS_STDID;
                CAN_TX.DLC = 1;
                data[0] = !blueLEDState;

                HAL_CAN_AddTxMessage(&hcan2, &CAN_TX, data, &mailbox);
            }
            osMutexRelease(canMutex);
        }
    }
}
