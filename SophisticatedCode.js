/* 
   Filename: SophisticatedCode.js
   Content: A sophisticated and complex JavaScript code example.
*/

// Class for representing a person
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  
  displayAge() {
    console.log(`Age: ${this.age}`);
  }
}

// Function to sort an array of persons by age in ascending order
function sortByAge(persons) {
  persons.sort((a, b) => a.age - b.age);
}

// Create an array of persons
const persons = [
  new Person("John", "Doe", 30),
  new Person("Alice", "Smith", 25),
  new Person("Mike", "Johnson", 35),
  new Person("Emily", "Brown", 28)
];

// Sort persons by age
sortByAge(persons);

// Display sorted persons
console.log("Sorted Persons by Age:");
persons.forEach(person => {
  console.log(person.getFullName());
  person.displayAge();
});

// Function to calculate the sum of two numbers
function add(a, b) {
  return a + b;
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  return n * factorial(n-1);
}

// Calculate the sum of two numbers
const num1 = 5;
const num2 = 10;
const sum = add(num1, num2);
console.log(`Sum of ${num1} and ${num2} is: ${sum}`);

// Calculate the factorial of a number
const num3 = 6;
const factorialResult = factorial(num3);
console.log(`Factorial of ${num3} is: ${factorialResult}`);

// Create a class to represent a circle
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
  
  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Create a circle instance and calculate its area and circumference
const circle = new Circle(5);
console.log("Circle Properties:");
console.log(`Area: ${circle.calculateArea()}`);
console.log(`Circumference: ${circle.calculateCircumference()}`);

// Create a class to represent a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  }
  
  stopEngine() {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }
  
  honk() {
    console.log(`${this.brand} ${this.model} honking...`);
  }
}

// Create a car instance and perform some actions
const car = new Car("Tesla", "Model S", 2021);
car.startEngine();
car.honk();
car.stopEngine();

// ... Rest of the code continues ...
// Add more classes, functions, and logic to make the code even more sophisticated and complex.