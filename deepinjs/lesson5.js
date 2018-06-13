// JavaScript深入之作用域链 #6
// https://github.com/mqyqingfeng/Blog/issues/6

// function foo () {
//     function bar () {

//     }
// }

/*
foo.[[scope]] = [
    globalContext.VO
]

bar.[[scope]] = [
    fooContext.AO,
    globalContext.VO
]
*/

var scope = 'global scope';

function checkscope () {
    var scope2 = 'local scope';
    return scope2;
}

checkscope();

/*
checkscope创建
checkscope.[[scope]] = [
    globalContext.VO
];

checkscope执行
ESCTACK = [
    checkscopeContext,
    globalContext
]

checkscopeContext = {
    Scope: checkscope.[[scope]]
}

2
checkscopeContext = {
    AO: {
        arugments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: checkscope.[[scope]]
}

3
checkscopeContext = {
    AO: {
        arugments: {
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO, checkscope.[[scope]]]
}

4
checkscopeContext = {
    AO: {
        arugments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO, checkscope.[[scope]]]
}

5
ECSTACK = [
    globalContext
];

*/