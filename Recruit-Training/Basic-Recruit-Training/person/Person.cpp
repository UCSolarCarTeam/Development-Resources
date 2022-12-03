#include "Person.h"
#include "iostream"

Person::Person() {}

Person::~Person() {
    delete age_;
}

Person::Person(const std::string& name, int age) {
    this->name_ = name;
    this->age_ = new int(age);
}

int Person::getAge()const{
    return *age_;
}

const std::string& Person::getName()const{
    return name_;
}

void Person::setName(const std::string& newName){
    name_ = newName;
}

void Person::setAge(int newAge){
    int age = newAge;
    age_ = new int(age);
}

void Person::printInfo() const{
    std::cout << "\nName: " << Person::name_ <<std::endl;
    std::cout << "Age: " << *Person::age_ <<std::endl;
}

int Person::combinedAge(Person** personArray, int size){
     int combined_age = 0;
     for(int i = 0; i < size; i++){
        Person* personPointer = personArray[i];
        combined_age += personPointer->getAge();
     }
     return combined_age;
}

void Person::birthday(Person& x){
    (*x.age_) ++;
}