#pragma once
#include <stdint.h>

uint8_t outputArray[3]; //uint8_t means only 8-bit integers
uint8_t validData; // Set bits 0, 1, 2 if the input array elements were valid
//validdata tells you if motor1, motor2, and lights are correct (1-correct, 0 -incorrect), bit 0 (far right) is motor1
void trainingTask(uint8_t* data); // data should be 3 elements wide (size of 3)
