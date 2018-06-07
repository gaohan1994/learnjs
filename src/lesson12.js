// JavaScript深入之类数组对象与arguments #14
// https://github.com/mqyqingfeng/Blog/issues/14

var array = ['name', 'age', 'sex'];

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}

// console.log(array[0]);
// console.log(arrayLike[0])
// array[0] = 'new name';
// arrayLike[0] = 'new name';

// console.log(array.length);
// console.log(arrayLike.length);

// arrayLike.push('4');

Array.prototype.join.call(arrayLike, '&');

Array.prototype.slice.call(arrayLike, 0);

Array.prototype.map.call(arrayLike, function (item) {
    return item.toUpperCase();
});
