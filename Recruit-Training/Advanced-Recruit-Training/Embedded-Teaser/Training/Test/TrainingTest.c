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
    uint8_t inputArray[3];
    inputArray[0] = 0b10000000;
    inputArray[1] = 0b10000000;
    inputArray[2] = 0b00000000;
    trainingTask(inputArray);
    TEST_ASSERT_EQUAL_UINT8(0b00000111, validData);
    
}

void test_EverythingInvalid()
{
    uint8_t inputArray[3];
    //Motors out of sync. headlights both off and low.
    inputArray[0] = 0b10000000;
    inputArray[1] = 0b00000000;
    inputArray[2] = 0b00000011;
    trainingTask(inputArray);
    TEST_ASSERT_EQUAL_UINT8(0b00000000, validData);
}

void test_OnlyLightsInvalid()
{
    //Headlights both off and low.
    uint8_t inputArray[3];
    inputArray[0] = 0b10000000;
    inputArray[1] = 0b10000000;
    inputArray[2] = 0b00000011;
    trainingTask(inputArray);    
    TEST_ASSERT_EQUAL_UINT8(0b00000011, validData);
}

void test_OnlyMotorsInvalid()
{
    //Motors out of sync.
    uint8_t inputArray[3];
    inputArray[0] = 0b10000000;
    inputArray[1] = 0b00000000;
    inputArray[2] = 0b00000000;
    trainingTask(inputArray);
    TEST_ASSERT_EQUAL_UINT8(0b00000100, validData);
}
