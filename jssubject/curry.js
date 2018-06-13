// JavaScript专题之函数柯里化 #42
// https://github.com/mqyqingfeng/Blog/issues/42

var person = [{name: 'gao'}, {name: 'han'}];

var name = person.map(item => {
    return item.name;
});

// console.log(name);

// 第一版
// var curry = function (fn) {
//     var args = [].slice.call(arguments, 1);

//     return function () {
//         var newArgs = args.concat([].slice.call(arguments));

//         return fn.apply(this, newArgs);
//     };
// };

// function add (a, b) {
//     return a + b;
// }

// var addCurry = curry(add, 1, 2);
// console.log(addCurry());

// 第二版
function sub_curry (fn) {
    var args = [].slice.call(arguments, 1);

    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

function curry (fn, length) {
    
    length = length || fn.length;

    var slice = Array.prototype.slice;

    return function () {
        if (arguments.length < length) {
            var combined = [fn].concat(slice.call(arguments));
            return curry(sub_curry.apply(this, combined), length - arguments.length);
        } else {
            return fn.apply(this, arguments);
        }
    };
}

var fn = curry(function (a, b, c) {
    return [a, b, c];
});

// console.log(fn("a", "b", "c")); // ["a", "b", "c"]
// console.log(fn("a", "b")("c")); // ["a", "b", "c"]
// console.log(fn("a")("b")("c")); // ["a", "b", "c"]
// console.log(fn("a")("b", "c")); // ["a", "b", "c"]

// 简单版
// function sub_curry (fn) {
//     return function () {
//         return fn();
//     }
// }

// function curry (fn, length) {

//     length = length || 4;

//     return function () {
//         if (length > 1) {
//             return curry(sub_curry(fn), --length);
//         } else {
//             return fn();
//         }
//     }
// }

// var fn0 = function () {
//     console.log(1);
// }

// var fn1 = curry(fn0);

// fn1()()()();

/**
 *  fn1();
 * 
 *  curry(sub_curry(fn0))
 *  相当于
 *  curry(function () {
 *      return fn0();
 *  })
 * 
 *  fn1()()
 *  返回
 *  curry(sub_curry(function () {
 *      return fn0();
 *  }));
 *  相当于
 *  curry(function () {
 *      return (function () {
 *          return fn0();
 *      })()
 *  })
 *  相当于
 *  curry(function () {
 *      return fn0();
 *  });
 * 
 *  fn1()()();
 *  返回
 *  curry(function () {
 *      return fn0();
 *  })
 *  相当于
 *  curry(function () {
 *      return (function () {
 *          return (function () {
 *              return fn0();
 *          })()
 *      })()
 *  });
*/

// 易懂的实现

function curry (fn, args) {
    var length = fn.length;

    args = args || [];

    return function () {
        var _args = args.slice(0),
                    arg,
                    i;
        
        for (i = 0; i < arguments.length; i++) {

            arg = arguments[i];
            _args.push(arg);
        }

        if (_args.length < length) {
            return curry.call(this, fn, _args);
        } else {
            return fn.apply(this, _args);
        }
    };
}

// 第三版 加入形参
function curry (fn, args, holes) {
    length = fn.length;

    args = args || [];

    holes = holes || [];

    return function () {
        var 
            _args = args.slice(0),
            _holes = holes.slice(0),
            argsLen = args.length,
            holesLen = holes.length,
            arg,
            i,
            index = 0;

        for (i = 0; i < arguments.length; i++) {

            arg = arguments[i];
            //处理 fn(1, _, _, 4)(_, 3) 这种情况
            if (arg === _ && holesLen) {
                index++;
                if (index > holesLen) {
                    _args.push(arg);
                    _holes.push(argsLen - 1 + index - holesLen);
                }
            } else if (arg === _) {
                // 处理fn(1)(_)
                _args.push(arg);
                _holes.push(argsLen + i);
            } else if (holesLen) {
                // 处理 fn(_, 2)(1)

                if (index >= holesLen) {
                    // fn(_, 2)(_, 3)
                    _args.push(arg);
                } else {
                    // fn(_, 2)(1) 用1替代占位符
                    _args.splice(_holes[index], 1, arg);
                    _holes.splice(index, 1);
                }
            } else {
                _args.push(arg);
            }
        }
    }
}
