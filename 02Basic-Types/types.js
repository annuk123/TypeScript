"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Basic types in typescript
//Boolean
var isDone = false;
console.log(isDone); // false
var isDone2 = true;
console.log(isDone2); // true
//Typically used for flags and conditions in logic where something is either true or false.
//In JavaScript and TypeScript, all numbers are floating point values.
//In JavaScript, truthy and falsy values exist, and are used to determine the result of a condition. but typescript enforce strict boolean types(only true or false).
//Boolean values are used for conditions in logic.
//Number
var decimal = 6;
console.log(decimal); // 6
var hex = 0xf00d;
console.log(hex); // 61453
var binary = 10;
console.log(binary); // 10
var octal = 484;
console.log(octal); // 484
//Hexadecimal numbers are prefixed with 0x.
//Octal numbers are prefixed with 0o.
//Binary numbers are prefixed with 0b.
//Number values are used for arithmetic operations in logic.
//Typescript does not differentiate between integer and floating point numbers. both are considered as number type.
//String
var color = "blue";
console.log(color); // blue
color = 'red';
console.log(color); // red
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is ".concat(fullName, ". I'll be ").concat(age + 1, " years old next month.");
console.log(sentence); // Hello, my name is Bob Bobbington. I'll be 38 years old next month.
//String values are used for storing text.
//Strings can be enclosed within single quotes, double quotes, or backticks.
//Backticks are used for string interpolation and multiline strings.
//String interpolation allows embedding expressions within string literals.
//String values are used for text manipulation in logic.
//Array
var list = [1, 2, 3];
console.log(list); // [1, 2, 3]
var list2 = [1, 2, 3];
console.log(list2); // [1, 2, 3]
//Array values are used for storing multiple values.
//Array values can be of the same type or different types.
//Array values are used for iterating and manipulating collections of data.
//Tuple
var x;
x = ["hello", 10]; // OK
console.log(x); // ["hello", 10]
// x = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'.
// x = ["hello", 10, 20]; // Error: Type 'number' is not assignable to type 'string'.
// x = ["hello"]; // Error: Type 'number' is not assignable to type 'number'.
//Tuple values are used for storing fixed-size collections of values.
//Tuple values can be of different types.
//Tuple values are used for storing data of different types.
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // 1
//Enums allow defining a set of named constants.
//Enums are used for defining collections of related values.
//Enums are used for defining a set of named constants.
//Any
var notSure = 4;
console.log(notSure); // 4
notSure = "maybe a string instead";
console.log(notSure); // maybe a string instead
notSure = false;
console.log(notSure); // false
//Any values are used for dynamic data types.
//Any values can be of any type.
//Any values are used for working with dynamic content.
//Void
function warnUser() {
    console.log("This is my warning message");
}
warnUser(); // This is my warning message
//Void values are used for functions that do not return a value.
//Null and Undefined
var u = undefined;
console.log(u); // undefined
var n = null;
console.log(n); // null
//Null and undefined values are used for representing no value.
//Never
function error(message) {
    throw new Error(message);
}
create({ prop: 0 }); // OK
create(null); // OK
//Object values are used for representing instances of objects.
//Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength); // 16
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
console.log(strLength2); // 16
var someValue3 = "this is a string";
var strLength3 = someValue3.length;
console.log(strLength3); // 16
//Type assertions are used for overriding the inferred type of a value.
//Type assertions are used for working with dynamic content.
//Type inference
var greetings = "Hello World!";
console.log(greetings); // Hello World!
// greetings = 10; // Error: Type '10' is not assignable to type 'string'.
//Type inference is used for automatically determining the type of a value.
//Type inference is used for working with dynamic content.
//Type union
var union;
union = "Hello World!";
console.log(union); // Hello World!
union = 10;
console.log(union); // 10
var firstAndSecond = { first: "Hello", second: "World!" };
console.log(firstAndSecond); // { first: 'Hello', second: 'World!' }
function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName("Hello World!")); // Hello World!
console.log(getName(function () { return "Hello World!"; })); // Hello World!
//Type aliases are used for defining custom types.
//Type aliases are used for working with dynamic content.
//Type guards
function isString(test) {
    return typeof test === "string";
}
console.log(isString("Hello World!")); // true
console.log(isString(10)); // false
//Type guards are used for checking the type of a value.
//Type guards are used for working with dynamic content.
//Type narrowing
var value = "Hello World!";
if (typeof value === "string") {
    console.log(value.toLowerCase());
}
