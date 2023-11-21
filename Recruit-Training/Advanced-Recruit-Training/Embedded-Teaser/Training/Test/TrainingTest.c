#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"

extern uint8_t outputArray[3];
extern uint8_t validData;

void runTrainingTests()
{
    // RUN_TEST(test_EverythingValid);
    // RUN_TEST(test_EverythingInvalid);
    // RUN_TEST(test_OnlyLightsInvalid);
    RUN_TEST(test_OnlyMotorsInvalid);
}

void test_EverythingValid()
{
    
}

void test_EverythingInvalid()
{

}

void test_OnlyLightsInvalid()
{

}

void test_OnlyMotorsInvalid()
{
    // Case 1: Motors not in sync
    uint8_t data1[3] = {0b11100111, 0b01001001, 0b01000000};
    uint8_t expected[3] = {0,0,1};
    TEST_ASSERT_EACH_EQUAL_UINT8(expected, trainingTask(data1));


    // Case 2: Motors in sync, but turned off with non-zero velocity
    uint8_t data2[3] = {0b11000000, 0b11000000, 0b01000000};
    TEST_ASSERT_EACH_EQUAL_UINT8(expected, trainingTask(data2));
}
