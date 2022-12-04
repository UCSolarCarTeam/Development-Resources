#include "Training.h"

void trainingTask(uint8_t* data)
{
    uint8_t motor1_direction = data[0] & 0b00000001; //forward, reverse
    uint8_t motor1_velocity_sign = (data[0] & 0b01000000) >> 6; // sign of velocity
    uint8_t motor1_velocity = (data[0] & 0b00111110) >> 1; //velocity where 
    uint8_t motor1_o_f = (data[0] & 0b10000000) >> 7; //on and off - MSB, 1 is on 

    uint8_t motor2_direction = data[1] & 0b00000001; //forward, reverse
    uint8_t motor2_velocity_sign = (data[0] & 0b01000000) >> 6; // sign of velocity
    uint8_t motor2_velocity = (data[1] & 0b00111110) >> 1; //velocity where bit 6 is sign
    uint8_t motor2_o_f = (data[1] & 0b10000000) >> 7; //on and off - MSB 

    uint8_t lights_o_f = data[2] & 0b00000111; //headlights off, low, or high
    uint8_t lights_indicators = (data[2] & 0b00111000) >> 3; //right signal, left signal, or both for hazard
    uint8_t lights_brakes = (data[2] & 0b01000000) >> 6; //brakes

    uint8_t motor1_validity = (0b00000001 | validData);
    uint8_t motor2_validity = (0b00000010 | validData) >> 1;
    uint8_t lights_validity = (0b00000100 | validData) >> 2;
    
    //checking for motor1 and motor2 inputs...
    if (motor1_direction != motor2_direction || motor1_velocity_sign != motor2_velocity_sign || motor1_velocity != motor2_velocity || motor1_o_f != motor2_o_f) //if motor1 and motor2 are not equal
    {
        validData &= 0b1111110;
        validData &= 0b1111101;
    }

    if (motor1_direction != motor1_velocity_sign) validData &= 0b1111110; 
    if (motor2_direction != motor2_velocity_sign) validData &= 0b1111101;
    if (motor1_o_f = 0 && motor1_velocity != 0) validData &= 0b1111110; //if motor1 is off but velocity is not 0
    if (motor2_o_f = 0 && motor2_velocity != 0) validData &= 0b1111101; //if motor2 is off but velocity is not 0
        
    if (motor1_validity = 1) outputArray[0] = data[0]; //set motor1 output array to motor1 input array
    if (motor2_validity = 1) outputArray[1] = data[1]; //set motor2 output array to motor2 input array

    //checking for lights inputs...
    if (lights_o_f != 1 || lights_o_f != 2 || lights_o_f != 4) validData &= 0b1111011; //lights cannot be off, low, or high at the same time
    if (lights_indicators != 1 || lights_indicators != 2 || lights_indicators != 7) validData &= 0b1111011; //lights can either be right or left, but if hazards are on then right and left must be at same time
    if (lights_brakes == 1 && ((motor1_velocity || motor2_velocity) != 0)) validData &= 0b1111011; //velocity must be zero if breaks are pressed
    
    //then after checking for all invalid combinations...
    if (validData & 0b00000001 == 1) outputArray[0] = data[0]; //set motor1 output array to motor1 input array
    if (validData & 0b00000010 == 1) outputArray[1] = data[1]; //set motor2 output array to motor2 input array
    if (validData & 0b00000100 == 1) outputArray[2] = data[2]; //set lights output array to lights input array