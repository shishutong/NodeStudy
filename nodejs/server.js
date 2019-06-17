/*
 * @Author: Gao Chengdong 
 * @Date: 2019-06-17 10:34:11 
 * @Last Modified by:   Gao Chengdong 
 * @Last Modified time: 2019-06-17 10:34:11 
 */

var http = require("http")

http.createServer(function(requset, response){
    // send Http head
    // Http 状态值：200：ok
    //内容类型： text/plain
    response.writeHead(200, {'Context-Type' : 'text/plain'});

    // 发送响应数据 “Hello world”
    response.end('Hello World\n');
}).listen(8888);

// print msg
console.log('Server running at http://127.0.0.1:8888/')