3.21涂鸦智能面试复盘 很遗憾当场就被通知不符合
1.  
var b=10
function a(){
    console.log(b)
}
var a=function(){
    b=20
    console.log(b)
}
输出这个b

2.  浏览器缓存
3.  浏览器安全 xss csrf
4.  浏览器 v8引擎 sort 是怎么排序的
5.  set map weakmap 以及map和object的区别
6.  http加密过程 SSL 非对称加密 和 对称加密
7.  冒泡算法和快速排序算法
8.  connect的实现机制 React-redux 
9.  react hook到底是什么
10. 性能优化 除了React给你带来的优化之外 ，可以用CDN
11. setstate 同步和异步过程
12. 浏览器加载
    ｜  加载资源的形式
        1.输入url（或跳转页面）加载html，比如输入网址跳转至页面
        2.加载html的静态资源，比如<script>、<img>、<link>等加载资源

    ｜  加载一个资源的过程
        1.浏览器根据DNS服务器得到域名的IP地址
        2.向这个IP的机器发送http(s)请求
        3.服务器收到，处理并返回http请求，比如返回图片或html代码等
        4.浏览器得到返回内容

    ｜  浏览器渲染页面的过程
        1.根据HTML结构生产DOM Tree（只是一个DOM结构，没有样式）
        2.根据CSS生产CSSOM(CSS Object model)（只是一个样式结构）
        3.将DOM和CSSOM整合成RenderTree(渲染树)
        4.根据RenderTree开始渲染和展示
        5.遇到<script>时，会执行并阻塞渲染(遇到JS会阻塞渲染，因为JS有权利改变DOM结构，所以得规定先后顺序)
    ｜  https://blog.csdn.net/qq_39795538/article/details/82764250

13. http 1.1 和 2.0的区别
     主要是因为1.1比较慢
     二进制协议 不再是纯文本 废弃1.1的管道 专用算法压缩头部减少数据的传输
     允许服务器主动向客户端发送数据 要求了加密通信
     http 是 超文本传输协议
     CDN content delivery network

    设计上导致的安全问题
        1. 强制浏览

14. 考的知识盲区 之 高性能网站编程
    浏览器缓存
        Memory cache
15. map 和 object 的区别
    *   在 Object 中， key 必须是简单数据类型（整数，字符串或者是 symbol），而在 Map 中则可以是 JavaScript 支持的所有数据类型，也就是说可以用一个 Object 来当做一个Map元素的 key。