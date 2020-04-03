// Objects methods
const data = {
	frontend: "Juan",
	backend: "Isabel",
	design: "Ana"
};

// Object entries
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object values
const values = Object.values(data);
console.log(values);
console.log(values.length);

// string padStart padEnd NOT MUTABLE
const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " ------"));

// async await
const helloWorld = () =>
	new Promise((resolve, reject) => {
		if (true) {
			setTimeout(() => resolve("Hello world!!"), 3000);
		} else {
			reject(new Error("Test error!!!!"));
		}
	});

helloAsync = async () => {
	try {
		const hello = await helloWorld();
		console.log(hello);
	} catch (err) {
		console.error(err);
	}
};

helloAsync();
