// JavaScript深入之闭包 #9
// https://github.com/mqyqingfeng/Blog/issues/9

// var a = 1;

// function foo () {
//     console.log(a);
// }

// foo();


/*
globalscope = 
*/
var scope = 'global scope';

// function checkscope () {
//     var scope = 'local scope';

//     function f () {
//         return scope;
//     }

//     return f;
// }

// var foo = checkscope();

// foo();

// var data = [];

// for (var i = 0; i < 3; i++) {

//     data[i] = function () {
//         console.log(i);
//     };
// }

// data[0]();
// data[1]();
// data[2]();

/*
 *  执行data[0]()之前 全局上下文为
 *   globalContext = {
 *      VO: {
 *          data: [...],
 *          i: 3
 *      }        
 *  }
 * 
 *  执行data[0]时
 *  data[0]Context = {
 *      Scope: [AO, globalContext.VO]
 *  }
 * 
 *  data[0]Context 中并没有i值所以向globalContext中寻找 i = 3所以打印结果为3
 * 
 *  same as data[1] and data[2]
 */

var data = [];

for (var i = 0; i < 3; i++) {
    data[i] = (function (i) {
        return function () {
            console.log(i);
        }
    })(i)
}

data[0]();
data[1]();
data[2]();

/**
 * 当执行到data[0]() 之前
 * globalContext = {
 *      VO: {
 *          data: [...],
 *          i: 3
 *      }    
 * }
 * 
 * 执行到data[0]()时
 * 
 * data[0]Context = {
 *      Scope: [AO, 匿名函数Context.AO, globalContext.VO]
 * }
 * 
 * 匿名函数Context = {
 *      AO: {
 *          arguments: {
 *              0: 0,
 *              length: 1
 *          },
 *          i: 0
 *      }
 * }
 * 
 * **/