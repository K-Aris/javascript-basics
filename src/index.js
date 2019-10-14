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


// //scope 1
// const someID = 99;

// function makeCarPart(id) {
//     /// scope 2
//     // const someID = 99;
//     function anotherFunction() {
//         //scope 3
//         // const someID = 99; 
//         console.log(someID); 
//     } 
// }

// makeCarPart("zxzxv");

// CLOSURE!!!!!

// function makeCarPartID(id) {
//     const theID = `CAR_PART_${id}`; 
//     return function(name) {
//         return `${theID}_${name.toUpperCase()}`; 
//     }; 
// }

// const carPartID = makeCarPartID("12345abcd"); 
// console.log(carPartID("Left Door")); 
// console.log(carPartID("Right Door"));


// Arrow version 

// function makeCarPartID(id) {
//     const theID = `CAR_PART_${id}`;
//     return name => `${theID}_${name.toUpperCase()}`;
// }

// const carPartID = makeCarPartID("12345abcd");
// console.log(carPartID("Left Door"));
// console.log(carPartID("Right Door"));


// --------IIFE

// const carPartID = (function(id) {
//     const theID = `Car_Part_${id}`;  
//     return function (name) {
//         return `${theID}_${name}`; 
//     }; 
// })("32423415");

// console.log(carPartID("Left Door")); 

// -------------Function & Callbacks

// function carPartID(name, fn) {
//     const theID = `Car_Part_12324`; 
//     return  fn(`${theID}_${name}`); 
// }

// const carPart = carPartID("Left Door", function(id) {
//     return(id); 
// });

// console.log(carPart); 


// ----------------This

// const firstCar = { id: "123456"}; 
// const secondCar = { id: "asfdsgdafg"}; 
// const thirdCar = { id: "zxcv"}; 


// function carPartID(name, quantity) {
//     console.log(`${this.id}_${name}_${quantity}`); 
// }

// const boundThirdCar = carPartID.bind(thirdCar); 
// boundThirdCar("windscreen", 99); 

// // call = c = commas
// carPartID.call(firstCar, "Left Door", 12); 

// // apply = a = array
// carPartID.apply(secondCar, ["Right Door", 12]);


// ------ Object Literal 

// const drink = {
//     id: "213werw", 
//     name: "Pepsi",
//     price: 1.50, 
// };

// console.log(drink); 

// const drinkReference = drink;
// drinkReference.name = "Coke"; 

// console.log(drink); 


// console.log(new Object());
// console.log(Object);  
// console.log ({} instanceof Object); 


// ----- Properties, Methods and Values

// const drink = {
//     id: "12321kl",
//     name: "Coke",
//     price: 99, 
//     getDrinkDetails() {
//         return `Drink ${this.name} (${this.price})`;
//     },
//     "newKey": "I need help", //if key comes after method add quotes
//     100: "will it code",  
// }; 

// console.log(drink.getDrinkDetails());

// console.log(drink.newKey);

// console.log(drink[100]); // numbers keys need to be put in [] if after method. 


// console.log(drink); 

// const myId = 'id';
// console.log(drink[myId]); 


// ----------------- Shorthand Properties 

// const myId = "werewt"; 
// const myName = "coke"; 
// const myPrice = 99; 

// // const drink = {
// //     id: myId,
// //     name: myName,
// //     price: myPrice,
// // };

// const drink = {
//     myId,
//     myName,
//     myPrice, 
// }; 

// console.log(drink); 


// Destructuring Object Properties


// const drink = {
//     id: "sdfasfd",
//     name: "Coke", 
//     price: {
//         sale: 99,
//         full: 129,
//     },
// }; 

// const {id, name, price: { full }} = drink; 

// console.log(id, name, full); 


// --------------------Property and Value Existence Checking

// const drink = {
//     id: "sdfasfd",
//     name: "Coke",
//     price: {
//         sale: 99,
//         full: 129,
//     },
// };

// if (drink.id) {
//     console.log(drink.id); 
// }

// for (const prop in drink) {
//     if (drink[prop] === "Coke") {
//     console.log(drink[prop]);
//     } 
// }

// class Grandpa {
//     constructor(attrsG) {
//         this.name = attrsG.name;
//         this.eyes = attrsG.eyes;
//         this.hair = attrsG.hair;
//     }
//     speak() {
//         console.log(`I have ${this.eyes} eyes`)
//     }
// }

// class Parent extends Grandpa {
//     constructor(attrsP) {
//         super(attrsP)
//     }
//     speak() {
//         console.log(`I have ${this.eyes} eyes`); 
//     }
// }

// class Child extends Parent {
//     constructor(attrsC) {
//         super(attrsC)
//     }
//     speak() {
//         console.log(`I have ${this.eyes} eyes`); 
//     }
// }


// const me = new Child({
//     name: "Ken",
//     eyes: "brown",
//     hair: "black",
// });

// console.log(me);
// console.log(me.speak());



// class Building {
//     constructor(isOnFire) {
//         this.place = isOnFire.place; 
//     }
//     dial() {
//         console.log("Call the fire dept!!!!"); 
//     }
// }

// class Apt extends Building {
//     constructor(notOnFireYet) {
//         super(notOnFireYet); 
//     }
// }

// const help = new Apt ({
//     place: "Is my building on Fire?",
// }); 

// console.log(help.place); 
// console.log(help.dial()); 



// ------------------------ Adding and Updating Obkect Properties

// const drink = {
//     id: "lksjfd",
//     name: "Coke",
//     price: {
//         sale: 99,
//         full: 129,
//     },
// }; 

// // drink.brand = "My Drink Co"; 
// // drink.name = "Pepsi";

// function proUpdate(prop, newShit) {
//     drink[prop] = newShit; 
// }


// proUpdate("brand", "My Dink Co"); 
// proUpdate("name", "Brown"); 

// console.log(drink); 


// ------------------- Shallow and deep Object Cloning

// const drink = {
//     id: "lksjfd",
//     name: "Coke",
//     price: {
//         sale: 99,
//         full: 129,
//     },
// };

// // --Shallow Copies
// // const drinkClone = Object.assign({}, drink); 
// // const drinkClone = {...drink}; 

// // --Deep Clone

// const drinkStingified = JSON.stringify(drink); // turn object into string
// const drinkClone = JSON.parse(drinkStingified); // convert sting back into string
// drinkClone.id = "zxc"; 
// drinkClone.price.sale = 79; 

// console.log(drink); 
// console.log(drinkClone); 



// ----------------- Merging Objects

// const drink = {
//     id: "lksjfd",
//     name: "Coke",

// };

// const price = {
//     sale: 99,
//     full: 129,
// }; 

// //const mergedDrink = Object.assign({}, drink, {price}); // new object // drink merged with scoped price
// const mergedDrink = {...drink, ...{price}}; // shorter way to merge 

// console.log(drink, price); 
// console.log(mergedDrink); 


// ---------------- Correctly Type-Checking Objects

// const drink = {
//     id: "lksjfd",
//     name: "Coke",
//     price: {
//         sale: 99,
//         full: 129,
//     },
// };

// console.log(drink); 

// console.log({} instanceof Array); // not accurate 

// console.log(Object.prototype.toString.call([])); // very accurate way to typecheck 

// function getType(obj) {
//     return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase(); // function that tells you what type. Slice cuts out the fluff text
// }

// console.log(getType("stuff")); 



// ------------------Imperative Object Iteration 
// No gurantee on the order in which items get looped

// const drink = {
//     id: "lksjfd",
//     name: "Coke",
//     price: {
//         sale: 99,
//         full: 129,
//     },
// };

// const drinkWithId = drink; 

// for (const prop in drink) {  //prop can be anyword but it for the property 
//     //if (typeof drink[prop] !== "string") // not as acturate
//     if (Object.prototype.toString.call(drink[prop]) === "[object Object]") {  //more accurate 
//         for (const key in drink[prop]) {
//             console.log(key); 
//         }
//     }
// }

// for (const prop in drink) { //prop can be anyword but it for the property 
//     const value = drink[prop]; // store drink[prop] in object makes this faster
//     if (Object.prototype.toString.call(value) === "[object Object]") { //more accurate 
//         for (const key in value) {
//             console.log(key);
//         }
//     }
// }


// ----------------- Declaritive Object Iteration 




// ---------------Array Loteral, function and constructor 

// const drinks = ["Pepsi", "coke", "Dr.B"]; 
// const drinkReference = drinks; 

// console.log(drinks);
// console.log(drinks === drinkReference); // Reference array is the same -  True
// console.log([] === []); // This equals false.  No two arrays are the same unless one is a refrence arrawy see line above.  

// console.log(new Array("z", "y", "z")); 
// console.log(Array("a", "b", "c"));


// -------------------- Properties, Index and Else 
// Items inside an array are called an element

// const drinks = ["Pepsi", "coke", "Dr.B"];

// console.log(drinks[0]);
// console.log(drinks[drinks.length - 1]); // access last element in array 

// drinks.length = 0; // clears out the array; 
// console.log(drinks); 

// ---------------------- Multi-dimensional Arrays  [[]]

// const drink = [["Pepsi", 99], ["coke", 12], ["Dr.B", 10000]];

// const drinkOne = drink[0]; 
// const drinkTwo = drink[1];
// const drinkThree = drink[2];

// console.log(drinkOne); 
// console.log(drinkTwo);
// console.log(drinkThree);
// console.log(`Drink: ${drinkOne[0]}, Price: ${drinkOne[1]}`);

// console.log(`Drink: ${drink[0][0]}, Price: ${drink[0][1]}`); // same as line above but does not require const drinkOne or anything like that


// ------------------------ Destructuring Arrays

const drinks = [
  ["Pepsi", 99],
  ["coke", 12],
  ["Dr.B", 10000]
];

const [what, [a, b], ok] = drinks; // you can call the elements anything you want. Only the order matters

console.log(what, a, b, ok);