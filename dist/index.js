"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//  Euclidean Algorithm to find GCD
var gcdOfTwo = exports.gcdOfTwo = function gcdOfTwo(firstNumber, secondNumber) {
  var remainder = void 0;
  while (firstNumber % secondNumber > 0) {
    remainder = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = remainder;
  }
  return secondNumber;
};