#include "Person.h"

Person::Person(const std::string &name, int age) : name_(name), age_(new int(age))
{};

Person::Person()
{};

Person::~Person()
{
    delete age_;
}

int Person::getAge() const
{
    return *age_;
}

const std::string& Person::getName() const
{
    return name_;
}

void Person::setName(const std::string& newName)
{
    name_ = newName;
}

void Person::setAge(int newAge)
{
    delete age_;
    age_ = new int(newAge);
}

void Person::printInfo() const
{
    std::cout << "Name:" << name_ << std::endl;
    std::cout << "Age: " << *age_ << std::endl;
}

int Person::combinedAge(Person** personArray, int size)
{
    if(size < 1)
        return 0;
    int combined_age = personArray[0]->getAge();
    for(int i = 1; i < size; i++)
        combined_age += personArray[i]->getAge();
    return combined_age;
}

void Person::birthday(Person& x)
{
    x.setAge(x.getAge()+1);
}
