// filename: complex_algorithm.js

/**
 * This code implements a complex algorithm to find the prime factors of a given number.
 * The algorithm makes use of advanced mathematical concepts including prime number generation,
 * modular arithmetic, and divisibility tests. It also includes various helper functions
 * to perform different mathematical operations.
 */

// Helper function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
  }

  return true;
}

// Helper function to generate all prime numbers up to n using the Sieve of Eratosthenes algorithm
function generatePrimes(n) {
  const primeArray = new Array(n + 1).fill(true);
  primeArray[0] = false;
  primeArray[1] = false;

  let p = 2;
  while (p * p <= n) {
    if (primeArray[p] === true) {
      for (let i = p * p; i <= n; i += p) {
        primeArray[i] = false;
      }
    }
    p++;
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (primeArray[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// Helper function to compute modular exponentiation (a^b mod n)
function modularExponentiation(a, b, n) {
  let result = 1;

  while (b > 0) {
    if (b % 2 === 1) {
      result = (result * a) % n;
    }
    a = (a * a) % n;
    b = Math.floor(b / 2);
  }

  return result;
}

// Function to find the prime factors of a given number
function findPrimeFactors(num) {
  const primes = generatePrimes(Math.floor(Math.sqrt(num)));

  const factors = [];
  let remainder = num;

  for (const prime of primes) {
    if (prime * prime > remainder) break;
    while (remainder % prime === 0) {
      factors.push(prime);
      remainder /= prime;
    }
  }

  if (remainder > 1) {
    factors.push(remainder);
  }

  return factors;
}

// Main function
function runAlgorithm() {
  const inputNumber = 987654321;
  const primeFactors = findPrimeFactors(inputNumber);
  console.log(`Prime factors of ${inputNumber}: ${primeFactors.join(', ')}`);
}

runAlgorithm();
