#include "unity.h"
#include "TrainingTest.h"
#include "Training.h"

void runTrainingTests()
{   
    RUN_TEST(test_EverythingValid);
    RUN_TEST(test_EverythingInvalid);
    RUN_TEST(test_OnlyLightsInvalid);
    RUN_TEST(test_OnlyMotorsInvalid);
}

void test_EverythingValid()
{
    //setup inputs
    uint8_t TestArray[3] = {0b11011111, 0b11011111, 0b00100100};
    //call functions
    trainingTask(TestArray);
    //check outputs 
    char buffer[1024];
    int b = snprintf(buffer, 1024, "Expected: %d, %d, %d, %d/nActual: %d, %d, %d, 7", TestArray[0], TestArray[1], TestArray[2], validData, outputArray[0], outputArray[1], outputArray[2]);
    UnityAssertEqualNumber(TestArray, outputArray, buffer, 26, NULL); 
    UnityAssertBits(0b00000111, 0b00000111, validData, buffer, 27); 
}

void test_EverythingInvalid()
{
    //setup inputs
    uint8_t TestArray[3] = {0b10011111, 0b10010111, 0b00000000};
    //call functions
    trainingTask(TestArray);
    //check outputs 
    char buffer[1024];
    int b = snprintf(buffer, 1024, "Expected: %d, %d, %d, %d/nActual: %d, %d, %d, 0", TestArray[0], TestArray[1], TestArray[2], validData, outputArray[0], outputArray[1], outputArray[2]);
    UnityAssertEqualNumber(TestArray, outputArray, "Error: Invalid Input", 41, NULL); 
    UnityAssertBits(0b00000111, 0b00000000, validData, "Incorrect Input", 42); 
}

void test_OnlyLightsInvalid()
{
    //setup inputs
    uint8_t TestArray[3] = {0b11011111, 0b11011111, 0b00000000};
    //call functions
    trainingTask(TestArray);
    //check outputs 
    char buffer[1024];
    int b = snprintf(buffer, 1024, "Expected: %d, %d, %d, %d/nActual: %d, %d, %d, 3", TestArray[0], TestArray[1], TestArray[2], validData, outputArray[0], outputArray[1], outputArray[2]);
    UnityAssertEqualNumber(TestArray[0], outputArray[0], "Error: Invalid Input", 32, NULL); 
    UnityAssertEqualNumber(TestArray[1], outputArray[1], "Error: Invalid Input", 32, NULL);
    UnityAssertEqualNumber(TestArray[1], outputArray[1], "Error: Invalid Input", 32, NULL);
    UnityAssertBits(0b00000111, 0b00000011, validData, "Incorrect Input", 120); 
}

void test_OnlyMotorsInvalid()
{
    //setup inputs
    uint8_t TestArray[3] = {0b10011111, 0b10010111, 0b00100100};
    //call functions
    trainingTask(TestArray);
    //check outputs 
    char buffer[1024];
    int b = snprintf(buffer, 1024, "Expected: %d, %d, %d, %d/nActual: %d, %d, %d, 4", TestArray[0], TestArray[1], TestArray[2], validData, outputArray[0], outputArray[1], outputArray[2]);
    UnityAssertEqualNumber(TestArray[0], outputArray[0], "Error: Invalid Input", 32, NULL); 
    UnityAssertEqualNumber(TestArray[1], outputArray[1], "Error: Invalid Input", 32, NULL);
    UnityAssertEqualNumber(TestArray[1], outputArray[1], "Error: Invalid Input", 32, NULL);
    UnityAssertBits(0b00000111, 0b00000100, validData, "Incorrect Input", 120); 
}
