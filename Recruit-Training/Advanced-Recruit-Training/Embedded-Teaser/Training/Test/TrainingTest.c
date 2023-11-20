#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"

extern uint8_t outputArray[3];
extern uint8_t validData;

void runTrainingTests()
{
    RUN_TEST(test_EverythingValid);
    RUN_TEST(test_EverythingInvalid);
    RUN_TEST(test_OnlyLightsInvalid);
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

}
