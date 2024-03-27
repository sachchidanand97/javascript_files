//console.log("Jay shree Ganesh & Jay Ma lakshmi");

// loops in JS 

// loops are used to execute a piece of code again & again.

//1 - For loop in js

// for (let i = 1; i <= 5 i++) {  let i = 1; this is initialization 
//                                 i <= 5; this is a stopping condition. Meaning, how many times will our loop run?
//                                i++; updation Means. how many times the value of i is being updated.

// }

// program print jay shree ganesh 1 to 5 times.

// for (let count = 1; count <= 5; count++) {
//     console.log("Jay shree ganesh"); // 5 execute
// }

// console.log("loop has ended");


//Calculate sum of 1 to 9.


// let sum = 0;
// for (let i = 1; i <= 9; i++) {
//     sum = sum  + i;  
// }

// console.log("sum = ", sum);
// //console.log ("loop has ended");

//Calculate sum of 1 to n.

// let sum = 0;
// let n = 5
// for (let i = 1; i <= n; i++) {
//     sum = sum  + i;  
// }

// console.log("sum = ", sum);
// //console.log ("loop has ended");


// for (let i = 1; i <= 5; i++) {
//     console.log("i = ", i);
// }

// for (let i = 1; i <= 5; i++) {
//                                 // lecture_third_looo_string.js:55 Uncaught ReferenceError: i is not defined
//                                 // i valide is not valid out of the  block scope.   
// }

// console.log(i);


// loop Infinite Loop: A Loop that never ends


// for (let i = 1; i >= 0; i++) {
//     console.log("i = ", i); this loop is not run inmy system.
// }

// while Loop in js 

// syntx while loop 

// while (condition) {
//     //do some work
// }


// let  i = 1;
// while (i <= 10) {
//     //console.log("i = ", i);
//     console.log("Jay shree Ganesh Namh");
//     i++;
// }




// while loop in js 
// while loop 

// do { In do while loop the loop will run once and then the condition will be checked.
    
//     do some work.
// } 
// while (condition);

// let i = 20;

// do {
//     console.log("Jay shree Ganesh Namha");
//     i++;
// }while (i <= 10);

// let i = 1;

// do {
//     console.log("Jay shree Ganesh Namha");
//     i++;
// }while (i <= 10);


// for-of Loop

// for (let val of strvar) {
//     //do some work // for-of loop use to get string key value.
                      // for-of loop use bsacally iterate  string.
// }


//for-of loop

// let str = "jay shree ganesh";

//  for(let i of str) { //iterator -> characters
//     console.log("i = ", i);
//  }


//for-of loop
// how to check string size.
// let str = "jay shree ganesh";
// let size = 0;
// for(let val of str) { //iterator -> characters
//    console.log("val = ", val);
//    size++;
// }

// console.log("size = ", size);


// for-in loop // basacally use to iterat object and array key in js.

// for (let key in objVar) {
//     //do some work
// }


// let student = {
//     name: "Rahul kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let i in student) {
//     console.log(i);
// }

// let student = {
//     name: "Rahul kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let key in student) {
//     console.log("key = ", key, " value = ", student[key]);
// }

// theroy Part 37.17 MIDIInput.

// Paractic Question All Loops in Js 