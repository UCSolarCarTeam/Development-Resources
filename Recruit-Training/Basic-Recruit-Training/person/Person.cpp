#include <Person.h>
#include <iostream>

Person::Person(const std::string& name, int age){
    name_ = name;
    age_ = new int(age);
}

Person::~Person(){
    delete age_;
}

int Person::getAge() const {
    return *age_;
}

const std::string& Person::getName() const {
    return name_;
}

void Person::setName(const std::string& newName){
    name_ : newName;
}

void Person::setAge(int newAge) {
    age_ = newAge;
}

void Person::printInfo() const {
    cout << "Name = " << name_ << ", Age = " << age_ << endl;
}

static int Person::combinedAge(Person** personArray, int size) {
    int sum = 0;

    for (int i = 0; i < size; i++)
    {
        sum += personArray[i];
    }

    return sum;
}

 static void birthday(Person& x) {
    x.setAge = x.getAge + 1;
 }

