#include "Training.h"
#include <stdio.h>

void trainingTask(uint8_t* data){
    uint8_t motor1_forward_or_reverse = data[0] & 0b00000001;
    uint8_t motor_1_velocity = data[0] & 0b00111110;
    uint8_t motor_1_sign = data[0] & 0b01000000;
    uint8_t motor_1_on_off = data[0] & 0b10000000;
    uint8_t motor2_forward_or_reverse = data[1] & 0b00000001;
    uint8_t motor_2_velocity = data[1] & 0b00111110;
    uint8_t motor_2_sign = data[1] & 0b01000000;
    uint8_t motor_2_on_off = data[1] & 0b10000000;
    uint8_t headlights_off = data[2] & 0b00000001; 
    uint8_t headlights_low = data[2] & 0b00000010; 
    uint8_t headlights_high = data[2] & 0b00000100;
    uint8_t right_signal = data[2] & 0b00001000;
    uint8_t left_signal = data[2] & 0b00010000;
    uint8_t hazards = data[2] & 0b00100000;
    uint8_t brakes = data[2] & 0b01000000;
    
    validData = 0b00000111;
    outputArray[0] = 0b00000001;
    outputArray[1] = 0b00000010;
    outputArray[2] = 0b00000100;
    //VALID IF:
    
    //Both motors must be in same direction, ON or OFF, M1 Velocity == M2 Velocity 
    if(
        motor1_forward_or_reverse != motor2_forward_or_reverse ||
        motor_1_on_off != motor_2_on_off ||
        motor_1_velocity != motor_2_velocity
    ){
        outputArray[0] = 0b00000000;
        validData &= 0b00000100;
        outputArray[1] = 0b00000000;
    }
    //Motor1 velocity is + and in forward dir.
    //Motor1 velocity is - and in reverse dir.
    if(
        (motor1_forward_or_reverse == 0b00000001 && motor_1_sign > 0) ||
        ((motor1_forward_or_reverse == 0b00000000 && motor_1_sign == 0 && motor_1_velocity != 0))
    ){
        outputArray[0] = 0b00000000;
        validData &= 0b00000110;
    }
    
    //same as above mtr 2.
    if(
        (motor2_forward_or_reverse == 0b00000001 && motor_2_velocity < 0) ||
        ((motor2_forward_or_reverse == 0b00000000 && motor_2_sign == 0) && (motor_2_velocity != 0))
    ){
        outputArray[1] = 0b00000000;
        validData &= 0b00000101;        
    }
    
    //Headlights off = 1 and low or high == 0
    //left/right signals ON when hazards ON
    if(
    (headlights_off == 0b00000001 && (headlights_low == 0b00000010 || headlights_high == 0b00000100)) ||
    (hazards == 0b00000000 && right_signal == 0b00001000 && left_signal == 0b00010000)
    ){
        outputArray[2] = 0b00000000;
        validData &= 0b00000011;        
    }
}