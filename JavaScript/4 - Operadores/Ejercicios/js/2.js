"use strict";

var a, b, c;
a = b = c = 10;
a += b *= c /= 10;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);