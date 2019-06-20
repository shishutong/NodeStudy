/*
 * @Description: In User Settings Edit
 * @Author: Gao Chengdong
 * @Date: 2019-06-20 00:36:00
 * @LastEditTime: 2019-06-20 16:09:47
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
// 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性：
var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'
// 因此，直接访问全局变量course和访问window.course是完全一样的。

// 你可能猜到了，由于函数定义有两种方式，以变量方式var foo = function () {}定义的函数实际上也是一个全局变量，
// 因此，顶层函数的定义也被视为一个全局变量，并绑定到window对象：
function foo() {
    alert('foo');
}
foo(); // 直接调用foo()
window.foo(); // 通过window.foo()调用


// 进一步大胆地猜测，我们每次直接调用的alert()函数其实也是window的一个变量：
window.alert('调用window.alert()');
// 把alert保存到另一个变量:
var old_alert = window.alert;
// 给alert赋一个新函数:
window.alert = function () {}
alert('无法用alert()显示了!');
// 恢复alert:
window.alert = old_alert;
alert('又可以用alert()了!');
// 这说明JavaScript实际上只有一个全局作用域。
// 任何变量（函数也视为变量），如果没有在当前函数作用域中找到，就会继续往上查找，
// 最后如果在全局作用域中也没有找到，则报ReferenceError错误。

// 名字空间



