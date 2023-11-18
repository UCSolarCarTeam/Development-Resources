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
    // MOTORS
    // Check equality in motor ON/OFF status
    uint8_t isMotorOneOn = 0b00000001 & outputArray[0];
    uint8_t isMotorTwoOn = 0b00000001 & outputArray[1];

    // Check equality in velocity (magnitude and direction) 
    uint8_t motorOneVelocity = (0b01111110 & outputArray[0]) >> 1;
    uint8_t motorTwoVelocity = (0b01111110 & outputArray[1]) >> 1;

    // Check motors are in sync
    int isSynced = (isMotorOneOn == isMotorTwoOn) && (motorOneVelocity == motorTwoVelocity);

    if (isSynced)
    {
        // Set Motor 1 
        checkMotorData(isMotorOneOn, motorOneVelocity) ? validData[0] = 1 : validData[0] = 0;
        // Set Motor 2
        checkMotorData(isMotorTwoOn, motorTwoVelocity) ? validData[1] = 1 : validData[1] = 0;
    } else
    {
        validData[0] = 0;
        validData[1] = 0;
    }

    // LIGHTS


}

/** @brief Function that takes in motor ON/OFF status and returns 1 if data
* is valid and 0 if data is not valid.  This function only looks at the motor as a
* standalone unit and aasumes that it is synced with the other motor. 
* 
* @param[in] isMotorOn 8 bit integer with value 0000000 or 0000001
* @param[in] motorVelocity 8 bit integer representing the velocity of the motor
*/
int checkMotorData(uint8_t isMotorOn, uint8_t motorVelocity) {
    // When motor is off we need to check velocity
    if (!isMotorOn)
    {
        // Since motor is off, input is valid iff velocity is 0
        !velocity? return 1: return 0;
    }

    // Since we are assuming that motors are synced, any on state is valid
    return 1;
    
}
