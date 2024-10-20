//Basic types in typescript
//Boolean
let isDone = false;
console.log(isDone); // false

let isDone2: boolean = true;
console.log(isDone2); // true
//Typically used for flags and conditions in logic where something is either true or false.
//In JavaScript and TypeScript, all numbers are floating point values.
//In JavaScript, truthy and falsy values exist, and are used to determine the result of a condition. but typescript enforce strict boolean types(only true or false).
//Boolean values are used for conditions in logic.

//Number
let decimal: number = 6;
console.log(decimal); // 6

let hex: number = 0xf00d;
console.log(hex); // 61453

let binary: number = 0b1010;
console.log(binary); // 10

let octal: number = 0o744;
console.log(octal); // 484
//Hexadecimal numbers are prefixed with 0x.
//Octal numbers are prefixed with 0o.
//Binary numbers are prefixed with 0b.
//Number values are used for arithmetic operations in logic.
//Typescript does not differentiate between integer and floating point numbers. both are considered as number type.

//String
let color: string = "blue";
console.log(color); // blue

color = 'red';
console.log(color); // red

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
console.log(sentence); // Hello, my name is Bob Bobbington. I'll be 38 years old next month.
//String values are used for storing text.
//Strings can be enclosed within single quotes, double quotes, or backticks.
//Backticks are used for string interpolation and multiline strings.
//String interpolation allows embedding expressions within string literals.
//String values are used for text manipulation in logic.

//Array
let list: number[] = [1, 2, 3];
console.log(list); // [1, 2, 3]

let list2: Array<number> = [1, 2, 3];
console.log(list2); // [1, 2, 3]
//Array values are used for storing multiple values.
//Array values can be of the same type or different types.
//Array values are used for iterating and manipulating collections of data.

//Tuple
let x: [string, number];
x = ["hello", 10]; // OK
console.log(x); // ["hello", 10]

// x = [10, "hello"]; // Error: Type 'number' is not assignable to type 'string'.
// x = ["hello", 10, 20]; // Error: Type 'number' is not assignable to type 'string'.
// x = ["hello"]; // Error: Type 'number' is not assignable to type 'number'.
//Tuple values are used for storing fixed-size collections of values.
//Tuple values can be of different types.
//Tuple values are used for storing data of different types.

//Enum
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
console.log(c); // 1
//Enums allow defining a set of named constants.
//Enums are used for defining collections of related values.
//Enums are used for defining a set of named constants.

//Any
let notSure: any = 4;
console.log(notSure); // 4

notSure = "maybe a string instead";
console.log(notSure); // maybe a string instead

notSure = false;
console.log(notSure); // false
//Any values are used for dynamic data types.
//Any values can be of any type.
//Any values are used for working with dynamic content.

//Void
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser(); // This is my warning message
//Void values are used for functions that do not return a value.

//Null and Undefined
let u: undefined = undefined;
console.log(u); // undefined

let n: null = null;
console.log(n); // null
//Null and undefined values are used for representing no value.

//Never
function error(message: string): never {
    throw new Error(message);
}
// error("Something went wrong");
// Never values are used for representing never occurring values.

//Object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
//Object values are used for representing instances of objects.

//Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // 16

let someValue2: any = "this is a string";
let strLength2: number = (<string>someValue2).length;
console.log(strLength2); // 16

let someValue3: any = "this is a string";
let strLength3: number = someValue3.length;
console.log(strLength3); // 16
//Type assertions are used for overriding the inferred type of a value.
//Type assertions are used for working with dynamic content.


//Type inference
let greetings = "Hello World!";
console.log(greetings); // Hello World!
// greetings = 10; // Error: Type '10' is not assignable to type 'string'.
//Type inference is used for automatically determining the type of a value.
//Type inference is used for working with dynamic content.

//Type union
let union: string | number;
union = "Hello World!";
console.log(union); // Hello World!
union = 10;
console.log(union); // 10
//Type union is used for defining a value that can be of multiple types.
//Type union is used for working with dynamic content.

//Type intersection
type First = { first: string };
type Second = { second: string };
type FirstAndSecond = First & Second;
let firstAndSecond: FirstAndSecond = { first: "Hello", second: "World!" };
console.log(firstAndSecond); // { first: 'Hello', second: 'World!' }
//Type intersection is used for combining multiple types into one.
//Type intersection is used for working with dynamic content.

//Type aliases
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    } else {
        return n();
    }
}
console.log(getName("Hello World!")); // Hello World!
console.log(getName(() => "Hello World!")); // Hello World!
//Type aliases are used for defining custom types.
//Type aliases are used for working with dynamic content.

//Type guards
function isString(test: any): test is string {
    return typeof test === "string";
}
console.log(isString("Hello World!")); // true
console.log(isString(10)); // false
//Type guards are used for checking the type of a value.
//Type guards are used for working with dynamic content.

//Type narrowing
let value: string | number = "Hello World!";
if (typeof value === "string") {
    console.log(value.toLowerCase());
}
//Type narrowing is used for narrowing the type of a value.
//Type narrowing is used for working with dynamic content.

export {};

