let greetings: string = "Hello World!";

console.log(greetings); // Hello World!

greetings = "Hello TypeScript!";
greetings.toLowerCase();
console.log(greetings); // Hello TypeScript!

// greetings = 10; // Error: Type '10' is not assignable to type 'string'.

// type inference
let greetings2 = "Hello World!";
// greetings2 = 10; // Error: Type '10' is not assignable to type 'string'.

export {};