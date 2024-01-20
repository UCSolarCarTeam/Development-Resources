/*
 * RedSwitchTask.h
 *
 *  Created on: Jan 20, 2024
 *      Author: dominic
 */

#pragma once

#include "stm32l1xx.h"
#include "stm32l1xx_hal_gpio.h"
#include "CAN.h"
#include "cmsis_os.h"
#include "main.h"

extern osMutexId_t SPIMutexHandle;

void redSwitchTask(void const* arg);
