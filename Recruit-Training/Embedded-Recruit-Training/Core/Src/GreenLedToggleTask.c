#include "GreenLedToggleTask.h"

    static const uint32_t GREEN_LED_STATUS_STDID = 0xDDD;
    static const uint32_t GREEN_LED_TOGGLE_FREQ = 10000U;


void greenLedToggleTask(void const* arg)
{
    //One time osDelayUntil initialization
    uint32_t prevWakeTime = xTaskGetTickCount();

    for (;;)
    {
        //TODO: Add GREEN_LED_TOGGLE_FREQ to prevWakeTime
        prevWakeTime = prevWakeTime + GREEN_LED_TOGGLE_FREQ;
        osDelayUntil(prevWakeTime);
        uint16_t pinState = 0;

        //TODO: Check green toggel flag and toggle blue LED
        if (green_message_flag == 1) {
            HAL_GPIO_TogglePin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);
            pinState = HAL_GPIO_ReadPin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);
        }
        //TODO: Send CAN message indicating current state of LED
        uint32_t timer = 10000U;
        osStatus_t osMutexAcquire(mUtex, timer);


        if (osMutexAcquire(mUtex, timer) == osOK) {
			HAL_CAN_GetTxMailboxesFreeLevel(&hcan2);
			uint8_t* oneElement[1];
		    uint32_t mailbox;

		    CanTXHeader.StdId = GREEN_LED_STATUS_STDID;
		    CanTXHeader.DLC = 1;

		   //Becasue the header is like the general message of the whole CAN message.
		    oneElement[0] = pinState;
		    HAL_CAN_AddTxMessage(&hcan2, &CanTXHeader, oneElement[0], &mailbox);
		    osMutexRelease(mUtex);
        }

    }
}
