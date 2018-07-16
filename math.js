//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

//a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

//The four operators are "add", "subtract", "divide", "multiply".

//A few examples:

function arithmetic(a, b, operator){
  //your code here!
  let array = {add: (a+b), subtract: (a-b), multiply: (a*b), divide: (a/b) }
    return array[operator];
}


//This problem took me some research on mdn and a few tries.
//I broke the problem down into sections that were written out.
// I knew that I had to get a & b to subtract and divde etc.
//But i had a hard time figuring out how
// I decided to create an object with an array that holds each arithmetic operator
// i defined multiplication by multiplying a & b using the * sign, same with sub(-), add(+), divide(/)
//I then asked to return the objects operators which are are addition, subtraction, ,multiplication and division
// 
