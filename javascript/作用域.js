/*
 * @Description: In User Settings Edit
 * @Author: Gao Chengdong
 * @Date: 2019-06-20 00:36:00
 * @LastEditTime: 2019-06-20 00:59:21
 * @LastEditors: Please set LastEditors
 */

'use strict'
//在JavaScript中，用var申明的变量实际上是有作用域的。
//如果一个变量在函数体内部申明，则该变量的作用域为整个函数体，在函数体外不可引用该变量：
function foo() {
    var x = 1;
    x = x + 1;
};
x = x + 2;    // ReferenceError! 无法在函数体外引用变量x

// 由于JavaScript的函数可以嵌套，此时，内部函数可以访问外部函数定义的变量，反过来则不行：
function foo() {
    var x = 1;
    function bar() {
        var y = x + 1; // bar可以访问foo的变量x!
    }
    var z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
}

// 变量提升
// JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部：
function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

foo();
//虽然是strict模式，但语句var x = 'Hello, ' + y;并不报错，原因是变量y在稍后申明了。
//但是console.log显示Hello, undefined，说明变量y的值为undefined。这正是因为JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。
//对于上述foo()函数，JavaScript引擎看到的代码相当于：
function foo() {
    var y; // 提升变量y的申明，此时y为undefined
    var x = 'Hello, ' + y;
    console.log(x);
    y = 'Bob';
}


// 全局作用域
//







