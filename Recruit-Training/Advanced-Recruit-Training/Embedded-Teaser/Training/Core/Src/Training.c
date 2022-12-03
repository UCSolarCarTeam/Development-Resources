#include "Training.h"
#include <stdio.h>

void trainingTask(uint8_t* data){
    uint8_t motor1ForwardReverse = data[0] & 0b00000001;
    uint8_t motor1Velocity = data[0] & 0b00111110;
    uint8_t motor1Sign = data[0] & 0b01000000;
    uint8_t motor1OnOff = data[0] & 0b10000000;
    uint8_t motor2ForwardReverse = data[1] & 0b00000001;
    uint8_t motor2Velocity = data[1] & 0b00111110;
    uint8_t motor2Sign = data[1] & 0b01000000;
    uint8_t motor2OnOff = data[1] & 0b10000000;
    uint8_t headlightsOff = data[2] & 0b00000001; 
    uint8_t headlightsLow = data[2] & 0b00000010; 
    uint8_t headlightsHigh = data[2] & 0b00000100;
    uint8_t rightSignal = data[2] & 0b00001000;
    uint8_t leftSignal = data[2] & 0b00010000;
    uint8_t hazards = data[2] & 0b00100000;
    uint8_t brakes = data[2] & 0b01000000;
    
    validData = 0b00000111;
    outputArray[0] = 0b00000001;
    outputArray[1] = 0b00000010;
    outputArray[2] = 0b00000100;
    //VALID IF:
    
    //Both motors must be in same direction, ON or OFF, M1 Velocity == M2 Velocity 
    if(
        motor1ForwardReverse != motor2ForwardReverse ||
        motor1OnOff != motor2OnOff ||
        motor1Velocity != motor2Velocity
    ){
        outputArray[0] = 0b00000000;
        validData &= 0b00000100;
        outputArray[1] = 0b00000000;
    }
    //Motor1 velocity is + and in forward dir.
    //Motor1 velocity is - and in reverse dir.
    if(
        (motor1ForwardReverse == 0b00000001 && motor1Sign > 0) ||
        ((motor1ForwardReverse == 0b00000000 && motor1Sign == 0 && motor1Velocity != 0))
    ){
        outputArray[0] = 0b00000000;
        validData &= 0b00000110;
    }
    
    //same as above mtr 2.
    if(
        (motor2ForwardReverse == 0b00000001 && motor2Velocity < 0) ||
        ((motor2ForwardReverse == 0b00000000 && motor2Sign == 0) && (motor2Velocity != 0))
    ){
        outputArray[1] = 0b00000000;
        validData &= 0b00000101;        
    }
    
    //Headlights off = 1 and low or high == 0
    //left/right signals ON when hazards ON
    if(
    (headlightsOff == 0b00000001 && (headlightsLow == 0b00000010 || headlightsHigh == 0b00000100)) ||
    (hazards == 0b00000000 && rightSignal == 0b00001000 && leftSignal == 0b00010000)
    ){
        outputArray[2] = 0b00000000;
        validData &= 0b00000011;        
    }
}