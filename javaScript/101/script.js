"use strict";

// 1. JavaScript Syntax
var name = "Marian";

if (name === "Marian") {
  alert("Hello Student!");
}

function greeting(name) {
  return `Hello ${name}, welcome to JavaScript`;
}

console.log("---------------------------------");

//2. Console logging

console.log("Write anything here");
console.warn("This is a warning");
console.error("This is an error");

console.log("---------------------------------");

//3. Debugging external files

console.log("Page successfully loaded script.js");

console.log("---------------------------------");

//4. Storing data in variables

var website = "https://codingforeverybody.com/";
var teacherName = "Kalob Taulien";

console.log(teacherName);

console.log("---------------------------------");

//5. Let const variable

let apples = 1;

// const and let are scoped to the {} in which they were created
if (teacherName === "Kalob Taulien") {
  let apples = 5;
  const height = "6'0";
}
