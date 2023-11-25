#include "Training.h"

uint8_t outputArray[3];
uint8_t validData; // Set bits 0, 1, 2 if the input array elements were valid

void trainingTask(uint8_t* data) {
    // Check if Motor 1 and Motor 2 are in sync (both on/off and direction)
    if ((data[0] & 0x81) == 0x81 && (data[1] & 0x81) == 0x81) {
        // Motor 1 and Motor 2 are in sync and valid, set bit 0 in validData
        validData |= 0x01;

        // Set the output array values to the input array values for Motor 1 and Motor 2
        outputArray[0] = data[0];
        outputArray[1] = data[1];
    }

    // Check if Lights data is valid
    if ((data[2] & 0b00011111) == data[2]) {
        // Lights data is valid, set bit 1 in validData
        validData |= 0x02;

        // Set the output array value to the input array value for Lights
        outputArray[2] = data[2];
    }

    // Check if any of the motors are on (bit 7)
    if ((data[0] & 0x80) || (data[1] & 0x80)) {
        // At least one motor is on, set bit 2 in validData
        validData |= 0x04;
    }
}
