1.  浏览器的宽和高
    *   innerWith 和 
2.  array的方法 & array原型对象上的方法 
    *   length forEach map reduce include index indexof pop push shift unshift
    *   自己没有提到的 from of
3.  箭头函数 
    *   没有argument对象,并且也没有this.这也导致了无法成为构造函数的原因
    *   函数体内的对象就是定义时所在的对象、而不是使用时所在的对象
        function foo() {
            setTimeout(
                () => {
                    console.log(this.id)
                }
                , 100)
        }
        var id = 21
        foo.call({ id: 42 })
    

4.  this  指向 什么时候指向 上下文 什么时候指向 window
    *   全局函数中 this指向window
    *   而当函数作为某个方法调用的时候，则this=那个对象
    *   匿名函数作用域具有全局性，this通常指向window


5.  闭包
6.  linux 操作指令 查询路径 杀死进程 查询端口
    当前路径 pwd
    查询端口 netstat  -anp  |grep   端口号
7.  doucment. 常用方法 操作dom元素的方法 
8.  浏览器存储 sessionStorage 和 LocalStorage
9.  js 基本变量 
10. let var的区别 const
11. 遍历对象方法 for in  object.keys object.values 第三种：使用Object.getOwnPropertyNames(obj)
12. antDesignPro 隐4藏菜单栏某一个 但是路由能访问怎么办
    * hideInMenu: true,  // 隐藏该条，或隐藏该组
13. 除了 alert 还有什么可以弹窗
    * dialog 标签 
    * window.alert(), window.confirm(),window.prompt()
14. 如何获取屏幕分辨率
15. 点击事件 比如说 e.stoppop 从而说到 事件冒泡 和 事件捕捉
    *   js冒泡和捕获是事件的两种行为，使用event.stopPropagation()起到阻止捕获和冒泡阶段中当前事件的进一步传播。使用event.preventDefault()可以取消默认事件。
16. 异常捕捉问题
17. call apply bind的区别