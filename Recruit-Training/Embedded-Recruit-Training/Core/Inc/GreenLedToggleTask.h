#pragma once

#include "stm32f4xx.h"
#include "stm32f4xx_hal_gpio.h"
#include "stm32f4xx_hal_can.h"
#include "cmsis_os.h"
#include "main.h"

//TODO: Define an external CAN handle (same variable as in main)
CAN_HandleTypeDef hcan2;
//TODO: Define external CAN_Tx header (same variable as in main)
CAN_TxHeaderTypeDef txHeader;
//TODO: Define external green LED toggle task (same variable as in main)
extern uint8_t greenFlag;
osMutexId_t mutexHandle;

void greenLedToggleTask(void const* arg);
