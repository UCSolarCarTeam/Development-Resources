#include "Training.h"

void trainingTask(uint8_t* data)
{
    //Motor 1 data collecting
    uint8_t Motor1forwardVsReverse = data[0] & 0b00000001;

    uint8_t Motor1onOrOff = (data[0] & 0b10000000)>>7;

    uint8_t Motor1Velocity = (data[0] & 0b00111110)>>1;

    uint8_t Motor1VelocitySign = (data[0] & 0b01000000)>>6;

    if (Motor1VelocitySign == 1)
    {
        Motor1Velocity = -Motor1Velocity;
    } 


    //Motor 2 Data Collecting
    uint8_t Motor2forwardVsReverse = data[1] & 0b00000001;
    
    uint8_t Motor2onOrOff = (data[1] & 0b10000000)>>7;

    uint8_t Motor2Velocity = (data[1] & 0b00111110)>>1;

    uint8_t Motor2VelocitySign = (data[1] & 0b01000000)>>6;

    if (Motor2VelocitySign == 1)
    {
        Motor2Velocity = -Motor2Velocity;
    } 
    
    //Light Data Collecting
    uint8_t LightInfoHeadLightsOff = data[2] & 0b00000001;

    uint8_t LightInfoHeadLightsLow = (data[2] & 0b00000010)>>1;

    uint8_t LightInfoHeadLightsHigh = (data[2] & 0b00000100)>>2;

    uint8_t LightInfoRightSignal = (data[2] & 0b00001000)>>3;

    uint8_t LightInfoLeftSignal = (data[2] & 0b00010000)>>4;

    uint8_t LightInfoHazrad = (data[2] & 0b00100000)>>5;

    uint8_t LightInfoBrakes = (data[2] & 0b01000000)>>6;


    //what u have to do: prove that the car works, a bunch of if statements saying whether the car is working according to reality ✓



    //The line makes it so its an OR comparision. Like if two values of 00001010 and 10100000 are compared, if there's 1 peresnt in either or of them, then the new value is 1, if not its 0.
    validData = validData | 7;


    if (Motor1onOrOff != Motor2onOrOff)
    {
        //the number 00000100 means the following. The right most 0 refers to the first motor. If it's 0 then that means the first motor is invalid. 1 means valid. 
        //for the sentence ^, the second digit from the right refers to the second motor
        //The 1 in the number refers to the lights and that's saying they are valid.
        validData = validData & 0b00000100;
    }


    
    //if the car is going forward in motor 1 & 2 then true, if not and they're different directions then false
    if (Motor1forwardVsReverse != Motor2forwardVsReverse)
    {
        validData = validData & 0b00000100; 
    }
    
    //if the velcoity signs aren't the same on both motor 1 & 2 then it's false and doesn't run
    if (Motor1VelocitySign != Motor2VelocitySign) 
    {
        validData = validData & 0b00000100; 
    }

    //if the velocity is negative and the break lights aren't on then it's false and won't run

    //01000000 //01000000
    if (Motor1VelocitySign == Motor2VelocitySign) 
    {
        if (Motor2VelocitySign != LightInfoBrakes)
        {
            validData = validData & 0b00000011; 
        }
    }

        //if both motors are on and the headlights arent on then:
    if  (Motor1onOrOff)
    {
        if (Motor2onOrOff)
        {
            if (LightInfoHeadLightsOff != 0b00000000)
            {
                validData = validData & 0b00000011;
            }
        }
    }



//what u have to do now is defining and changing the outputArray ✓
    outputArray[0] = 0;
    outputArray[1] = 0;
    outputArray[2] = 0;

    if (validData & 1)
    {
        outputArray[0] = data[0];
    }

    if (validData & 0b00000010)
    {
        outputArray[1] = data[1];
    }

    if (validData & 0b00000100)
    {
        outputArray[2] = data[2];
    }




}



