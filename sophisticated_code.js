/*  sophisticated_code.js
This code represents a complex and creative JavaScript program that demonstrates various advanced concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Function to find the average of an array of numbers
const findAverage = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

// Class representing a shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  getArea() {
    console.log(`Calculating area of ${this.name}...`);
    // Complex area calculation logic goes here
    console.log(`Area of ${this.name} calculated.`);
  }
}

// Class representing a circle, extending Shape class
class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  getArea() {
    super.getArea();
    const area = Math.PI * this.radius * this.radius;
    console.log(`Area of ${this.name} is ${area}`);
  }
}

// Example usage of the above code
const person = new Person("John Doe", 30);
person.introduce();

const num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);

const randomNum = getRandomNumber(1, 10);
console.log(`Random number between 1 and 10: ${randomNum}`);

const numbers = [1, 2, 3, 4, 5];
console.log(`Average of [${numbers.join(", ")}]: ${findAverage(numbers)}`);

const circle = new Circle("Circle", 5);
circle.getArea();

// ... more complex code here ...

// End of sophisticated_code.js