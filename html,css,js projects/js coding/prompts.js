// alert("Hello! Mickey & Stanley is calling U")
alert("Hello! Mickey & Stanley is calling U") //alert command 
    //prompt command here...
let name = prompt("Enter any name");
console.log(name);


let num = prompt("Enter a Number:")
if (num % 5 === 0) {
    console.log(num, "Number is multiple of 5.");
} else {
    console.log(num, "Number is not multiple of 5.");
}

//practice ques. 2
let score = prompt("Enter your score (0 - 100):");
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