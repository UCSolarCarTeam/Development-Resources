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
    uint8_t data[3] = {0b1001001,0b1001001, 0b011000};
}

void test_EverythingInvalid()
{
    uint8_t data[3] = {0b11011011, 0b10010000, 0b11111000};

}

void test_OnlyLightsInvalid()
{
    // Case 1: Headlights are in two states
    uint8_t data1[3] = {0b10010111,0b10010111,0b11000000};

    // Case 2: Hazards off, but both signals are on
    uint8_t data2[3] = {0b10010111,0b10010111,0b10011000};

    // Case 3: Hazards on, but signals not flashing
    uint8_t data3[3] = {0b10010111,0b10010111,0b10010100};

}

void test_OnlyMotorsInvalid()
{
    // Case 1: Motors not in sync
    uint8_t data1[3] = {0b11100111, 0b01001001, 0b01000000};

    // Case 2: Motors in sync, but turned off with non-zero velocity
    uint8_t data2[3] = {0b11000000, 0b11000000, 0b01000000};
}
