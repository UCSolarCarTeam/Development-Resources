#include <iostream>
#include "Person.h"

//Constructors
Person::Person()
{

};

Person::~Person(){

};

Person::Person(const std::string& name, int age) {
    name_ = name;
    age_ = new int(age);
}

// Setters and Getters 
void Person::setAge(int newAge) {
    age_ = new int(newAge);
}

int Person::getAge() const {
    return *age_;
}

void Person::setName(const std::string& newName) {
    name_ = newName;
}

const std::string& Person::getName() const {
    return name_;
}

//Functions
void Person::printInfo() const {
    std::cout << "Name: " << name_ << " Age: " << age_ << std::endl;
}

int Person::combinedAge(Person** personArray, int size) {
    int TotalAge =0;
    for (int i =0; i < size; i++){
        TotalAge += personArray[i] -> getAge();
    }
    return TotalAge;
}

void Person::birthday(Person& x) {
     *x.age_ += 1;
}







