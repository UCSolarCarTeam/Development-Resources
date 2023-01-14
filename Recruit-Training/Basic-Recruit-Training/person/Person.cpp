#include <iostream>
#include <sstream>
#include <string>


#include "Person.h"


Person::Person(){
  age_ = new int (0);
}

Person::~Person(){
    delete age_;
}

Person::Person(const std::string& name, int age){
    name_=name;
    age_ = new int (age);
    *age_ = age;
}

int Person::getAge() const{
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
    *age_ = newAge;
}

void Person::printInfo() const
{
    std::cout<<name_<< " " << *age_ <<std::endl;
}


int Person::combinedAge(Person** personArray, int size)
{
    int totalAge = 0;
    for(int i = 0; i < size; i ++) {
        totalAge += *(personArray[i]->age_);
    }
    return totalAge;
}

void Person::birthday(Person& x)
{
    *(x.age_) =   *(x.age_) + 1 ;
}
