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
    input[0] = 0b10111111;  // motor1
    input[1] = 0b10111111;  // motor2
    input[2] = 0b00010100;  // lights, left signal on and headlight high

    trainingTask(input);    // call to verify inputs
    

    // Used to print results of trainingTask
    printf("               Expected        Output");
    printf("Motor1:        %u      %u", input[0], outputArray[0]);
    printf("Motor2:        %u      %u", input[1], outputArray[1]);
    printf("Lights:        %u      %u", input[2], outputArray[2]);
    printf("validData      %u      %u", 0b00000111, validData);


    TEST_ASSERT_EQUAL_UINT8(input[0], outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(input[1], outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(input[2], outputArray[2]);
    TEST_ASSERT_EQUAL_UINT8(0b00000111, validData);
}

void test_EverythingInvalid()
{
    uint8_t input[3];
    input[0] = 0b11111111;  // motor1
    input[1] = 0b01111111;  // motor2
    input[2] = 0b01111111;  // lights, left signal on and headlight high

    trainingTask(input);    // call to verify inputs


    // Used to print results of trainingTask
    printf("               Expected        Output");
    printf("Motor1:        %u      %u", 0, outputArray[0]);
    printf("Motor2:        %u      %u", 0, outputArray[1]);
    printf("Lights:        %u      %u", 0, outputArray[2]);
    printf("validData      %u      %u", 0, validData);


    TEST_ASSERT_EQUAL_UINT8(0, outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(0, outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(0, outputArray[2]);
    TEST_ASSERT_EQUAL_UINT8(0b00000000, validData);
}   

void test_OnlyLightsInvalid()
{
    uint8_t input[3];
    input[0] = 0b10111111;  // motor1
    input[1] = 0b10111111;  // motor2
    input[2] = 0b01111111;  // lights, left signal on and headlight high

    trainingTask(input);    // call to verify inputs
    

    // Used to print results of trainingTask
    printf("               Expected        Output");
    printf("Motor1:           %u             %u", input[0], outputArray[0]);
    printf("Motor2:           %u             %u", input[1], outputArray[1]);
    printf("Lights:           %u             %u", 0, outputArray[2]);
    printf("validData         %u             %u", 0b00000110, validData);


    TEST_ASSERT_EQUAL_UINT8(input[0], outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(input[1], outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(0, outputArray[2]);
    TEST_ASSERT_EQUAL_UINT8(0b00000110, validData);
}

void test_OnlyMotorsInvalid()
{
    uint8_t input[3];
    input[0] = 0b10111111;  // motor1
    input[1] = 0b01000000;  // motor2
    input[2] = 0b00010100;  // lights, left signal on and headlight high

    trainingTask(input);    // call to verify inputs from Training.c file


    // Used to print results of trainingTask
    printf("               Expected        Output");
    printf("Motor1:           %u             %u", 0, outputArray[0]);
    printf("Motor2:           %u             %u", 0, outputArray[1]);
    printf("Lights:           %u             %u", input[2], outputArray[2]);
    printf("validData         %u             %u", 0, validData);


    TEST_ASSERT_EQUAL_UINT8(0, outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(0, outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(input[2], outputArray[2]);
    TEST_ASSERT_EQUAL_UINT8(0b00000001, validData);
}   
