// function getAge() {
//   age = 21;
//   console.log(age);
// }
// getAge();

// const sum = eval("10*2+4");
// console.log(sum);

// const obj = {
//   hello: "a",
//   2: "b",
//   3: "c",
// };
// console.log(obj.hasOwnProperty("hello"));
// console.log(obj.hasOwnProperty(2));

// const obj = {
//   a: "one",
//   b: "two",
//   a: "repeat",
// };
// console.log(obj);
// reassigned but doesnt change the position

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// const person = {
//   name: "Lara",
//   age: 21,
// };
// function sayHi(age) {
//   return `${this.name} is ${this.age}`;
// }
// console.log(sayHi.call(person, 1));
// console.log(sayHi.bind(person, 1)());

// function sayHi() {
//   return (() => 2)();
// }

// console.log(typeof sayHi());

// function sayHi() {
//   return () => 0;
// }
// console.log(typeof sayHi());

// let a = 1;
// console.log(typeof typeof a);

// const number = [1, 2, 3];
// number[9] = "string";
// console.log(number);

// const number = [1, 2, 3];
// number[3] = number;
// console.log(number);

// console.log(!!null);
// console.log(!!"adad");
// console.log(!!1);

// console.warn(
//   setInterval(function () {
//     console.log("h1"), 1000;
//   })
// );s

// console.log([...[1, 23, 5454]]);

// let data = 3 + 4 + "23";
// console.log(typeof data);

// console.log(typeof 3 + 4);

// console.log(typeof (3 + 4 + +"5"));

// console.log([] === []);

// let data = [1, 2, 3].map((num) => {
//   console.log(typeof num);
//   if (typeof num === Number) return;
//   return num * 2;
// });
// console.warn(data);

// function getInfo(member) {
//   return (member.position = "dev");
// }
// const person = { name: "dan", age: 27 };
// getInfo(person);

// console.log(person);

// function Car() {
//   this.make = "drive";
//   return { has: "red color" };
// }
// const myCar = new Car();
// console.log(myCar);

// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x);

// (() => {
//   let x = (y = 11);
// })();

// (() => {
//   let x = (y = 10);
// })();

// console.log(y);
// let x = 100;
// (() => {
//   let x = (y = 11);
// })();
// console.log(y);

// console.warn(true + +"10");
