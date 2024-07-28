//practices ques. 1

console.log("I Love Mickey...")

alert("Hello! Mickey & Stanley is calling U") //alert command 
    //prompt command here...
let name = prompt("Enter any name");
console.log(name);
// prompt with if else conition 
let num = prompt("Enter a Number:")
if (num % 5 === 0) {
    console.log(num, "Number is multiple of 5.");
} else {
    console.log(num, "Number is not multiple of 5.");
}


//variable declare 
const product = {
    name: "Jubin",
    age: 34,
    work: "singer",
    place: "mumbai",
};
console.log(product);
product["age"] = product['age'] + 1;
console.log(product);
console.dir(product);

let pet = {
    name: "Mickey",
    color: "black&white",
    age: 5,
};

console.log(pet);
////operator
a = 94
b = 54

console.log("a  =", a, "& b = ", b)
console.log("a + b =", a + b)
console.log("a - b =", a - b)
console.log("a * b =", a * b)
console.log("a % b =", a % b)
console.log("a / b =", a / b)
    //unary operator
console.log("a ++  =", a++)
console.log("++a  =", ++a)
console.log("a-- =", a--)
console.log("--a  =", --a)


//comparision operator

c = 15
d = 15

console.log("a == b =", a == b)
console.log("a === b =", a === b)
console.log("a !== b =", a !== b)
console.log("a > b =", a > b)
console.log("a < b =", a < b)
console.log("a != b =", a != b)
console.log("a >= b =", a >= b)
console.log("a <= b =", a <= b)
    //logical operator
let s = 7
let t = 5
let cond1 = a < b; //f
let cond2 = a === 6; //t
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 === cond2 =", a < b && a === b);
console.log("cond1 && cond2 =", a < b || a === b);
console.log("cond1 ! cond2 =", !(a < b));

// conditional statement 
// 1 . if statement
// let age = 16
// if (age >= 18) {
//     console.log("You can Vote")
// }

// if (age < 18) {
//     console.log("You are not eligible to vote")
// }

// let s = "Hello! Mickey & Stanley is calling U";
let mode = "light";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "aqua";
}

console.log(color)

//if ..else statement
let value = 13;
if (value >= 18) {
    console.log("U can VOTE!!");
} else {
    console.log("Not Vote");
}


////is elseif ...else statemant 

let age = 15;
if (age < 10) {
    console.log("U can't think for Driveing!!");
} else if (age <= 18 && age > 10) {
    console.log("U can not drive befor 18")
} else {
    console.log("U can Drive")
}
//Ternary operator
let set = 24;
let result = set >= 18 ? "Adult" : "Not Adult";
console.log(result)

//practice ques. 2
let score = 75;
let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 75 && score <= 90) {
    grade = "B";
} else if (score >= 60 && score <= 75) {
    grade = "C";
} else if (score >= 40 && score <= 60) {
    grade = "D";
} else if (score >= 0 && score <= 40) {
    grade = "F";
}


console.log("According to your scores,your grades:", grade);