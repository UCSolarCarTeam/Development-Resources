#include "Training.h"

void trainingTask(uint8_t* data)
{
    validData = 0b111;
    if(getBit(data[0],7) != getBit(data[1],7)) // Aynschronous Motor
    {
        validData &= 0b001;
    }
    else if(getBit(data[0],7) == 1) // Motor On
    {
        if(brakeLightOn(data)) // Brake lights while motors are on
        {
            validData &= 0b110;
        }
        if(invalidLateral(data)) // Checks motors are in sync and valid (direction and sign)
        {
            validData &= 0b001;
        }
    }
    else // Motor off
    {
        if(!brakeLightOn(data)) // No brake lights while motors are off
        {
            validData &= 0b110;
        }
        if(readVelocity(data[0])!=0 || readVelocity(data[1])!=0) // Non zero velocity when motors are off
        {
            validData &= 0b001;
        }
    }

    // Checking lights
    if(invalidHeadlight(data) || invalidSignal(data) || invalidHazard(data)) // Checking lights
    {
        validData &= 0b110;
    }
    
    // Writing to output
    for(int i = 0 ; i < 3 ; i++)
    {
        if(validData >> 2-i & 1)
            outputArray[i] = data[i];
        else
            outputArray[i] = 0;
    }
}

int invalidLateral(uint8_t *arr)
{
    return
    getBit(arr[0],0) == getBit(arr[0],6)                // Check if motor 1 direction and velocity don't match
    || getBit(arr[1],0) == getBit(arr[1],6)             // Check if motor 2 direction and velocity don't match
    || readVelocity(arr[0]) != readVelocity(arr[1]);    // Check if velocities are not the same
}

int invalidHeadlight(uint8_t *arr)
{
    return 
    getBit(arr[2],0) + getBit(arr[2],1) + getBit(arr[2],2) != 1; // Check that one and only one headlight setting is on
}

int invalidSignal(uint8_t *arr)
{
    return
    getBit(arr[2],3) + getBit(arr[2],4) > 1; // Check if right and left signals are on
}

int invalidHazard(uint8_t *arr)
{
    return
    getBit(arr[2],5) && getBit(arr[2],0);   // Check hazards and headlights off are on simultaneously
}

int brakeLightOn(uint8_t *arr)
{
    return 
    getBit(arr[2],6);  // Checks if brake lights are on
}

uint8_t getBit(uint8_t info, int index)
{
    return info >> index & 1;
}

uint8_t readVelocity(uint8_t motor)
{
    return motor >> 1 & 0b111111; // For comparing the 6 bits
}