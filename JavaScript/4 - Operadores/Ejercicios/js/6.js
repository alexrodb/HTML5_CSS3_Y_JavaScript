"use strict";

var a = 1;
var b = 2;
var c = 3;

var op1 = a < b;
var op2 = c <= a;
var op3 = (a > b) != (c > a) ;
console.log("Op1: " + op1);
console.log("Op2: " + op2);
console.log("Op3: " + op3);