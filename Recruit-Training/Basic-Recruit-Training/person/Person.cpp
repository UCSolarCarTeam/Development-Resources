#include <iostream>
#include <string>
#include "Person.h"
using namespace std;



Person::Person()
{
    age_ = new int();
}

Person::~Person()
{
    delete age_;
}

Person::Person(const std::string& name, int age)
{
    age_ = new int(age);
    name_ = name;
}

void Person::setAge(int newAge)
{
    *age_ = newAge;
}

const std::string& Person::getName() const {
    return name_;
}

void Person::setName(const std::string& newName)
{
    name_ = newName;
}

int Person::getAge() const
{
    return *age_;
}

void Person::printInfo() const
{
    cout << "Name: " << getName();
    cout << "Age: " << getAge();
}

int Person::combinedAge(Person** personArray, int size)
{   
    int combinedAge_ = 0;

    for (int i = 0; i < size; i++)
    {
        Person* tempPerson = personArray[i];
        combinedAge_ += tempPerson->getAge();
    }

    return combinedAge_;
}

void Person::birthday(Person& x)
{
    int oldAge_ = x.getAge();
    oldAge_++;
    x.setAge(oldAge_);
}
