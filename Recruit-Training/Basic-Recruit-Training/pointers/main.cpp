/*
First read through main() and make predictions on what the outpout of each variable will be where indicated.
After doing that add a function prototype at the top for a function called mySwap() that will return type void.
You will pass two variables in as argument, one will be the pointer p. The other one will be an interger pointer you make that points to the variable y.
In the function mySwap you will swap the values of the two arguments so the values are changed inside main()
*/

#include <iostream>

using namespace std;

void foo(int *a, int b);
void bar(int *a, int b);
//Create the mySwap function prototype
void mySwap(int *p, int *q);

int main()
{
    int x = 3;
    int y = 4;
    int *p = &x; 
    //Create a new pointer that points to the variable y
    int *q = &y;

    //TODO in the line below predict what what is going to be output
    cout << "Predicted value of p: " << "The memory adress of x" << endl;
    cout << "Actual value of p: " << p << endl;
    cout << "Predicted value &x: " << "The memory adress of x"  << endl;
    cout << "Actual value &x: " << &x << endl;
    cout << "Predicted value of *p: " << "3" << endl;
    cout << "Actual value of *p: " << *p << endl;
    
    foo(p, x);
    //x = 78
    

    cout << "Predicted value of *p: " << "42"  << endl;
    cout << "Actual value of *p: " << *p << endl;
    cout << "Predicted value of x: " << "42" << endl;
    cout << "Actual value of x: " << x << endl;
    
    foo(p, y);
    //x = 42
    

    cout << "Predicted value of *p: " << "42"  << endl;
    cout << "Actual value of *p: " << *p << endl;
    cout << "Predicted value of y: " << "4" << endl;
    cout << "Actual value of y: " << y << endl;

    //Use my swap on pointers p and q
    mySwap(p, q);
    //Print out the values that the pointers p and q point to. 
    // *p/x should be 4 and *q/y should be 42
    cout << *p << "  " <<  *q;

    return 0;

}

//Create the function mySwap to swap the values of the pointer arguments
void mySwap(int *p, int *q)
{

    int temp = *p;
    *p = *q;
    *q = temp;

}

 void foo(int *a, int b)
{
   *a = 42;
   b = 78;
}

void var(int *a, int b)
{
    *a = 365;
    b = 912;
}
