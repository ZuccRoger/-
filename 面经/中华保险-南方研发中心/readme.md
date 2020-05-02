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


---
####    复试

1. 浏览器用了哪些
2. == 和 ===的区别
    >   1.对于string,number等基础类型,==和===是有区别的 不同类型间比较,==之比较“转化成同一类型后的值”看“值”是否相等,===如果类型不同,其结果就是不等 同类型比较,直接进行“值”...
2.对于Array,Object等高级类型,==和===是没有区别的
3.基础类型与高级类型,==和===是有区别的 对于==,将高级转化为基础类型,进行“值”比较,因为类型不同,===结果为false
3. webpack 热更新了解过吗
    >   HMR即Hot Module Replacement
    修改了代码之后webpack会立马生成新的模块发送给浏览器，浏览器把老的模块替换成新的模块，做到局部刷新而非整体刷新
4. sessin cookie 和 localStorage的区别
5. js新建一个对象
    *   Obejct构造函数式
    *   对象字面量式
    *   工厂模式
    *   安全工厂模式
    *   构造函数模式
    *   原型模式
    *   混合构造函数和原型模式
    *   混合构造函数和原型模式
    *   动态原型模式
    *   寄生构造函数模式
    *   稳妥构造函数模式
6. window对象和document对象
7. React的生命周期
    *   详细问了 componentDidUpdate
    >   比较适合在这里 添加订阅 如果添加了订阅之后 需要在 componentWillUnmount 里面取消订阅
    *   可以直接在这里调用setState，将要触发额外的渲染，在屏幕更新之前
8. 表连接 考了left join
9.  如何判断一个页面是 React还是html的
10. 控制台 source 看源代码 怎么样才能看到 
     >  我的回答是 babel 打包 转译之后的
     >  config/index.js 里，将productionSourceMap改成false就可以了

---

#### 三面
1.  自我介绍
2.  问了自己的一些喜好
3.  问了自己喜欢金融还是IT更多
4.  介绍了后面的一些流程 说会有副总面试 HR面试 体检入职全部走完要4月中下旬
5.  雅思方面
6.  自己认为的公司文化 国内有类似的公司吗
7.  自己的发展规划
8.  总而言之是很愉快的一次面试 个人认为面试官很不错是个很好的 渴望入职