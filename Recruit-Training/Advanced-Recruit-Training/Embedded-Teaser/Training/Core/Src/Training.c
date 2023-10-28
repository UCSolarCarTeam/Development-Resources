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
    int indicatorLStatus = ((data[2] >> 4 & 0b0001) == 1)? 1:0;
    int hazardsStatus = (data[2] >> 2) &0b000001; 
    int brakesStatus = (data[2]>> 1) & 0b0000001;
}
