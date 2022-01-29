#include "GreenLedToggleTask.h"

void greenLedToggleTask(void const* arg)
{
    //One time osDelayUntil initialization
    static const uint32_t GREEN_LED_STATUS_STDID = 0xDDD;
    static const uint32_t GREEN_LED_TOGGLE_FREQ = 100;
    uint32_t prevWakeTime = osKernelSysTick();

    osMutexId_t* canMutex = (osMutexId_t*)arg;

    for (;;)
    {
        //TODO: Add GREEN_LED_TOGGLE_FREQ to prevWakeTime
        prevWakeTime += GREEN_LED_TOGGLE_FREQ;
        osDelayUntil(prevWakeTime);
        //TODO: Check blue toggel flag and toggle blue LED
        if (greenFlag == 1){
            HAL_GPIO_TogglePin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);
        }
        //TODO: Send CAN message indicating current state of LED
        uint8_t greenLEDState = HAL_GPIO_ReadPin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);

        if (osMutexAcquire(canMutex, 0) == osOK){
            if (HAL_CAN_GetTxMailboxesFreeLevel(&hcan2) >= 1){
                uint8_t data[1];
                uint32_t mailbox;
                CAN_TX.StdId = GREEN_LED_STATUS_STDID;
                CAN_TX.DLC = 1;
                data[0] = !greenLEDState;

                HAL_CAN_AddTxMessage(&hcan2, &CAN_TX, data, &mailbox);
            }
        osMutexRelease(canMutex);
        }
    }
}
