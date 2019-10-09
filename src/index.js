import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';


// ----

// truthy 

// console.log(1 == 1); 

// console.log(1 === 1);

// console.log(!!true);
// console.log(Boolean(true));

// console.log(!!{}); 
// console.log(!![]); 
// console.log(!!new Date()); 
// console.log(!!'o'); 
// console.log(!!0); // false
// console.log(!!42); 
// console.log(!!-42);


// // falsey 

// console.log(!!false); 
// console.log(!!null); 
// console.log(!!undefined); 
// console.log(!!0); 
// console.log(!!NaN); 
// console.log(!!''); 

// ----

// if, if else, else

// const condition = false; 

// if (condition) {
//     console.log("yes"); 
// } else {
//     console.log("no"); 
// }


// const number = 99;
// let result; 

// if (number == 1) {
//     result = "One"; 
// } else if (number === 99) {
//     result = "Ninety-Nine"; 
// } else {
//     result = "no match"; 
// }

// console.log(result); 


// -- Ternary Op

// const number = 1; 
// // let result = condition ? true : false; 
// // let result = number === 1 ? "one" : "no match";
// let result = "The number is: " + (number === 1 ? "one" : "no match");

// console.log(result); 

// -- Switch

// const number = 991; 
// let result; 

// switch (number) {
//     case 1:
//         result = "One";
//         break;  
//     case 99:
//         result = "Ninety-Nine";
//         break; 
//     case 1000:
//         result = "One Thousand";
//         break;
//         default: 
//         result = "No Match";  
// }

// console.log(result); 



// -- Number literal

// //literal 
// const literalNumber = 99; 
// console.log(literalNumber); 

// //function syntax
// //performs a type-conversion in a non-construtor context
// console.log(Number(55)); 
// console.log(Number('33'));
// console.log(Number('33px'));

// //constructor - creates a wrapper object
// console.log(new Number(66));


// -- Intagers & floating point

// console.log(0.1 + 0.2); 

// const price = 9.33; 
// const quant = 3; 
// console.log(price * quant); 

// // use * by 100 to fix floating point issue; 
// const priceFix = 9.33 * 100; 

// console.log((priceFix*quant) / 100); 


// --- Parsing Stings to Numbers

// console.log(parseInt("55px", 10)); 
// console.log(parseFloat("55.9999px"));
// console.log(Number("55e10"));
// console.log(Number("55px")); // NaN
// console.log(+"55.999"); // same as parseFloat 


// - Not a Number NaN \

// console.log(isNaN("I am a String"));

// console.log(Number.isNaN("I am another string")); 

// console.log(Number.isInteger(66)); 
// console.log(Number.isInteger(66.99));

// console.log(Number.isNaN(Number.NaN)); // asking if Nan is NaN


// --- Immubtability in JS

// const immutableNumnber = 99; 
// let referencedNumber = immutableNumnber; 

// referencedNumber = 44; 

// console.log(immutableNumnber); 
// console.log(referencedNumber); 


// --- Type Checking 

// console.log(typeof 99);
// console.log(99 instanceof Number);
// console.log(new Number("99") instanceof Number); 
// console.log(Object.prototype.toString.call(99)); 


// --- Exploring Number Methods

// console.log(Number.prototype);
// console.log(99..toFixed(4));
// console.log(parseFloat((99.12345).toFixed(4)));
// console.log((99.12324234).toPrecision(5));  
// console.log(new Number(99).valueOf()); 


// --- String Literal 

// console.log("Pizza \"Hello\" time!"); 

// const pizza = "Sauce"; 
// console.log(`I like ${pizza} on my pizza`); 

// console.log(String(55 + 11), 55 + "11"); 

// console.log(new String(55)); 


// ---- String Properties 

// const pizza = "sauce"; 

// console.log(new String(5599)); 
// console.log("pizza".length); 
// console.log("pizza"[0]); 
// console.log(pizza[pizza.length -1]); 


// --- String and Immutability

// const immutableString = "I shall not chage!"; 

// const upperaseString = immutableString.toUpperCase();

// console.log(immutableString, upperaseString); 

// Correctly Type-Checking

// console.log(typeof "Pepperoni"); 
// console.log("Pepperoni" instanceof String); 
// console.log(new String("Pepperoni") instanceof String); 
// console.log(String("Pepperoni") instanceof String); 
// console.log(Object.prototype.toString.call("Pepperoni")); 

// ---- Exploring String Methods

// console.log(String.prototype); 
// console.log("Pepperoni".indexOf("z")); 

// console.log("Pepperoni".indexOf("P"));
// console.log("Pepperoni".includes("P"));

// console.log("Pepperoni".replace("oni", "xzy")); 

// console.log("Pepperoni".slice(0, -2));

// console.log("Pepperoni~Plain".split("~")[1]);

// console.log(" 4444 1111 1111 1111 ".replace(/\s/g, '')); //remove white space 


// ----- Boolean Literal, Functions and Constructor Syntax

// console.log(true, false); 

// const arg = "x"; 

// console.log(Boolean(arg)); 
// console.log(!!arg); 

// console.log(new Boolean(arg)); 

// ---- Correctly Type-Checking booleans 

// console.log(typeof false);
// console.log(true instanceof Boolean); 
// console.log(new Boolean("X") instanceof Boolean); 
// console.log(Object.prototype.toString.call(true)); // google this 

// ----- Function Declarations and Expressions 

//1 function Declaration 

// function makeCar() {
//     console.log("Making a car..."); 
// }

// console.log(makeCar);
// makeCar(); 


// //2 Function Expression (annonymous or named)

// const makeCarExpression = function myfunction() {};

// console.log(makeCarExpression.name);  



// //3 Arrow functions

// const makeCarArrow = () => {
//     console.log("Making car inside Arrow..")
// }; 

// makeCarArrow(); 


// const makeCarArrowShort = () => console.log("Short"); 

// makeCarArrowShort();


// ----------------Function Parameters
//name = parameter
// function makeCar(name) {
//     if (!name) {
//         name = "Add a car to argument"
//     }
//     console.log(`Making car: ${name.toUpperCase()}`);
// }

// //stings = arguments
// makeCar("Porsche"); 
// makeCar("Ferrari"); 
// makeCar(); 


// Rest Parametters and Arguments

// function makeCarPrice() {
//     console.log(arguments); // this is not an array
//     const total = Array.from(arguments).reduce((prev, next) => {
//         return prev + next; 
//     }); 
//     console.log(total); 
// }

// makeCarPrice(11, 44, 55, 99); 


// // -new way of doing it (rest parameters)

// function makeCarPriceRest(...params) {
//     console.log(params);
//     const total = params.reduce((prev, next) => prev + next); 
//     console.log(total); 

// }

// makeCarPriceRest(99, 88, 77, 66); 


// -----Function Return Values

// function makeCarPrice(...params) {
//     const total = params.reduce((prev, next) => prev + next); 
//     return total; 
// }

// const totalPrice = makeCarPrice(11, 22, 33); 
// console.log(totalPrice); 

// const makeCarPriceArrow = (...params) =>
//     params.reduce((prev, next) => prev + next); 

// console.log(`Total: ${makeCarPriceArrow(11, 22)}`); 


// ---------------- Function Closures and Scope

function makeCarPart(id) {
    console.log(id); 
}

makeCarPart("zxzxv"); 