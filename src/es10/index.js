// Array.flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

// Array.flatMap
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

// trim string
let hello = "      hello world";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello world      ";
console.log(hello);
console.log(hello.trimEnd());

// catched error

try {
} catch {
	error;
}

// from entries
let entries = [
	["name", "Juan"],
	["age", 26]
];
const toObject = Object.fromEntries(entries);
console.log(toObject);

// Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
