#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"
//Is this just a truth table of valid and invalid combinations?
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
    // TEST_ASSERT_EQUAL_UINT8(0b00000111, trainingTask(inputArray));
    TEST_ASSERT_EQUAL_UINT8(0b00000001, outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(0b00000010, outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(0b00000100, outputArray[2]);

}

void test_EverythingInvalid()
{
    uint8_t inputArray[3];
    inputArray[0] = 0b10000000;
    inputArray[1] = 0b00000000;
    inputArray[2] = 0b00000011;
    trainingTask(inputArray);
    TEST_ASSERT_EQUAL_UINT8(0b00000001, outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(0b00000010, outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(0b00000100, outputArray[2]);
}

void test_OnlyLightsInvalid()
{
    uint8_t inputArray[3];
    inputArray[0] = 0b10000000;
    inputArray[1] = 0b10000000;
    inputArray[2] = 0b00000011;
    trainingTask(inputArray);    
    TEST_ASSERT_EQUAL_UINT8(0b00000001, outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(0b00000010, outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(0b00000100, outputArray[2]);
}

void test_OnlyMotorsInvalid()
{
    uint8_t inputArray[3];
    inputArray[0] = 0b10000000;
    inputArray[1] = 0b00000000;
    inputArray[2] = 0b00000000;
    trainingTask(inputArray);
    TEST_ASSERT_EQUAL_UINT8(0b00000001, outputArray[0]);
    TEST_ASSERT_EQUAL_UINT8(0b00000010, outputArray[1]);
    TEST_ASSERT_EQUAL_UINT8(0b00000100, outputArray[2]);
}
