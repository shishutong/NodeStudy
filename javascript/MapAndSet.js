/* 
* @Author: Gao Chengdong  
* @Date: 2019-06-17 16:49:14  
 * @Last Modified by: Gao Chengdong
 * @Last Modified time: 2019-06-17 16:55:18
*/

// Map 实例
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

m.set('Adam', 89);
console.log(m);

//Set 实例
//重复元素在Set中自动被过滤：
var s = new Set([1, 2, 3, 3, '3']);
console.log(s); // Set {1, 2, 3, "3"}
s.add(8);
console.log(s);
s.add(8);
console.log(s);
s.delete(3);
console.log(s);