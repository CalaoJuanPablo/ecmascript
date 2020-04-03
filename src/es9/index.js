// rest operator
const obj = {
	name: "Juan",
	age: 26,
	country: "CO"
};

let { name, ...rest } = obj;
console.log(name, rest);

// spread operator as concat
const obj1 = {
	name: "Juan"
};
const obj2 = {
	age: 26
};
const obj3 = {
	country: "CO"
};

const newObj = {
	...obj1,
	...obj2,
	...obj3
};
console.log(newObj);

// Promise.finally
const helloWorld = () =>
	new Promise((res, rej) => {
		if (true) {
			setTimeout(() => res("Hello world!!!"), 3000);
		} else {
			rej(new Error("Test Error"));
		}
	});

helloWorld()
	.then(response => console.log(response))
	.catch(err => console.log(err))
	.finally(() => console.log("Finalizó"));

// RegEx
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
