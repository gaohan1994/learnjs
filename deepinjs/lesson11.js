// JavaScript深入之new的模拟实现 #13
// https://github.com/mqyqingfeng/Blog/issues/13

function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

// var person = new Otaku('Gaohan', '18');

// 模拟new 第一版

function objectFactory () {

    var obj = new Object();

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    Constructor.apply(obj, arguments);

    return obj;
}

var person = objectFactory(Otaku, 'gaohan', 18);

console.log(person.name);
console.log(person.habit);
console.log(person.strength);

person.sayYourName();