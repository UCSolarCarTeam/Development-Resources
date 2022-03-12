#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"
#include "../Src/Training.c" 

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
TEST_ASSERT_BITS_Int(0b10101001, 1, checkMotors);
TEST_ASSERT_BITS_Int(0b01010101, 1, checkMotors);
TEST_ASSERT_BITS_Int(0b01110111, 1, checkLights);
}

void test_EverythingInvalid()
{
TEST_ASSERT_BITS_Int(0b10101001, 0, checkMotors);
TEST_ASSERT_BITS_Int(0b01010101, 0, checkMotors);
TEST_ASSERT_BITS_Int(0b01110111, 0, checkLights);
}

void test_OnlyLightsInvalid()
{
TEST_ASSERT_BITS_Int(0b10101001, 1, checkMotors);
TEST_ASSERT_BITS_Int(0b01010101, 1, checkMotors);
TEST_ASSERT_BITS_Int(0b01110111, 0, checkLights);
}

void test_OnlyMotorsInvalid()
{
TEST_ASSERT_BITS_Int(0b10101001, 0, checkMotors);
TEST_ASSERT_BITS_Int(0b01010101, 0, checkMotors);
TEST_ASSERT_BITS_Int(0b01110111, 1, checkLights);
}
