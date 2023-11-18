#include <iostream>
// implement all functions within Person.h
// complete definitions of mySwap() and myIncrement

// std::cout << "hello world" <- to output the thing
// return <- same like java

// to compile -> must convert to machine code, if wanna run on mac, must recompile it to get executable (mac is control + r)
#include "Person.h"

int Person::getAge() const
{
    int age = *age_;
    return age;
}

// setters and getters
const std::string &Person::getName() const
{
    return this->name_;
}

// setters and getters
void Person::setName(const std::string &newName)
{
    this->name_ = newName;
}

// setters and getters
void Person::setAge(int newAge)
{
    *age_ = newAge;
}

// Print out the name and age of the person
void Person::printInfo() const
{
}

// Print the combined age of everyone pointed to by personArray
int Person::combinedAge(Person **personArray, int size)
{
}

// Increases the Person's Age by 1
void Person::birthday(Person &x)
{
}
