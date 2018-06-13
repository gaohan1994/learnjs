// JavaScript深入之变量对象 #5
// https://github.com/mqyqingfeng/Blog/issues/5

// console.log(this);

// console.log(this instanceof Object);

// var a = 1;

// console.log(this.a);

// console.log(window.a);

// function foo (a) {
//     var b = 2;

//     function c () {}

//     var d = function () {};

//     b = 3;
// }

// foo(1);

/*
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c () {},
    d: undefined
}

执行 => 

AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c () {},
    d: reference to FunctionExpression "d"
}
*/

// function foo () {
//     console.log(a);
//     a = 1;
// }

// foo ();

/*
因为a并没有用var 声明所以不会被存放在AO中
AO = {
    arguments: {
        length: 0
    }
}
没有a的值所以去全局寻找，全局也没有所以报错
*/

// function bar () {
//     a = 1;
//     console.log(a);
// }

// bar();

console.log(foo);

function foo () {
    console.log('foo');
}

var foo = 1;