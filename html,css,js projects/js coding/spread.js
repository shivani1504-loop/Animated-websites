alert("Welcome to ES6 ")
    //speread operator
    // Syntax
    // var variablename1 = [...value]; 
    // Spread Operator and Array Manipulation
    // let colors = ['Red', 'Yellow'];
    // let newColors = [...colors, 'Violet', 'Orange', 'Green'];
    // console.log(newColors);

// Without using spread operator

// let colors = ['Red', 'Yellow'];
// let newColors = colors;
// newColors.push('Green');
// console.log(newColors);
// console.log(colors);

//Using spread operator

// let colors = ['Red', 'Yellow'];
// let newColors = [...colors];
// newColors.push('Green');
// console.log(newColors);
// console.log(colors);

// Spread operator and Strings
let str = ['A', ...
    'EIO', 'U'
];
console.log(str);

// ES6 Rest Parameter
function show(...args) {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    console.log("Sum = " + sum);
}

show(10, 20, 30);
// Rest Parameters and Destructuring

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

console.log(colors);
// destructuring assignment    
var [a, b, ...args] = colors;
console.log(a);
console.log(b);
console.log(args);

// Rest Parameter in a dynamic function
let num = new Function('...args', 'return args');
console.log(num(10, 20, 30));
// By using var

var x = 100;
var x = 200;
console.log(x);

// Let us try to re-write the above code by using the let keyword:

// By using let

// let x = 100;
// let x = 200;
// console.log(x);

// JavaScript Declarations are Hoisted

x = 10;
console.log(x);
var x;

var x; // declaration of the variable will move on top.  
x = 10;
console.log(x);
//  describes the Global and Local scope:
var $var12 = 200;

function example() {
    var $var12 = 300;
    console.log("Inside example() function = " +
        $var12);
}
console.log("Outside example() function = " +
    $var12);
example();
// arithmetic operators that are listed above:

// var x = 30;
// var y = 20;

// console.log("Addition: " + (x + y));
// console.log("Subtraction: " + (x - y));
// console.log("Multiplication: " + (x * y));
// console.log("The Division will give you the quotient: " + (x / y));
// console.log("Modulus will give you the Remainder: " + (x % y));
// // pre-increment   
// console.log("Value of x after pre-increment: " + (++x));
// // post-increment   
// console.log("Value of x after post-increment: " + (x++));
// // pre-decrement   
// console.log("Value of y after pre-decrement: " + (--y));
// // post-decrement   
// console.log("Value of y after post-decrement: " + (y--));

// relational operators that are listed above

// var x = 20;
// var y = 15;

// console.log("Value of x: " + x);
// console.log("Value of y: " + y);
// var result = x > y;
// console.log("x is greater than y: " + result);
// result = x < y;
// console.log("x is smaller than y: " + result);
// result = x >= y;
// console.log("x is greater than or equal to  y: " + result);
// result = x <= y;
// console.log("x is smaller than or equal to y: " + result);
// result = x == y;
// console.log("x is equal to y: " + result);
// result = x != y;
// console.log("x not equal to  y: " + result);


// logical operators that are listed above.

// var x = 30;
// var y = 80;

// console.log("Value of x = " + x);
// console.log("Value of y = " + y);

// var result = ((x < 40) && (y <= 90));
// console.log("(x < 40) && (y <= 90): ", result);

// var result = ((x == 50) || (y > 80));
// console.log("(x == 50) || (y > 80): ", result);

// var result = !((x > 20) && (y >= 80));
// console.log("!((x > 20) && (y >= 80)): ", result);

// logical operators that are listed above.

// var x = 20;
// var y = 40;

// x = y;
// console.log("After assignment the value of x is:  " + x);

// x += y;
// console.log("x+=y: " + x);

// x -= y;
// console.log("x-=y: " + x);

// x *= y;
// console.log("x*=y: " + x);

// x /= y;
// console.log("x/=y: " + x);

// x %= y;
// console.log("x%=y: " + x);
// //bitwise operator
// var x = 70; /* 70 = 0100 0110 */
// var y = 80; /* 80 = 0101 0000 */
// var res = 0;

// console.log("Value of 70 in binary 0100 0110");
// console.log("Value of 80 in binary 0101 0000");


// res = x & y; /* 64 = 0100 0000 */
// console.log("Value of x & y = %d\n", res);

// res = x | y; /* 86 = 0101 0110 */
// console.log("Value of x | y = %d\n", res);

// res = x ^ y; /* 22 = 0001 0110 */
// console.log("Value of x ^ y = %d\n", res);

// res = ~x; /*-71 = -0100 0111 */
// console.log("Value of ~ x = %d\n", res);

// res = x << 2; /* 280 = 1000 11000 */
// console.log("Value of x << 2 = %d\n", res);
// res = x >> 2; /* 17 = 0001 0001 */
// console.log("Value of x >> 2 = %d\n", res);

// miscellaneous operators in detail:
// var num1 = 80;
// var num2 = -num1;
// console.log("Value of num1 = " + num1); // It will give 80  
// console.log("Value of num2 = " + num2); // It will give -80

//Concatenation Operator (+)
// var str1 = 'Hello' + 'World';
// var str2 = 'Welcome ' + 'Back';
// console.log(str1);
// console.log(str2);

// Conditional Operator (?)
// var num1 = 30;
// var num2 = 20;
// var res = num1 > num2 ? "Yes 30 is greater than 20" : "No It's not";
// console.log(res);