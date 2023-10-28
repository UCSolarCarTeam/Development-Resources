#include "Training.h"

void trainingTask(uint8_t* data)
{
     //Motor 1 info 
    int directionM1 = data[0] >> 7; 
    int velocityM1 = (data[0] & 0b0111110)>> 1; 
    int statusM1 = data[0] & 0b0000001;

    //Motor 2 info 
    int directionM2 = data[1] >> 7; 
    int velocityM2 = (data[1] & 0b0111110)>> 1; 
    int statusM2 = data[1] & 0b0000001;

    //Other info
    int headlightsStatus = data[2] >> 7;
    if (headlightsStatus > 0){
        int headlightlevel = (((data[2] >> 6) & 0b01) == 0) ? 1:0;
    }
    int Rsignal = (data[2] >> 4) & 0b0001;
    int Lsignal = (data[2] >> 3) & 0b00001;
    int hazardsStatus = (data[2] >> 2) &0b000001; 
    int brakesStatus = (data[2]>> 1) & 0b0000001;

    if (statusM1 == 1 && statusM2 == 1){ //Both motors are on
        if(velocityM1 > 0 && velocityM2 > 0 && directionM1 == directionM2){ //velocity + Direction is + 
            if( Rsignal != Lsignal || (Lsignal == 0 && Rsignal == 0)){
                
            }
        }
    }

}
