// This line is a preprocessor directive that this header is only defined once.
// This needs to be included in each header file.
#pragma once

#include <string>
class Person
{  int age;
    std::string name;
public:
// A Rule of Thumb when designing classes is to have a default constructor, regular constructor, and a destructor.
   //Constructor
    Person();
    //Regular Constructor
    Person(const std::string& name, int age);
    //Destructor, Person Function
    ~Person();

    int getAge() const;
    const std::string& getName() const;

    void printInfo();//Print out the name and age of the person.ds

    void setName(const std::string& newName);
    void setAge(int newAge);

    static int combinedAge(Person** x, int size); // Print the combined Age of everyone pointed to by x
    static void birthday(Person& x); // Increases the Person's Age by 1.
private:
    std::string name_;

    int* age_; // age_ should be a dynamically allocated.

};


