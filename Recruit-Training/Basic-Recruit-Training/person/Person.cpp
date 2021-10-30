#include <iostream>

#include "Person.h"

Person::Person() : name_("NONE")
{
    age_ = new int;
    *age_ = -1;
}

Person::~Person()
{
    delete age_;
}

Person::Person(const std::string &name, int age)
{
    name_ = name;
    age_ = new int;
    *age_ = age;
}

int Person::getAge() const
{
    return *age_;
}

const std::string &Person::getName() const
{
    return name_;
}

void Person::setName(const std::string &newName)
{
    name_ = newName;
}

void Person::setAge(int newAge)
{
    *age_ = newAge;
}

void Person::printInfo() const
{
    std::cout << "Name is: " << name_ << std::endl;
    std::cout << "Age is: " << *age_ << std::endl;
}

int Person::combinedAge(Person **personArray, int size)
{
    int combined_age = 0;
    for (int i = 0; i < size; i++)
    {
        combined_age += *(personArray[i]->age_);
    }
    return combined_age;
}

void Person::birthday(Person &x)
{
    *(x.age_) += 1;
}
