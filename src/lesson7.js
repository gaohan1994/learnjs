// javaScript深入之执行上下文 #8
// https://github.com/mqyqingfeng/Blog/issues/8

var scope = 'global scope';

/*

1
ECSTACK = [
    globalContext
]

2
globalContext = {
    VO: [global],
    Scope: [globalContext.VO],
    this: globalContext.VO
}

checkscope.[[scope]] = [
    globalContext.VO
]

3
ECSTACK = [
    checkscopeContext,
    globalContext
];

4
checkscopeContext = {
    Scope: checkscope.[[scope]]
}

checkscopeContext = {
    Scope: checkscope.[[scope]],
    AO: {
        arguments: {
            length: 0
        },
    }
}

checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    Scope: [AO, checkscope.[[scope]]]
}

checkscopeContext = {
    AO: {
        arugments: {
            length: 0
        },
        scope: undefined,
        f: reference to function f () {}
    },
    Scope: [AO, globalContext.VO],
    this.undefined
}

5
ECSTACK = [
    fContext,
    checkscopeContext,
    globalContext
]

6
fContext = {
    Scope: fContext.[[scope]]
}

fContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    Scope: fContext.[[scope]]
}

fContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    Scope: [AO, fContext.[[scope]]]
}

7
f执行

8 
ECSTACK.pop();
ECSTACK = [
    checkscopeContext,
    globalContext
]

9
checkscope执行

10
ECSTACK.pop();
ECSTACK = [
    globalContext
]

*/
function checkscope () {
    var scope = 'local scope';

    function f () {
        return scope;
    }

    return f();
}
checkscope();

/* 

1
ECSTACK = [
    globalContext
];

2.
globalContext = {
    VO: [global],
    Scope: [globalContext.VO],
    this: globalContext.VO
}

checkscope.[[scope]] = [
    globalContext.VO
];

3.
ECSTACK = [
    checkscopeContext,
    globalContext
];

4
checkscopeContext = {
    Scope: checkscope.[[scope]]
}

checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    Scope: checkscope.[[scope]],
    this: undefined
}

checkscopeContext = {
    AO: {
        arguments: {
            length: 0
        }
    },
    Scope: [AO, checkscope.[[scope]]],
    this: undefined,
}

*/
function checkscope () {
    var scope = 'local scope';

    function f () {
        return scope;
    }

    return f;
}
checkscope()();
