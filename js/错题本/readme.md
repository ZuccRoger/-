# 错题
 ---
1.   
```
    console.log(1);
    new Promise(function (resolve, reject) {
        reject();
        resolve();
    }).then(function () {
        console.log(2);
    }, function () {
        console.log(3);
    });
    console.log(4);
```
>   Promise对象只有三种结果：Pending(进行中)、Fulfilled(已成功)、Rejected(已失败)。对象的状态变化只有两种：从Pending —— Fulfilled(Resolved)；从Pending —— Rejected。
构造函数Promise接受一个函数作为参数，并且该函数有两个参数resolve 和 reject。resolve是异步操作成功时调用，reject是异步操作失败时调用。Promise实例对象的then方法中的两个函数分别指定Resolved状态（成功）和Rejected状态（失败）的回调函数。

>   回到本题：在Promise构造函数中reject()比resolve()先执行，会执行Rejected状态的回调，即console.log(3)，打印3。前面说了Promise对象状态改变只有两种情况，执行reject()后，Promise对象状态变为了Rejected。所以后面的resolve()不会执行。最终结果为：1、4、3。

---
2.  
```
const a = {
valueOf() {
return 'valueOf'
},
toString() {
return 'toString'
},
get() {
return 'get'
}
}
alert(a)
```
>   数值运算优先valueOf，字符串优先toString
---
3.
```
function fun () {
    return () => {
        return () => {
            return () => {
            console.log(this.name)
                    }
                }
        }
}
var f = fun.call({name: 'foo'})
var t1 = f.call({name: 'bar'})()()
var t2 = f().call({name: 'baz'})()
var t3 = f()().call({name: 'qux'})
```
>   箭头函数没有自己的this也并不能使用call,apply以及bind去绑定this，会选择去继承父级作用域的this，所以后面几次的call实际上是失败的，所以箭头函数层层向上寻找name，只会在最外层的fun函数作用域中找到this指向{name: 'foo'}对象的name属性。假设此处将fun函数改成箭头函数的声明方式，那么返回的值将会是undefined.
---
4.  什么时候在堆什么时候在栈

---
5.  EventLoop
任务队列分为 微任务 和 宏任务
宏任务 包括 SetTimeout SetInterval SetImmediate IO
微任务  Promise Async/Await

---
6.  new一个对象的过程

>   1. 创建空对象{}

    2. 使用新对象，调用函数，函数中的this被指向新实例对象：

            {}.构造函数();         

    3. 设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象

    4. 将初始化完毕的新对象地址，保存到等号左边的变量中

---
7.  