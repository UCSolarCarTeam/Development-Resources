#include "Training.h"

void trainingTask(uint8_t* data)
{

validData = 0b00000000;

// Motor direction
uint8_t direction = 0b01000001;

// lights
uint8_t headlights = 0b00000111;
uint8_t head_shift = 0b00000100;
uint8_t signal_lights = 0b00011000;


// Test for motor, first two if statements checks if motors are in sync
// Valid values for direction is 64 (0b01000000) and 1 (0b00000001)

if (data[0] == data[1]){
    if (data[0] & direction == 1 || data[0] & direction == 64){
        outputArray[0] = data[0];
        outputArray[1] = data[1];
        validData | 0b00000011;
    }

}

// Test for lights
int i = 0;
while(i < 3){
    if ((data[2] & headlights) == (head_shift >> i)){
        if ((data[2] & signal_lights) != 0b00011000){
            outputArray[2] = data[2];
            validData | 0b00000100;
        }
    }
    else
        i++;
}




/*   old work for motors
if (data[0] & motor == data[1] & motor){                            // checks if both motors are on/off
    if (data[0] & velocity == data[1] & velocity){                  // checks if both motors have same velocity

        // Test for motor1 direction
        if ((( data[0]&vsign == 0) && (data[0]&direction == 0b00000001)) || ((data[0]&vsign == 0b01000000) && (data[0]&direction == 0)))
            outputArray[0] = data[0];
            validData | 0b00000001;


        // Test for motor2 direction
        if ( (( data[1]&vsign == 0) && (data[1]&direction == 0b00000001)) || ((data[1]&vsign == 0b01000000) && (data[1]&direction == 0)) )
            outputArray[1] = data[1];
            validData | 0b00000010;
    }
}
*/


/*   old work for lights      
if (data[2]&headlights == 1 || data[2]&headlights == 2 || data[2]&headlights == 4){                     // checks if only 1 headlight setting is on
    if (data[2]&signal_lights == 8 || data[2]&signal_lights == 16 || data[2]&signal_lights == 0){       // checks if only 1 signal light setting is on
        outputArray[2] = data[2];
        validData | 0b00000100;
    }
}
*/
