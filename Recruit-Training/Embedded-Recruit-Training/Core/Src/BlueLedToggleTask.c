#include "BlueLedToggleTask.h"

void blueLedToggleTask(void const* arg)
{
    //One time osDelayUntil initialization
    uint32_t prevWakeTime = xTaskGetTickCount();

    for (;;)
    {
        //TODO: Add BLUE_LED_TOGGLE_FREQ to prevWakeTime
        osDelayUntil(prevWakeTime);
        //TODO: Check blue toggle flag and toggle blue LED
        //TODO: Send CAN message indicating current state of LED
    }
}
