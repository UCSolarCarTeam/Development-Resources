
#include "Person.h"
#pragma once
#include <string>
#include <iostream>
#include <sstream>

Person::Person(){
    name_ = "";
    age_ = new int;
}

Person::~Person(){
    delete age_;
    age_ = NULL;
}

Person::Person(const std::string& name, int age): name_(name) {
    *age_ = age;
}

// setters and getters
int Person::getAge() const {
    return *age_;
}
const std::string& Person::getName() const{
    return name_;
}
void Person::setName(const std::string& newName){
    name_ = newName;
}
void Person::setAge(int newAge){
    *age_ = newAge;
}

// Print out the name and age of the person
void Person::printInfo() const{
    std::cout<<"Name of Person: "<<name_<<std::endl;
    std::cout<<"Age of Person: "<<*age_<<std::endl;
}
// Print the combined age of everyone pointed to by personArray
int Person::combinedAge(Person** personArray, int size){
    for(int i=0; i<size;i++){
        int temp = *((*personArray[i]).age_);

    }
    
}
// Increases the Person's Age by 1
void Person::birthday(Person& x){
    (*x.age_)++;
}