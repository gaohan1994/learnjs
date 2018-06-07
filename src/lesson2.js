// JavaScript深入之词法作用域和动态作用域

var scope = 'global scope';

// function checksscope () {
//     var scope = 'local scope';

//     function f () {
//         return scope;
//     }

//     return f();
// }

function checksscope () {
    var scope = 'local scope';

    function f () {
        return scope;
    }

    return f;
}

var result = checksscope()();

console.log(result);