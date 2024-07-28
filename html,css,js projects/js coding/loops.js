alert("Hello! Mickey & Stanley is calling U") //alert command
    //in this section we learn loops
    //for loop
    // for (let count = 1; count <= 10; count++) {
    //     console.log("count = ", count);
    //     console.log("Mickey & Stanley :");
    // }
    // Calculate the sum of 1 to n
    // let sumi = 0;
    // let nt = 6;
    // for (let i = 1; i <= nt; i++) {
    //     sumi = sumi + i * 2;
    // }
    // console.log("sum = ", sumi);


// let sum = 0;
// let n = 45;
// for (let i = 0; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("Loop is end now:");

// while loop Now

// let i = 1;
// while (i <= 10) {
//     console.log("i =", i);
//     i++;
// }
// do -while loop
// let i = 1;
// do {
//     console.log("i =", i);
//     i++;
// // }
// while (i <= 10);
// let learn thr for-of loop
// let str = "Shivani & Jubin"
// for (let i of str) {
//     console.log(i);
// // }
// other for-of loop code use for strings and array
let str = "Shivani & Jubin"
let size = 0;
for (let i of str) {
    console.log(i);
    size++;
}
console.log("string size is :", size);

// for-in loop use for objects, array
//let start for-in loop
let studend = {
    name: "Jubin Nautiyal",
    age: 34,
    cgpa: 7.5,
    isPAss: true
};
for (let i in studend) {
    console.log(i);
}

for (let key in studend) {
    console.log("key = ", key, "value = ", studend["key"]); //this line shoe value is undefine
    console.log("key = ", key, "value = ", studend[key]);
}
// practes ques.1 
for (let num = 0; num <= 100; num++) {
    if (num % 2 !== 0) { // for ood number put not
        //even number
        console.log("num =", num);
    }
}

// ques.2 guess a number
// let gameNum = 29;
// let userNum = prompt("Guess the number:");

// while (userNum != gameNum) {
//     userNum = prompt("You enter the wrong number. Guess again:");
// }

// console.log("Congratulations, you entered the right number");
//template Literal
// let strt = "Shivani\tJubin";
// // strt = strt.toUpperCase();
// // strt = strt.toLowerCase();
// // strt = strt.trim();
// // console.log(strt);
// // console.log(strt.length);
// console.log(strt.slice(1, 14))

// let str1 = "Mickeyhekeoe";
// // let str2 = "stanley";
// console.log(str1.replaceAll("e", "s"))
// let res = str2.concat(str1);
// console.log(res);

// let str3 = "I Love Js";
// str3 = str3.replace("I ", "s");
// console.log(str3);
// // console.log(str3.charAt(5));


// let fulName = prompt("Enter your full Name :");
// let userName = "@" + fulName + fulName.length;
// console.log(userName);