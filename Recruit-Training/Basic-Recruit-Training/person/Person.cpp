
#include <iostream>
#include <string>
#include "Person.h"

Person::Person() : name_(""), age_(nullptr) {}

Person::~Person() {
    delete this->age_;
}

Person::Person(const std::string& name, int age) {
    this->name_ = name;
    this->age_ = new int(age);
}

int Person::getAge() const {
    return *age_;
}

const std::string& Person::getName() const {
    return name_;
}

void Person::setName(const std::string& newName) {
    this->name_ = newName;
}

void Person::setAge(int newAge) {
    delete this->age_;
    this->age_ = new int(newAge);
}

void Person::printInfo() const {
    std::cout << "Name: " << getName() << ", Age: " << getAge() << std::endl;
}

int Person::combinedAge(Person** personArray, int size) {
    int totalAge = 0;
    for (int i = 0; i < size; i++) {
        totalAge += personArray[i]->getAge();
    }
    return totalAge;
}

void Person::birthday(Person& x) {
    int newAge = x.getAge() + 1;
    x.setAge(newAge);
}

