#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"

void runTrainingTests()
{
    // Run all the tests here using RUN_TEST()
    RUN_TEST(test_EverythingValid);
    RUN_TEST(test_EverythingInvalid);
    RUN_TEST(test_OnlyLightsInvalid);
    RUN_TEST(test_OnlyMotorsInvalid);

}

void test_EverythingValid()
{
    uint8_t input[3];
    // Set input data
    // for the first motor
    // u have to add a 0b before u 8 digit 01 number
    input[0] = 0b10111111;
    //for the second motor
    input[1] = 0b10111111;
    //for the lights
    input[2] = 0b00000110;

    trainingTask(input);
    // Check outputArray and validData
    //run the test cases you made, dillion added the variables in the brackets to make ur life easier
    char buf[1024];
    snprintf(buf, 1024, "Expected %d, %d, %d, %d but got %d, %d, %d, 7", input[0], input[1], input [2], validData, outputArray[0], outputArray[1], outputArray[2]);

    UnityAssertEqualNumber(input[0], outputArray[0], "oh no, it doens't work 1",32, NULL);
    UnityAssertEqualNumber(input[1], outputArray[1], "this don't work 2",32, NULL);
    UnityAssertEqualNumber(input[2], outputArray[2], buf,32, NULL);
    UnityAssertBits(0b00000111, 0b00000111, validData, "This is incorrect but gg", 34);
}

void test_EverythingInvalid()
{
    //defining our list of 3 different things
    uint8_t input[3];
    //for the first motor
    input[0] = 0b11111111;
    //for the second motor
    input[1] = 0b01111110;
    //for the third motor 
    input[2] = 0b00011111;

    //calling our trainingTask function from the Training.c
    trainingTask(input);


    char buf[1024];
    snprintf(buf, 1024, "Expected %d, %d, %d, %d but got %d, %d, %d, 7", input[0], input[1], input [2], validData, outputArray[0], outputArray[1], outputArray[2]);



    UnityAssertEqualNumber(0, outputArray[0], "this dont work 11",32, NULL);
    UnityAssertEqualNumber(0, outputArray[1], "this don't work 22",32, NULL);
    UnityAssertEqualNumber(0, outputArray[2], buf,32, NULL);
    UnityAssertBits(0b00000111, 0b00000000, validData, "This is incorrect but gg2", 60);




}

void test_OnlyLightsInvalid()
{
    //defining our 3 variable list
    uint8_t input[3];

    //for the first motor
    input[0] = 0b10111111;
    //for our second motor
    input[1] = 0b10111111;
    //for the lights
    input[2] = 0b01000001;

    //calling our trainingTask function from the Training.c
    trainingTask(input);


    char buf[1024];
    snprintf(buf, 1024, "Expected %d, %d, %d, %d but got %d, %d, %d, 7", input[0], input[1], input [2], validData, outputArray[0], outputArray[1], outputArray[2]);



    UnityAssertEqualNumber(input[0], outputArray[0], "this doesn't work 111",32, NULL);
    UnityAssertEqualNumber(input[1], outputArray[1], "this don't work 222",32, NULL);
    UnityAssertEqualNumber(0, outputArray[2], "this don't be working 333",32, NULL);
    UnityAssertBits(0b00000111, 0b00000011, validData, "This is incorrect but gg3", 91);


}

void test_OnlyMotorsInvalid()
{
    //defining our list of storage test
    uint8_t input[3];

    //first motor
    input[0] = 0b10000000;
    //second motor
    input[1] = 0b00000000;
    //lights
    input[2] = 0b00100000;

    //calling our training task from Training.c
    trainingTask(input);


    char buf[1024];
    snprintf(buf, 1024, "Expected %d, %d, %d, %d but got %d, %d, %d, 7", input[0], input[1], input [2], validData, outputArray[0], outputArray[1], outputArray[2]);


    UnityAssertEqualNumber(0, outputArray[0], "This doesn't work 1111", 32, NULL);
    UnityAssertEqualNumber(0, outputArray[1], "this doesn't work 2222", 32, NULL);
    UnityAssertEqualNumber(input[2], outputArray[2], buf, 32, NULL);
    UnityAssertBits(0b00000111, 0b00000100, validData, "this is incorrect but gg4", 119);

}
