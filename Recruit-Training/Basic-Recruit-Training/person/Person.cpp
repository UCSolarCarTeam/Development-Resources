#include <iostream> 
#include "Person.h"
#include <string>

std::string n;
int a;

Person::Person() 
{
	name_ = "";
	age_ = new int(0);
}

Person::~Person() 
{
	free(age_);
}

Person::Person(const std::string& name, int age) 
{
	name_ = name;
	age_ = new int(age);
} 

// getters and setters
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
	*age_ = newAge;
}

// Print out the name and age of the person
void Person::printInfo() const 
{
	std::cout << "Name: " << name_ << ", Age: " << *age_ << std::endl;
}

// Print the combined age of everyone pointed to by personArray
int Person::combinedAge(Person** personArray, int size) 
{
	int ageTotal = 0;
	for (int i = 0; i < size; i++) {
		ageTotal = ageTotal + personArray[i]->getAge();
	}

	return ageTotal;
}

// Increases the Person's Age by 1
void Person::birthday(Person& x)
{
	x.setAge(x.getAge() + 1);
}