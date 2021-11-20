#include "Person.h"
Person::Person()
{
    name_="";
    age_= nullptr;
}
Person::Person(const std::string& name, int age)
{
    name_= name;
    age_ = new int[1];
    *age_ = age;   
}
Person::~Person()
{
    free(age_);
}
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
  if (age_ == nullptr)
  {
      age_ = new int[1];
  }

  *age_ = newAge;
}
void Person::printInfo() const 
{
  printf("%s", name_);
  printf("%d", age_);
}
int Person::combinedAge(Person** personArray, int size)
{
  int sum = 0;
  for (int i = 0; i < size; i ++)
  {
    sum += (*personArray[i]).getAge(); 
  }
  return sum;
}
void Person::birthday(Person& x)
{
  x.setAge(x.getAge()+1);
}
