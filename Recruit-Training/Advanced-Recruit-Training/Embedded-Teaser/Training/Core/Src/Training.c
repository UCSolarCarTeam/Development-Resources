#include "Training.h"

void trainingTask(uint8_t* data)
{

    validData = 0b00000000;
    outputArray[0] = 0;
    outputArray[1] = 0;
    outputArray[2] = 0;

    // Motor Velocity and direction, used to check if motors are in sync
    uint8_t velocity1 = data[0] & 0b01111111;
    uint8_t velocity2 = data[1] & 0b01111111;

    // Motor On/Off
    uint8_t motor1 = data[0] & 0b10000000;
    uint8_t motor2 = data[1] & 0b10000000;

    // Motor direction
    uint8_t direction = data[0] & 0b01000001;

    // lights
    uint8_t headlights = data[2] & 0b00000111;
    uint8_t head_shift = data[2] & 0b00000100;
    uint8_t signal_lights = data[2] & 0b00011000;


    // Test for motor, first two if statements checks if motors are in sync
    // Third if statement checks if velocity sign and direction are in sync and is valid
    // Valid values for direction is 64 (0b01000000) and 1 (0b00000001)


    if (motor1 == motor2){
        if (velocity1 == velocity2){
            if(direction == 1 || direction == 64){
                outputArray[0] = data[0];
                outputArray[1] = data[1];
                validData | 0b00000011;
            }
            
        }

    }

    // Test for signal lights
    // Checks to see if both signal lights are on, if so then lights are not valid
    if (signal_lights == 0b00011000){
        outputArray == 0;
        validData = validData & 0b00000110;
    }


    // Test for Headlights
    // Counter for number of set bits in headlight, more than one means lights are invalid
    // Created a loop to "bitwise &" the headlight option and right shifts each time till it reaches the last option
    int set_bits = 0;
    for(int i = 0; i < 3; i++){
        if( (headlights & head_shift) != 0 ){
            set_bits++;
        }
        head_shift>>1;
    }

    if (set_bits <= 1){
        outputArray[2] = data[2];
        validData = validData | 0b00000001;
    }
}