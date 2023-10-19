#include "Training.h"

void trainingTask(uint8_t* data)
{
    uint8_t motor1 = data[0];
    uint8_t motor2 = data[1];
    uint8_t lights = data[2];

    if ((motor1 & 0b10000001) != 0) {
        // Valid command for Motor 1
        outputArray[0] = data[0];
        validData |= 0b00000001;
    } else {
        // Invalid command for Motor 1
        outputArray[0] = 0;
    }

    // Check Motor 2 validity
    if ((motor2 & 0b10000001) != 0) {
        // Valid command for Motor 2
        outputArray[1] = data[1];
        validData |= 0b00000010;
    } else {
        // Invalid command for Motor 2
        outputArray[1] = 0;
    }

    // Check Lights validity
    if ((lights & 0b11111111) != 0) {
        // Valid command for Lights
        outputArray[2] = data[2];
        validData |= 0b00000100;
    } else {
        // Invalid command for Lights
        outputArray[2] = 0;
    }
}
