#pragma once
#include <stdint.h>

uint8_t outputArray[3];
uint8_t validData; // Set bits 0, 1, 2 if the input array elements were valid

void trainingTask(uint8_t* data); // data should be 3 elements wide (size of 3)

/**
 * @brief Returns 1 if motors are in motion but in an invalid state
 * Invalid states are:
 * Forward + Negative Velocity
 * Backwards + Positive Velocity
 * Unmatched velocities
 * 
 * @param arr Input Data
 * @return 1 if invalid, 0 if valid
 */
int invalidLateral(uint8_t *arr);

/**
 * @brief Returns 1 if more than one or no headlight options are passed
 * 
 * @param arr Input Data
 * @return 1 if invalid, 0 i if valid
 */
int invalidHeadlight(uint8_t *arr);

/**
 * @brief Returns 1 both signal options are on
 * 
 * @param arr Input Data
 * @return 1 if invalid, 0 i if valid
 */
int invalidSignal(uint8_t *arr);

/**
 * @brief Returns 1 headlights are off while hazards are on
 * 
 * @param arr Input Data
 * @return 1 if invalid, 0 i if valid
 */
int invalidHazard(uint8_t *arr);

/**
 * @brief Returns break light state
 * 
 * @param arr Input Data
 * @return 1 if brakes are on, 0 if they are off
 */
int brakeLightOn(uint8_t *arr);

/**
 * @brief Returns a specific bit at given index of an unsigned 8 bit int
 * 
 * @param info Integer for which bit is extracted
 * @param index Index of bit
 * @return Bit number
 */
uint8_t getBit(uint8_t info, int index);

/**
 * @brief Returns the 6 bit velocity value as an 8 bit unsigned int
 * 
 * @param motor Motor information to read velocity
 * @return The non-sign extended version of velocity
 */
uint8_t readVelocity(uint8_t motor);
