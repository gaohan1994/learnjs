// JavaScript深入之bind的模拟实现 #12
// https://github.com/mqyqingfeng/Blog/issues/12

// var foo = {
//     value: 1
// };

// function bar () {
//     console.log(this.value);
// }

// var bindFoo = bar.bind(foo);

// bindFoo();

// Function.prototype.bind2 = function (context) {
//     var self = this;
//     return function () {
//         return self.apply(context);
//     }
// }

// 第二版 模拟传参
Function.prototype.bind2 = function (context) {
    var self = this;

    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }
}

