#include "Training.h"

void trainingTask(uint8_t* data)
{

validData = 0b00000000;

// Motor
uint8_t motor = 0b10000000;
uint8_t velocity = 0b01111110;
uint8_t direction = 0b00000001;
uint8_t vsign = 0b01000000;

// lights
uint8_t headlights = 0b00000111;
uint8_t signal_lights = 0b00011000;
uint8_t hazards = 0b00100000;
uint8_t brakes = 0b01000000;


// Test for motor, first two if statements checks if motors are in sync

if (data[0]&motor == data[1]&motor){
    if (data[0]&velocity == data[1]&velocity)
    {
        // Test for motor1 direction
        if ((( data[0]&vsign == 0) && (data[0]&direction == 0b00000001)) || ((data[0]&vsign == 0b01000000) && (data[0]&direction == 0)))
        {
            outputArray[0] = data[0];
            validData | 0b00000001;
        }
        else{
        // Test for motor2 direction
        if ((( data[1]&vsign == 0) && (data[1]&direction == 0b00000001)) || ((data[1]&vsign == 0b01000000) && (data[1]&direction == 0)))
        {
            outputArray[1] = data[1];
            validData | 0b00000010;
        }
        }
    }
}

// Test for lights
if (data[2]&headlights == 1 || data[2]&headlights == 2 || data[2]&headlights == 4){
    if (data[2]&signal_lights == 8 || data[2]&signal_lights == 16 || data[2]&signal_lights == 0){
        outputArray[2] = data[2];
        validData | 0b00000100;
    }
}


