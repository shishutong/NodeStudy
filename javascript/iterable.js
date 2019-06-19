/*
 * @Description: In User Settings Edit
 * @Author: Gao Chengdong
 * @Date: 2019-06-18 11:00:38
 * @LastEditTime: 2019-06-19 15:13:56
 * @LastEditors: Please set LastEditors
 */

var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'],[2, 'y'],[3,'z']]);
for(var x of a){
    console.log(x);
}
for(var y of s){
    console.log(y);
}
for(var z of m){
    console.log(z);
}


/**
 * 你可能会有疑问，for ... of循环和for ... in循环有何区别？
 * for ... in循环由于历史遗留问题，它遍历的实际上是对象的属性名称。
 * 一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。
 */
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}

/**
 * 然而，更好的方式是直接使用iterable内置的forEach方法，
 * 它接收一个函数，每次迭代就自动回调该函数。
 * 以Array为例：
 */

// array
var a = ['A', 'B', 'C'];
a.forEach(function(element, index, array){
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

//Set
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(element);
});

// Map
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    console.log(value);
});