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
    osDelayUntil(prevWakeTimePtr, LIGHTS_HEARTBEAT_FREQ);
    // Allocate CAN Message, deallocated by sender "sendCanTask()"
    CanMsg* msg = {0};
    /// Populate CAN Message
    msg->StdId = LIGHTS_HEARTBEAT_STDID;
    msg->DLC = 1;
    msg->Data[0] = 1;


    // Send CAN Message

        CAN_TxHeaderTypeDef hdr = {0};
        hdr.StdId = msg->StdId;
        hdr.DLC = msg->DLC;
        if (HAL_CAN_GetTxMailboxesFreeLevel(&hcan2) > 0)
    {
        uint32_t mailbox;

        if (HAL_CAN_AddTxMessage(&hcan2, &(hdr), msg->Data, &mailbox) == HAL_OK)
        {
            HAL_GPIO_TogglePin(LED_GREEN_GPIO_Port, LED_GREEN_Pin);
        }
        else 
        {
            HAL_CAN_Init(&hcan2);
        }
    }
}