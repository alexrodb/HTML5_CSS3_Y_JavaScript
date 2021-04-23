"use strict";

var a = 9;
var b = 6;
var c = 10;

var d = a < b;
var e = b > c;
var f = (c+3) > a;

var op1 = d && e;
var op2 = f && e;
var op3 = (d || f) && (!e || f);
console.log("Op1: " + op1);
console.log("Op2: " + op2);
console.log("Op3: " + op3);