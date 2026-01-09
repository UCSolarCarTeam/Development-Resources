/*
First read through main() and make predictions on what the outpout of each variable will be where indicated.
After doing that add a function prototype at the top for a function called mySwap() that will return type void.
You will pass two variables in as argument, one will be the pointer p. The other one will be an integer pointer you make that points to the variable y.
In the function mySwap you will swap the values of the two arguments so the values are changed inside main()
*/

#include <iostream>

using namespace std;

void foo(int *a, int b);
void bar(int *a, int b);
void mySwap(int *p, int *y);

int main()
{
    int x = 3;
    int y = 4;
    int *p = &x;
    int *y_p= &y;

    //TODO in the line below predict what what is going to be output
    cout << "Predicted value of p: "  << "I beleive p itself will not return the address of x"  << endl;
    cout << "Actual value of p: " << p << endl;
    cout << "Predicted value &x: "  << "My guess is that &x will contain the memory address of x"  << endl;
    cout << "Actual value &x: " << &x << endl;
    cout << "Predicted value of *p: "  << "I beleive *p will contain the value at x"<< endl;
    cout << "Actual value of *p: " << *p << endl;
    
    foo(p, x);
    
    cout << "Predicted value of *p: " << "*p would return 42" << endl;
    cout << "Actual value of *p: " << *p << endl;
    cout << "Predicted value of x: "  << "x would be assigned the value 3" << endl;
    cout << "Actual value of x: " << x << endl;
    foo(p, y);

    cout << "Predicted value of *p: " << "I believe that *p will contain the value at which p is pointing to" << endl;
    cout << "Actual value of *p: " << *p << endl;
    cout << "Predicted value of y: " << "Will print 4" << endl;
    cout << "Actual value of y: " << y << endl;

    //start writing mySwap here
    mySwap(p, y_p);
    return 0;
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

void mySwap(int *p, int *y) {
    int temp = *p;
    *p = *y;
    *y = temp;
}
