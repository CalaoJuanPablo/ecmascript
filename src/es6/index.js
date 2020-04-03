// Default params

// Before ES6
function newFunction(name, age, country) {
	var name = name || "juan";
	var age = age || 26;
	var country = country || "CO";

	console.log(name, age, country);
}

// ES6
function newFunction2(name = "Juan", age = 26, country = "CO") {
	console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", 23, "CO");

// Template Literals

// Before ES6
var hello = "Hello";
var world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multiline

// Before ES6
var lorem = "primera frase epica\n" + "segunda frase epica";
console.log(lorem);

// ES6
let lorem2 = `primera otra frase epica
segunda otra frase epica`;
console.log(lorem2);

// Destructuring

// Before ES6
var person = {
	name: "Juan",
	age: 26,
	country: "CO"
};
console.log(person.name, person.age, person.country);

// ES6
let { name, age, country } = person;
console.log(name, age, country);

// Spread operator

// ES6
let team1 = ["Juan", "Oscar", "Julian"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

// var, let const

// ES6
{
	var globalVar = "Global VAR";
}

{
	let globalLet = "Global Let";
	console.log(globalLet); // 'Global Let'
}

console.log(globalVar);
console.log(globalLet); // 'Reference Error'

const a = "b";
a = "a"; // Type Error

// Object params

let name = "Juan";
let age = 26;

// Before ES6
var obj = { name: name, age: age };
console.log(obj);

// ES6
let obj2 = { name, age };
console.log(obj2);

// Arrow function

const names = [
	{ name: "Juan", age: 26 },
	{ name: "Yesica", age: 27 }
];

// Before ES6
let listOfNames = names.map(function(el) {
	console.log(name);
});

// ES6
let listOfNames2 = names.map(el => console.log(el.name));

// Promises

// ES6
const helloPromise = () =>
	new Promise((resolve, reject) => {
		if (false) {
			resolve("Hey!");
		} else {
			reject("Ups!");
		}
	});

helloPromise()
	.then(response => console.log(response))
	.catch(err => console.log(err));

// Class

// ES6
class Calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}

	sum(valueA, valueB) {
		this.valueA = valueA;
		this.valueB = valueB;
		return this.valueA + this.valueB;
	}
}

const calc = new Calculator();

console.log(calc.sum(2, 2));

// Modules
import hello from "./modules";
hello();

// Generators
function* helloWorld() {
	if (true) {
		yield "Hello, ";
	}
	if (true) {
		yield "World, ";
	}
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
