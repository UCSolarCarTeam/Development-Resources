#include "BlueLedToggleTask.h"


    static const uint32_t BLUE_LED_STATUS_STDID = 0xCCC;
    static const uint32_t BLUE_LED_TOGGLE_FREQ = 1000U;


void blueLedToggleTask(void const* arg)
{
    //One time osDelayUntil initialization
    uint32_t prevWakeTime = xTaskGetTickCount();
 


    for (;;)
    {
        //TODO: Add BLUE_LED_TOGGLE_FREQ to prevWakeTime
        prevWakeTime = prevWakeTime + BLUE_LED_TOGGLE_FREQ;
        osDelayUntil(prevWakeTime);
        uint16_t pinState = 0;
        //TODO: Check blue toggle flag and toggle blue LED
        if (blue_message_flag = 1) {
            HAL_GPIO_TogglePin(LED_RED_GPIO_Port, LED_RED_Pin);
            pinState = HAL_GPIO_ReadPin(LED_RED_GPIO_Port, LED_RED_Pin);
        }



        //TODO: Send CAN message indicating current state of LED
        uint32_t timer = 1000U;
        osStatus_t osMutexAcquire(mUtex, timer);
        if (osMutexAcquire() != osOK) {
            //the mutex has not been aquired!
        }

        if (osMutexAcquire() == osOK) {
            int MailBoxesNumber = HAL_CAN_GetxMailboxesFreeLevel(hcan2);
        }

        uint8_t* oneElement[0];
        uint32_t mailbox;

        CanTXHeader.StdID = BLUE_LED_STATUS_STDID;
        CanTXHeader.DLC = 1;
        oneElement[0] = pinState;
        HAL_CAN_AddTxMessage(hcan2, CanTXHeader, oneElement, &mailbox);
        osMutexRelease(mUtex);









    }
}
