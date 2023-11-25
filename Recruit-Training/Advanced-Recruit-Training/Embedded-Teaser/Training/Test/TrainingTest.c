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
    // Test case: Everything is valid
    uint8_t data[3] = {0x8F, 0x8F, 0x3F};  // Motor 1, Motor 2, Lights are all valid

    // Initialize the output array and validData
    outputArray[0] = 0;
    outputArray[1] = 0;
    outputArray[2] = 0;
    validData = 0;

    // Call the trainingTask function with the input data
    trainingTask(data);

    // Assert that all components are valid
    TEST_ASSERT_EQUAL_HEX8(0x8F, outputArray[0]); // Motor 1
    TEST_ASSERT_EQUAL_HEX8(0x8F, outputArray[1]); // Motor 2
    TEST_ASSERT_EQUAL_HEX8(0x3F, outputArray[2]); // Lights
    TEST_ASSERT_EQUAL_HEX8(0x07, validData);      // All components are valid
}

void test_EverythingInvalid()
{
    // Test case: Everything is invalid
    uint8_t data[3] = {0x00, 0x00, 0xE0};  // Motor 1, Motor 2, Lights are all invalid

    // Initialize the output array and validData
    outputArray[0] = 0;
    outputArray[1] = 0;
    outputArray[2] = 0;
    validData = 0;

    // Call the trainingTask function with the input data
    trainingTask(data);

    // Assert that all components are invalid
    TEST_ASSERT_EQUAL_HEX8(0x00, outputArray[0]); // Motor 1
    TEST_ASSERT_EQUAL_HEX8(0x00, outputArray[1]); // Motor 2
    TEST_ASSERT_EQUAL_HEX8(0x00, outputArray[2]); // Lights
    TEST_ASSERT_EQUAL_HEX8(0x00, validData);      // All components are invalid
}

void test_OnlyLightsInvalid()
{
    // Test case: Only Lights is invalid
    uint8_t data[3] = {0x8F, 0x8F, 0xE0};  // Motor 1, Motor 2 are valid, Lights is invalid

    // Initialize the output array and validData
    outputArray[0] = 0;
    outputArray[1] = 0;
    outputArray[2] = 0;
    validData = 0;

    // Call the trainingTask function with the input data
    trainingTask(data);

    // Assert that only Lights is invalid
    TEST_ASSERT_EQUAL_HEX8(0x8F, outputArray[0]); // Motor 1
    TEST_ASSERT_EQUAL_HEX8(0x8F, outputArray[1]); // Motor 2
    TEST_ASSERT_EQUAL_HEX8(0x00, outputArray[2]); // Lights
    TEST_ASSERT_EQUAL_HEX8(0x02, validData);      // Lights is invalid

}

void test_OnlyMotorsInvalid()
{
    // Test case: Only Motors are invalid
    uint8_t data[3] = {0x00, 0x00, 0x3F};  // Motor 1, Motor 2 are invalid, Lights is valid

    // Initialize the output array and validData
    outputArray[0] = 0;
    outputArray[1] = 0;
    outputArray[2] = 0;
    validData = 0;

    // Call the trainingTask function with the input data
    trainingTask(data);

    // Assert that only Motors are invalid
    TEST_ASSERT_EQUAL_HEX8(0x00, outputArray[0]); // Motor 1
    TEST_ASSERT_EQUAL_HEX8(0x00, outputArray[1]); // Motor 2
    TEST_ASSERT_EQUAL_HEX8(0x3F, outputArray[2]); // Lights
    TEST_ASSERT_EQUAL_HEX8(0x04, validData);      // Motors are invalid
}
