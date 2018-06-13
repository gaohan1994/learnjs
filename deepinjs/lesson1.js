//JavaScript深入之从原型到原型链

// function Person () {

// }

// var person = new Person();
// person.name = 'Kevin';
// console.log(person.name);

//prototype

// function Person1 () {

// }

// Person1.prototype.name = 'Gaohan';
// var person11 = new Person1();
// var person12 = new Person1();

// console.log(person11.name);
// console.log(person12.name);

// prototype _proto_ constructor 之间的关系

function Person () {}

var person = new Person();

console.log(person.__proto__ === Person.prototype); //true
console.log(Person.prototype.constructor === Person);//true
console.log(Object.getPrototypeOf(person) === Person.prototype);
console.log(person.constructor === Person.prototype.constructor);

/*
Person: 构造函数
Person.prototype: 原型
Person.prototype.contructor: 指向构造函数

person: 实例
person.__proto__: 指向原型

实例的 __proto__ 指向实例的原型
每个原型的 constructor 指向关联的构造函数
*/

// console.log(Object.prototype.__proto__ === null);
// console.log(Object.prototype.constructor === Object);