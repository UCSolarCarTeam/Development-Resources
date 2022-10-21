//Solved by Arion Hamel
#include "Person.h"
#include <iostream>
#include <string>

// -- Constructors --
Person::Person() {
    name_ = "";
    age_ = new int(0);
}

Person::Person(const std::string& name, int age) {
    name_ = name;
    age_ = new int(age);
}

// -- Descontructor --
Person::~Person() {
   name_ = "";
    *age_ = 0;
}

// -- Getters --
int Person::getAge() const {
    return (*age_);
}

const std::string& Person::getName() const {
    return this->name_;
}

// -- Settors --
void Person::setName(const std::string& newName) {
    this->name_ = newName;
}

void Person::setAge(const int newAge) {
    *age_ = newAge;
    printf("\nChecking Age: %d", *age_);
}

// -- Member Functions --
void Person::printInfo() const {
    printf("\nName: %s.\nAge: %d.\n", name_.c_str(), *age_);
}

int Person::combinedAge(Person** personArray, int size) {
    int combinedAge = 0;
    for(int i = 0; i< size; i++) {
        combinedAge += (*(personArray[i])).getAge();
    }
    return combinedAge;
}

void Person::birthday(Person& x) {
    int age = x.getAge();
    x.setAge(++age);
}
