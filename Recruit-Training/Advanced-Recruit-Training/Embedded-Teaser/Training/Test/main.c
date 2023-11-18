#include <stdio.h>
#include "unity.h"
#include "TrainingTest.h"

extern uint8_t outputArray[3];
extern uint8_t validData;

void setUp(void)
{
}

void tearDown(void)
{
}

int main(void)
{
    UNITY_BEGIN();

    runTrainingTests();

    return UNITY_END();
}
