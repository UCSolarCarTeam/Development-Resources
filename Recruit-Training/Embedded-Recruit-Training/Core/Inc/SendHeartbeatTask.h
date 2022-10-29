#pragma once

#include "stm32f4xx.h"
#include "stm32f4xx_hal_gpio.h"
#include "stm32f4xx_hal_can.h"
#include "cmsis_os.h"
#include "main.h"

#define LIGHTS_HEARTBEAT_FREQ 1000 // 1Hz = 1000ms
#define LIGHTS_HEARTBEAT_STDID 0x710U

extern CAN_HandleTypeDef hcan2; // main.c
extern uint8_t reset;

typedef struct
{
    uint32_t StdId;
    uint32_t DLC;
    uint8_t Data[8];
} CanMsg;

void sendHeartbeatTask(void const* arg);
void sendHeartbeat(uint32_t* prevWakeTimePtr);