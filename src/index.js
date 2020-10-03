//  Euclidean Algorithm to find GCD
export const gcdOfTwo = (firstNumber, secondNumber) => {
  let remainder;
  while (firstNumber % secondNumber > 0) {
    remainder = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = remainder;
  }
  return secondNumber;
};
