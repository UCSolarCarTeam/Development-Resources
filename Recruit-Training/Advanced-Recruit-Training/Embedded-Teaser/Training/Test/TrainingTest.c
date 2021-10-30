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
    uint8_t dataArray[] =
    {
    0b11111110, // Reversing motor 1
    0b11111110, // Reversing motor 2
    0b0010010   // Left signal and low headlights
    };
    trainingTask(dataArray);
    TEST_ASSERT_EQUAL_INT8_ARRAY(dataArray,outputArray,3);

    uint8_t dataArray2[] =
    {
    0b10111111, // Driving motor 1
    0b10111111, // Driving motor 2
    0b000001   //  Headlights off
    };
    trainingTask(dataArray2);
    TEST_ASSERT_EQUAL_INT8_ARRAY(dataArray2,outputArray,3);
    TEST_ASSERT_BITS(0b111,0b111,validData);
}

void test_EverythingInvalid()
{
    uint8_t expected[] = {0,0,0};
    
    uint8_t dataArray[] =
    {
    0b11111111, // Driving motor 1 
    0b11111011, // Driving motor 2 with different speed
    0b0010011   // Multiple headlight settings
    };
    trainingTask(dataArray);
    TEST_ASSERT_EQUAL_INT8_ARRAY(expected,outputArray,3);

    uint8_t dataArray2[] =
    {
    0b01111110, // Motor 1 off 
    0b11111110, // Driving motor 2
    0b0010000   // No headlight settings
    };
    trainingTask(dataArray2);
    TEST_ASSERT_EQUAL_INT8_ARRAY(expected,outputArray,3);
}

void test_OnlyLightsInvalid()
{
    uint8_t dataArray[] =
    {
    0b11111110, // Reversing motor 1 with +velocity
    0b11111110, // Reversing motor 2 with +velocity
    0b0011001 // Both right and left signal on
    };
    uint8_t expected[] = {dataArray[0],dataArray[1],0};
    trainingTask(dataArray);
    TEST_ASSERT_EQUAL_INT8_ARRAY(expected,outputArray,3);

    uint8_t dataArray2[] =
    {
    0b00000001, // Motors off and forward
    0b00000001, // Motors off and forward
    0b0000001 // Missing brake lights
    };
    uint8_t expected2[] = {dataArray2[0],dataArray2[1],0};
    trainingTask(dataArray2);
    TEST_ASSERT_EQUAL_INT8_ARRAY(expected2,outputArray,3);

    uint8_t dataArray3[]=
    {
    0b00000000, // Motors off and backwards
    0b00000000, // Motors off and backwards
    0b0000001 // Missing brake lights
    };
    uint8_t expected3[] = {dataArray3[0],dataArray3[1],0};
    trainingTask(dataArray3);
    TEST_ASSERT_EQUAL_INT8_ARRAY(expected3,outputArray,3);
}

void test_OnlyMotorsInvalid()
{
    uint8_t dataArray[] =
    {
    0b01110001, // Invalid off motor (nonzero)
    0b00100111, // Invalid off motor (nonzero)
    0b1100010 // Brakes, hazards, lowbeam
    };
    uint8_t expected[] = {0,0,dataArray[2]};
    trainingTask(dataArray);
    TEST_ASSERT_EQUAL_INT8_ARRAY(expected,outputArray,3);

    uint8_t dataArray2[] =
    {
    0b01000000, // Forward with -velocity
    0b01000000, // Forward with -velocity
    0b1110100 // Brakes, hazards, left signal, highbeam
    };
    uint8_t expected2[] = {0,0,dataArray2[2]};
    trainingTask(dataArray2);
    TEST_ASSERT_EQUAL_INT8_ARRAY(expected2,outputArray,3);
}

