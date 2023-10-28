#include "Training.h"
#include <stdio.h>

void trainingTask(uint8_t* data)
{
    
    int direction, velocity , state , direction2 , velocity2 , state2;
    
    //motor1 
    direction = (data[0] >> 7);

    velocity = data[0] & 0b01111110; 
    
    state = (data[0] << 7);

    
    //motor 2 
    direction2 = (data[1]>>7);

    velocity2 = data[1] & 0b01111110;

    state2 = (data[1] << 7); 

    //light info
    int headlightStatus = data[2] >> 7; 
    int headlightLevel;

    if (headlightStatus > 0){
        headlightLevel = (((data[2] >> 6) & 0b01) < 1)? 1:0; 
    }

    int RightSignal_status = ((data[2] >> 2) & 0b00010);
    int LeftSignal_status = ((data[2] >> 2) & 0b00001);

    int hazardStatus = ((data[2] >> 1) & 0b000001);
    int brakesStatus = data[2] & 0b0000001;

    //creating sequence of results & adding it to the output array. 
    int motor1seq = 0b00000000;
    int motor2seq = 0b00000000;
    int headlightseq = 0b00000000;

    if(state > 1 && state2 > 1){
        if(direction == direction2 && velocity > 0 && velocity2 > 0){
            motor1seq = (direction << 7) | motor1seq;
            motor1seq = motor1seq | (velocity << 1);
            motor1seq = motor1seq | state; 

            outputArray[0] = motor1seq;

            motor2seq = (direction2 << 7) | motor2seq;
            motor2seq = motor2seq | (velocity2 << 1);
            motor2seq = motor2seq | state2; 

                outputArray[1] = motor2seq;
        }

    }
    headlightseq = headlightseq | (headlightStatus << 7);
    headlightseq = headlightseq | (headlightLevel << 6);
    headlightseq = headlightseq | (~headlightLevel << 5);
    headlightseq = headlightseq | (brakesStatus << 1);
    
    if(RightSignal_status != LeftSignal_status || RightSignal_status == 0 && LeftSignal_status == 0){
            
        headlightseq = headlightseq | (RightSignal_status << 4);
        headlightseq = headlightseq | (LeftSignal_status << 3);
    }

    if(hazardStatus ==1){
        if(RightSignal_status == LeftSignal_status){
            headlightseq = headlightseq | (hazardStatus << 2);
        }
    }

    outputArray[2] = headlightseq; 


}



