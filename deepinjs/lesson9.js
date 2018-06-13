// JavaScript深入之call和apply的模拟实现 #11
// https://github.com/mqyqingfeng/Blog/issues/11

// call
// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

// var foo = {
//     value: 1
// };

// function bar () {
//     console.log(this.value);
// }

// bar.call(foo);

/**
 * tips
 * 1. call 改变this的指向，指向到foo
 * 2. bar 函数执行了
 * **/

 /**
  * 模拟实现
  * **/

//   var foo = {
//       value: 1,
//       bar: function () {
//           console.log(this.value);
//       }
//   };

//   foo.bar();

// 模拟第一版
// Function.prototype.call2 = function (context) {
//     // 获取调用call的函数
//     context.fn = this;
//     context.fn();
//     delete context.fn;
// }

// var foo = {
//     value: 1
// };

// function bar () {
//     console.log(this.value);
// }

// bar.call2(foo);

// 模拟第二步，传入参数

// Function.prototype.call2 = function (context) {
//     context.fn = this;

//     var args = [];

//     for (var i = 1, len = arguments.length; i < len; i++) {
//         args.push('arguments[' + i + ']');
//     }
    
//     eval('context.fn(' + args + ')');

//     delete context.fn;
// }

// var foo = {
//     value: 1
// }

// function bar (name, age) {
//     console.log(name);
//     console.log(age);
//     console.log(this.value);
// }

// bar.call2(foo, 'gaohan', 18);

/**
 * 模拟第三版 
 * this参数可以传null 当为null时this指向window
 * 函数可以有返回值
 * **/

Function.prototype.call2 = function (context) {
    var context = context || global;
    context.fn = this;

    var args = [];

    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    
    var result = eval('context.fn(' + args + ')');

    delete context.fn;
    return result;
}

var value = 2;

var obj = {
    value: 1
};

function bar (name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    };
}

bar.call2(null);

// console.log(bar.call2(obj, 'gaohan', 18));

Function.prototype.apply2 = function (context, arr) {
    var context = context || global;
    context.fn = this;
    var result;

    if (!arr) {
        result = context.fn();
    } else {
        var args = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arguments[' + i + ']');
        }

        result = eval('context.fn(' + args + ')');
    }

    delete context.fn;
    return result;
}