#include <iostream>
#include "Person.h"

using namespace std;

Person::Person(const std::string& name, int age)
{
    age_ = new int(2);
    *age_ = age;
    this->name_ = name;
}

int Person::getAge() const
{
    return *age_;
}

const string& Person::getName() const
{
    return name_;
}

void Person::setName(const string& newName)
{
    name_ = newName;
}

void Person::setAge(int newAge)
{
    age_ = new int(2);
    *age_ = newAge;
}

void Person::printInfo() const
{
    cout << "Name: " << getName() << endl;
    cout << "Age: " << getAge() << endl;
}

int Person::combinedAge(Person** personArray, int size)
{
    int total_ = 0;
    for(int i = 0; i < size; i++)
    {
        Person* tempPerson = personArray[i];
        total_ += tempPerson->getAge();
    }

    return total_;
}
void Person::birthday(Person& x)
{
    int oldAge = x.getAge();
    oldAge++;
    x.setAge(oldAge);
}
Person::Person()
{

}

Person::~Person()
{
    delete age_;
}
