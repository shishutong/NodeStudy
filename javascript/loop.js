/*
 * @Author: Gao Chengdong 
 * @Date: 2019-06-17 15:45:04 
 * @Last Modified by: Gao Chengdong
 * @Last Modified time: 2019-06-17 16:28:38
 */

var x = 0;
for(var i=0; i<=10000; i++){
    x = x+i;
}
console.log(x);


var o = {
    name : "jake",
    age : 20,
    city : "beijing"
}
for (key in o){
    console.log(key);
}

// js迭代array,这和python有很大的不同，需要注意。
var lst = ['one','two','three','four'];
for( i in lst){
    console.log(i);
    console.log(lst[i]);
}

//while 循环
var sum = 0;
var n = 99;
while(n>0){
    sum = sum + n;
    n = n - 2;
}
console.log(sum);

//do ....while...
//用do { ... } while()循环要小心，
//循环体会至少执行1次，而for和while循环则可能一次都不执行
var n = 0;
do {
    n = n + 1;
} while (n < 100);
console.log(n) // 100


