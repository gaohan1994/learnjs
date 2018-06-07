// javaScript深入之从ECMAScript规范解读this #7
// https://github.com/mqyqingfeng/Blog/issues/7

// function foo () {
//     console.log(this);
// }

// foo();

// function foo () {
//     return function () {
//         console.log(this);
//     }
// }

// foo()();

// var foo = {
//     bar: function () {
//         return this;
//     }
// }

// foo.bar();

// var value = 1;

// var foo = {
    
//     value: 2,

//     bar: function () {
//         return this.value
//     }
// }

/*
var Reference = {
    base    : foo,
    name    : 'bar',
    strict  : false
}
*/
// console.log(foo.bar());

// console.log((foo.bar)());

// /*

// */
// console.log((foo.bar = foo.bar)()); // 1

// console.log((false || foo.bar)()); // 1

// console.log((foo.bar, foo.bar)()); // 1

// function foo () {
//     console.log(this);
// }

// foo();

// function Foo () {
//     getName = function () {
//         console.log(1);
//     };

//     return this;
// }

// function getName () {
//     console.log(5);
// }

// Foo().getName();