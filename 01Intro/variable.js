"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello World!";
console.log(greetings); // Hello World!
greetings = "Hello TypeScript!";
greetings.toLowerCase();
console.log(greetings); // Hello TypeScript!
// greetings = 10; // Error: Type '10' is not assignable to type 'string'.
// type inference
var greetings2 = "Hello World!";
