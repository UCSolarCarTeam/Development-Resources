#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"

void runTrainingTests()
{
    // Run all the tests here using RUN_TEST()
    RUN_TEST();
}

void test_EverythingValid()
{
    uint8_t data[3] = {0b10000011, 0b1000000011, 0b11010010};
    trainingTaksk(&data);
}

void test_EverythingInvalid()
{
    uint8_t data[3] = {0b10000010, 0b1000000011, 0b11011010};
    trainingTaksk(&data);
}

void test_OnlyLightsInvalid()
{
    uint8_t data[3] = {0b10000011, 0b1000000011, 0b11011010};
    trainingTaksk(&data);
}

void test_OnlyMotorsInvalid()
{
    uint8_t data[3] = {0b10000010, 0b1000000011, 0b11010010};
    trainingTaksk(&data);
}
