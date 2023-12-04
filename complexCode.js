/*
File name: complexCode.js
Description: This code demonstrates a complex algorithm that performs various operations on an array of numbers.
*/

// Define an array of numbers
const numbers = [5, 10, 15, 20, 25, 30];

// Function to calculate the average of the numbers
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Function to find the square of a number
function square(num) {
  return num * num;
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  
  // Check for divisibility by numbers less than the square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to filter out the prime numbers from the array
function filterPrimeNumbers(arr) {
  return arr.filter(isPrime);
}

// Function to calculate the sum of the squares of prime numbers in the array
function calculateSumOfPrimeSquares(arr) {
  const primeNumbers = filterPrimeNumbers(arr);
  let sum = 0;
  
  for (let i = 0; i < primeNumbers.length; i++) {
    sum += square(primeNumbers[i]);
  }
  
  return sum;
}

// Function to find the maximum number in the array
function findMaximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to perform all operations on the array
function performOperations(arr) {
  const average = calculateAverage(arr);
  const sumOfPrimeSquares = calculateSumOfPrimeSquares(arr);
  const maximum = findMaximum(arr);
  
  console.log("Average:", average);
  console.log("Sum of squares of prime numbers:", sumOfPrimeSquares);
  console.log("Maximum number:", maximum);
}

// Perform operations on the array
performOperations(numbers);