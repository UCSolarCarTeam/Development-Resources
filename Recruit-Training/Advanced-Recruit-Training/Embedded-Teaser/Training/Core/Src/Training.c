#include "../Inc/Training.h" 
#include <stdio.h>
#include <stdbool.h>

void trainingTask(uint8_t* data)
{  
   int bitmask0 = 0b00000001;
   int bitmask1 = 0b00000010;
   int bitmask2 = 0b00000100;
   int bitmask3 = 0b00001000;
   int bitmask4 = 0b00010000;
   int bitmask5 = 0b00100000;
   int bitmask6 = 0b01000000;
   int bitmask7 = 0b10000000;

   int x = 0b010101001;
   int A = (bitmask0 & x);
   int B = (bitmask1 & x)>> 1;
   int C = (bitmask2 & x)>> 2;
   int D = (bitmask3 & x)>>3;
   int E = (bitmask4 & x)>>4;
   int F = (bitmask5 & x)>>5;
   int G = (bitmask6 & x)>>6;
   int H = (bitmask7 & x)>>7;

   
   
   

}

bool checkMotors(uint8_t* data)
{
   int bitmask0 = 0b00000001;
   int bitmask1 = 0b00000010;
   int bitmask2 = 0b00000100;
   int bitmask3 = 0b00001000;
   int bitmask4 = 0b00010000;
   int bitmask5 = 0b00100000;
   int bitmask6 = 0b01000000;
   int bitmask7 = 0b10000000;

   int motor1 = 0b10101001;
   int motorOneDirection = (bitmask0 & motor1);
   int motorOneVelocitySign = (bitmask6 & motor1)>>6;
   int motorOneStatus = (bitmask7 & motor1)>>7;
   int motorOneVelocity = motor1 >> 1 ;
   motorOneVelocity = motorOneVelocity & 0b0011111;





   if (motorOneStatus == 1){
      printf("motor status: on\n");
   }else if (motorOneStatus == 0){
      printf("motor status: off\n");
   }

   if (motorOneVelocitySign == 1){
      printf("Motor One Velocity: +%d\n", motorOneVelocity);
   }else if (motorOneVelocitySign == 0){
      printf("Motor One Velocity: -%d\n", motorOneVelocity);
   }

   if (motorOneDirection == 0){
      printf("Motor One Direction: reverse\n");
   } else if (motorOneDirection == 1){
      printf("Motor One Direction: forward\n");
   }

   int motor2 = 0b01010101;
   int motorTwoDirection = (bitmask0 & motor2);
   int motorTwoVelocitySign = (bitmask6 & motor2)>>6;
   int motorTwoStatus = (bitmask7 & motor2)>>7;
   int motorTwoVelocity = motor2 >> 1 ;
   motorTwoVelocity = motorTwoVelocity & 0b0011111;

   if (motorTwoStatus == 1){
      printf("motor two status: on\n");
   }else if (motorTwoStatus == 0){
      printf("motor two status: off\n");
   }

   if (motorTwoVelocitySign == 1){
      printf("Motor Two Velocity: +%d\n", motorTwoVelocity);
   }else if (motorTwoVelocitySign == 0){
      printf("Motor Two Velocity: -%d\n", motorTwoVelocity);
   }

   if (motorTwoDirection == 0){
      printf("Motor Two Direction: reverse\n");
   } else if (motorTwoDirection == 1){
      printf("Motor Two Direction: forward\n");
   }
   if (motorOneStatus != motorTwoStatus)
   {
      return false;
   }
   if (motorOneDirection != motorTwoDirection){
      return false;
   }
   if ((motorOneVelocitySign != motorTwoVelocitySign) && (motorOneVelocity != motorTwoVelocity)){
      return false;
   }
   if (( motorTwoStatus == 0) && (motorTwoVelocity != 0 )){
      return false; 
   }
   if ((motorOneStatus == 0) && (motorOneVelocity != 0)){
      return false;
   }
   if (motorOneDirection ==  motorOneVelocitySign){
      return false;
   }
   if (motorTwoDirection == motorTwoVelocitySign){
      return false;
   }
   return true;

}

bool checkLights(uint8_t* data){
   int bitmask0 = 0b00000001;
   int bitmask1 = 0b00000010;
   int bitmask2 = 0b00000100;
   int bitmask3 = 0b00001000;
   int bitmask4 = 0b00010000;
   int bitmask5 = 0b00100000;
   int bitmask6 = 0b01000000;
   int bitmask7 = 0b10000000;


   int lightInformation = 0b01110111;
   int headlightStatus = (bitmask0 & lightInformation);
   int headlightsLow = (bitmask1 & lightInformation)>> 1;
   int headlightsHigh = (bitmask2 & lightInformation)>> 2;
   int rightSignal = (bitmask3 & lightInformation)>>3;
   int leftSignal = (bitmask4 & lightInformation)>>4;
   int hazardLights = (bitmask5 & lightInformation)>>5;
   int brakeLights = (bitmask6 & lightInformation)>>6;

   if (headlightStatus == 1 ){
      printf("headlights: off\n");
   }else if (headlightStatus == 0){
      printf ("headlights: on\n");
   }
   if (headlightsLow == 1){
      printf("headlights: low\n");
   }
   if (headlightsHigh == 1){
      printf("headlights: high\n");
   }
   if (rightSignal == 1){
      printf("right signal on\n");
   }
   if (leftSignal == 1){
      printf("left turn signal\n");
   }
   if (hazardLights == 1){
      printf("hazard lights on\n");
   }
   if (brakeLights == 1){
      printf("Brake lights on\n");
   }
   if ((headlightStatus == 1) && (headlightsHigh == 1)){
      return false;
   }
   if ((headlightStatus ==1) && (headlightsLow ==1)){
      return false;
   }
   if (headlightStatus == 0){
      if ((headlightsLow == 0) && (headlightsHigh == 0)){
         return false;
      }
      if ((headlightsHigh == 1) && (headlightsLow == 1)){
         return false;
      }
   }
   if (hazardLights == 1){
      if ((rightSignal != 1) || (leftSignal != 1)){
         return false; 
      }
      if (headlightStatus == 1){
         return false;
      }
      if (headlightsHigh == 0){
         return false;
      }
      if (headlightsLow == 1){
         return false;
      }
   }
   if ((rightSignal == 1) && (leftSignal == 1)){
      return false;
   }







   
}

int main ()
{
   uint8_t array[3];
   trainingTask(array); 
   checkMotors(array);
   checkLights(array);

}
