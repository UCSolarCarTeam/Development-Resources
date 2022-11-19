#include <iostream>
#include <sstream>
#include <string>

#include "Person.h"
using namespace std;

Person::Person()
{
	
}

Person::~Person()
{
	
}

Person::Person(const std::string& name, int age)
{
	age_ = new int;
	*age_ = age;
	name_ = name;
}

int Person::getAge() const
{
	return *age_;
}

const string& Person::getName() const
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

int Person::combinedAge(Person** personArray, int size)
{
	int i;
	int sum_age;
	sum_age = 0;
	
	for(i = 0; i < size; i++)
	{
		sum_age = sum_age + personArray[i][0].getAge();
	}
	
	return sum_age;
}

void Person::birthday(Person& x)
{
	int* ptr;
	ptr = x.age_;
	(*ptr)++;
}

void Person::printInfo() const
{
	cout <<"My name is "<< name_<<" and I'm "<<*age_<< endl;
}
	