// JavaScript深入之执行上下文栈 #4

// https://github.com/mqyqingfeng/Blog/issues/4

// 顺序执行？

// var foo = function () {
//     console.log(' foo1 ');
// }

// foo();

// var foo = function () {
//     console.log(' foo2 ');
// }

// foo();

// foo1 foo2


// function foo () {
//     console.log(' foo1 ');
// }

// foo();

// function foo () {
//     console.log(' foo2 ');
// }

// foo();

// foo2 foo2

/*
刷过面试题的都知道这是因为 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。
*/

// function func3 () {
//     console.log('func3');
// }

// function func2 () {
//     func3();
// }

// function func1 () {
//     func2();
// }

// func1();

/*

fun1()
ECSTACK.push(func1, functionContext);

fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECSTACK.push(func2, functionContext);

擦，fun2还调用了fun3！
ECSTACK.push(func3, functionContext);

ECSTACK.pop();

ECSTACK.pop();

ECSTACK.pop();

*/

var scope = 'global scope';

// function checkscope () {
//     var scope = 'local scope';

//     function f () {
//         return scope;
//     }

//     return f();
// }

// checkscope();

/*

ECSTACK.push(checkscope, functionContext);

ECSTACK.push(f, functionContext);

ECSTACK.pop();

ECSTACK.pop();
*/

function checkscope () {
    var scope = 'local scope';

    function f () {
        return scope;
    }

    return f;
}

checkscope()(); 

/*
ECSTACK.push(checkscope, functionContext);

ECSTACK.pop();

ECSTACK.push(f, functionContext);

ECSTACK.pop();
*/