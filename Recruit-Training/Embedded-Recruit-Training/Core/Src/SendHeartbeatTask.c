#include "SendHeartbeatTask.h"
#include "cmsis_os.h"

void sendHeartbeatTask(void const* arg)
{
    uint32_t prevWakeTime = osKernelSysTick();

    for (;;)
    {
        sendHeartbeat(&prevWakeTime);
    }
}

void sendHeartbeat(uint32_t* prevWakeTimePtr)
{

    osDelay(LIGHTS_HEARTBEAT_FREQ);
    *prevWakeTimePtr += LIGHTS_HEARTBEAT_FREQ;

    // Send CAN Message

        CAN_TxHeaderTypeDef hdr = {0};
        hdr.StdId = 0x20U;
        hdr.DLC = 1U;
        uint8_t data[1] = {2};
        if (HAL_CAN_GetTxMailboxesFreeLevel(&hcan2) > 0)
    {
        uint32_t mailbox;

        if (HAL_CAN_AddTxMessage(&hcan2, &(hdr), data, &mailbox) == HAL_OK)
        {
            HAL_GPIO_TogglePin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);
        }
        else
        {
            HAL_CAN_Init(&hcan2);
        }
    }
}
