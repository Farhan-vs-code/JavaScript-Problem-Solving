// JavaScript Problem Solving 1

 function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    }
    console.log(varVariable);  // I am var
    // console.log(letVariable); // ReferenceError: letVariable is not defined
    // console.log(constVariable); // ReferenceError: constVariable is not defined
  }
  
  scopeTest(); 

// JavaScript Problem Solving 2

 function greet(name, greeting = "Hello"){
    return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // "Good morning, Bob!" 

// JavaScript Problem Solving 3

 function sum(...number){
    return number.reduce((total, num) => total + num);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum(5)); // 5 

// JavaScript Problem Solving 4

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// JavaScript Problem Solving 5

const name2 = "John";
const age2 = 30;

const person = {
    name2,
    age2,
    greet(){
        return `Hi, I'm ${name2} and I'm ${age2} years old.`
    }
}

console.log(person.greet()); // "Hi, I'm John and I'm 30 years old."

// JavaScript Problem Solving 6

const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits){
    console.log(fruit)
}

// JavaScript Problem Solving 7

const name = "Alice";
const age = 25;

const message = `"My name is ${name} and I am ${age} years old."`;

console.log(message); // "My name is Alice and I am 25 years old."

// JavaScript Problem Solving 8

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
for (const student of students){
    console.log(`${student.name} ${student.grade}`);
} 

// JavaScript Problem Solving 9

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
for (const innerArray of nestedArrays){
    let sum = 0;
    for (const num of innerArray){
        sum += num;
    }
    console.log(sum);

}

// JavaScript Problem Solving 10

const a = 5;
const b = 10;

const result = `"The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); // "The sum of 5 and 10 is 15."


