#include "Training.h"

uint8_t outputArray[3];
uint8_t validData; // Set bits 0, 1, 2 if the input array elements were valid

#define MOTOR_FWD 0b10000001
#define MOTOR_BWD 0b11000001

#define MOTOR_ON 0b10000000
#define VELOCITY 0b1111110
#define VELOCITY_SIGN  0b1000000
#define DIRECTION 0b1

#define HEADS 0b111
#define BLINKERS 0b111000

void trainingTask(uint8_t* data)
{
    uint8_t motor1 = data[0];
    uint8_t motor2 = data[1];
    uint8_t lights = data[2];

    // Velocities
    uint8_t m1_velocity = (motor1 & VELOCITY) >> 1;
    uint8_t m2_velocity = (motor2 & VELOCITY) >> 1;

    // Motor On/Off
    uint8_t m1_status = (motor1 & MOTOR_ON) >> 7;
    uint8_t m2_status = (motor2 & MOTOR_ON) >> 7;
    
    // Motors are synced if velocities are the same 
    // and both on or both off
    uint8_t isSynced = (m1_velocity == m2_velocity) 
                    && (m1_status == m2_status);



    if(isSynced){ // Velocity and Status are equal
        uint8_t m1_dir = motor1 & DIRECTION;
        uint8_t m2_dir = motor2 & DIRECTION;
        if(m1_dir == m2_dir){ // Directions are the same
            uint8_t m1_vnbit = motor1 & VELOCITY_SIGN;    
            if(m1_dir != m1_vnbit){

            }
        } else if (m1_status == 0){
            
        }
    }
    
    // Valid Positive/Negative Velocity
    uint8_t isValidFWD = ((motor1 & MOTOR_FWD) == MOTOR_FWD);
    uint8_t isValidBWD = ((motor1 & MOTOR_BWD) == MOTOR_BWD);
    uint8_t isValidOFF = m1_status && ((motor1 & 0b11111110) == 0);

    uint8_t isValidVelocity = (isValidFWD || isValidFWD || isValidOFF);

    uint8_t headlights = (lights & HEADS);
    uint8_t blinkers = (lights & BLINKERS) >> 3;

    // H = Head, O = Low, F = Off
    // Boolean for Valid Headlights: ~H~OF + ~HO~F + H~O~F

    // L = Left, R = Right, H = Hazards
    // Boolean for Valid Blinkers: LRH + ~L~R + ~L~H + ~R~H

    if (isSynced)      
    {

        // Valid for both motors, since they should be in sync
        outputArray[0] = data[0];
        outputArray[1] = data[1];
        validData |= 0b00000011;
    } else {
        outputArray[0] = 0;
        outputArray[1] = 0;
    }

    // Check Lights validity

    if (((headlights & 001) 
        ^ (headlights & 010)
        ^ (headlights & 100))   
      && ((blinkers & 001) == 001
        ^ (blinkers & 010) == 010
        ^ (blinkers & 100) == 100)){

        outputArray[2] = data[2];

    }

}
