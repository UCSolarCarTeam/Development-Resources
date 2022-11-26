#include "Person.h"
#include <string>
#include <iostream>

Person::Person(){
  name_ = "";
  age_ = new int(0);
}

Person::~Person(){
  delete age_;
}

Person::Person(const std::string& name, int age)
{
  name_ = name;
  age_ = new int(age);

}


int Person::getAge() const{
  return *age_;

}

const std::string& Person::getName() const {
  return name_;

}

void Person::setName(const std::string& newName){
  name_ = newName;

}

void Person::setAge(int newAge){
  *age_ = newAge;

}

 void Person::printInfo() const{
  std::cout<<"The name of the person is: "<< name_ << std::endl;
  std::cout<<"The age of the person is: "<< *(age_)<< std::endl;
 }

int Person::combinedAge(Person** personArray, int size){
  int sum = 0;
  for(int i=0; i<size;i++){
    sum += (personArray[i])->getAge();
  }
  return sum;

}

void Person::birthday(Person& x) {
  ++(*x.age_);

}



