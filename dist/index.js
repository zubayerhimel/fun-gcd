"use strict";

//  Euclidean Algorith to find GCD
var gcdOfTwo = function gcdOfTwo(firstNumber, secondNumber) {
  var remainder = void 0;
  while (firstNumber % secondNumber > 0) {
    remainder = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = remainder;
  }
  return secondNumber;
};

console.log(gcdOfTwo(7, 77));