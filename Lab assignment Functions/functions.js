'use strict';
//my J# is J00414385
let jSum = 0+0+4+1+4+3+8+5;
console.log("The J number is J00414385");
console.log(`The sum of your J Number is ${jSum}.`);

//removed duplicates its 041385
//so it will be 6 functions

function f0(x){
    return x + 0 + jSum;
};
function f1(x){ 
   return x* 1 * jSum;
};

function f3(x){
    return x * 3 * jSum;
};
function f4(x){
    return x + 4 + jSum;
};
function f5(x){
    return x* 5 * jSum;
};
function f8(x){
    return x + 8 + jSum;
};

//User Input needed
function userInput(){
    let userVal = prompt("Enter a number");
    return Number(userVal);
};

function results(org,finalSum){
    alert("You gave the number "+ org + " The result is: " + finalSum);
}

let ip = userInput();

let num1 = f0(ip);
let num2 = f0(num1);
let num3 = f4(num2);
let num4 = f1(num3);
let num5 = f4(num4);
let num6 = f3(num5);
let num7 = f8(num6);
let num8 = f5(num7);

results(ip,num8);


