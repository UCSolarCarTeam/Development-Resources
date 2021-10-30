#pragma once
#include <stdint.h>

uint8_t outputArray[3];
uint8_t validData; // Set bits 0, 1, 2 if the input array elements were valid

void trainingTask(uint8_t* data); // data should be 3 elements wide (size of 3)

int invalidLateral(uint8_t *arr);

int invalidHeadlight(uint8_t *arr);

int invalidSignal(uint8_t *arr);

int invalidHazard(uint8_t *arr);

int brakeLightOn(uint8_t *arr);

uint8_t getBit(uint8_t info, int index);

uint8_t readVelocity(uint8_t motor);
