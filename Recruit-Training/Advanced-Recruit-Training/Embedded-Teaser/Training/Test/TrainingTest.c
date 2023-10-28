#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"

void runTrainingTests()
{
    // Run all the tests here using RUN_TEST()
    RUN_TEST(test_EverythingValid);
}

void test_EverythingValid()
{
    uint8_t data[3] = {0b10000111,0b10000111,0b11010010 };
    trainingTask(&data);
}

void test_EverythingInvalid()
{
    uint8_t data[3] = {0b10000110,0b10000111,0b11011010 };
    trainingTask(&data);
}

void test_OnlyLightsInvalid()
{
    uint8_t data[3] = {0b10000111,0b10000111,0b11011010 };
    trainingTask(&data);
}

void test_OnlyMotorsInvalid()
{
    uint8_t data[3] = {0b10000110,0b10000111,0b11010010 };
    trainingTask(&data);
}
