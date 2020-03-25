// this作用域的问题
// 全局函数中 this= window
// 而当函数被作为某个对象的方法的时候，this=那个对象

// call apply bind
// call放的是一个一个的参数 apply放的是数组 bind返回的是函数 但是放到和call一样