#include "Training.h"

// uint8_t 8 bit-unsigned integer
uint8_t outputArray[3];
uint8_t validData; // Set bits 0, 1, 2 if the input array elements were valid

/**
NOTE: I decided that if the motors do not have matching ON/OFF status or do not have matching velocity*, both motor inputs will be flagged as wrong (it's hard to know which motor is "right" when they are not in sync).

* Velocity will be compared in its vector form. i.e. v1 = v2 if and only if they are equal in magnitude and direction.
*/


void trainingTask(uint8_t* data)
{
    // Check equality in motor ON/OFF status
    // 00000001 (1)
    uint8_t isMotorOneON = 1 & outputArray[0];
    uint8_t isMotorTwoON = 1 & outputArray[1];

    // Check equality in motor velocity
    // 01111110 (126)
    uint8_t motorOneVelocity = 126 & outputArray[0];
    int motorTwoVelocity = 126 & outputArray[1];

    // Check motors are in sync
    int isSynced = (isMotorOneON == isMotorTwoON) && (motorOneVelocity == motorTwoVelocity);
}
