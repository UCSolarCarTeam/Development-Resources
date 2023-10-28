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
    int headlightlevel = 0; 
    if (headlightsStatus > 0){
        headlightlevel = (((data[2] >> 6) & 0b01) == 0) ? 1:0;
    }
    int Rsignal = (data[2] >> 4) & 0b0001;
    int Lsignal = (data[2] >> 3) & 0b00001;
    int hazardsStatus = (data[2] >> 2) &0b000001; 
    int brakesStatus = (data[2]>> 1) & 0b0000001;

    //Creates empty int to input data
    int output0 = 0b00000000;
    int output1 = 0b00000000;
    int output2 = 0b00000000;

    //Output 0 and 1 set
    if (statusM1 == 1 && statusM2 == 1){ //Both motors are on
        if(velocityM1 > 0 && velocityM2 > 0 && directionM1 == directionM2){ //velocity + Direction is + 
            output0 = output0 | (directionM1 << 7);
            output0 = output0 | (velocityM1 << 1); 
            output0 = output0 | statusM1;

            output1 = output1 | (directionM2 << 7);
            output1 = output1 | (velocityM2 << 1); 
            output1 = output1 | statusM2;
        }
    }

    //Output 2 set
    output2 = output2 | (headlightsStatus << 7);
    output2 = output2 | (headlightlevel << 6);
    output2 = output2 | ((~headlightlevel) << 5);
    if( Rsignal != Lsignal || (Lsignal == 0 && Rsignal == 0)){
                output2 = output2 | Rsignal << 4;
                output2 = output2 | Lsignal << 3;         
    }
    output2 = output2 | hazardsStatus << 2;
    output2 = output2 | brakesStatus << 1;
    
    //output
    outputArray[0] = output0;
    outputArray[1] = output1;
    outputArray[2] = output2;
}
