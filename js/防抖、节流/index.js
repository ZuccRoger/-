//  在进行窗口的resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。
//  此时我们可以采用debounce（防抖）和throttle（节流）的方式来减少调用频率，同时又不影响实际效果。 

// 防抖 有点像 老年人 防止手残 老点 就是防止手抖 
// 就是将多次执行 变成 一次执行 每次执行会先将之前那次请求清空  像input
// 节流就是 记录之前那个 如果在时间内不管 否则 就是 要处理 滚动条


// 防抖分为两种:

// 1)非立即执行版:事件触发->延时->执行回调函数;如果在延时中,继续触发事件,则会重新进行延时.在延时结束后执行回调函数.常见例子:就是input搜索框,客户输完过一会就会自动搜索
// 2)立即执行版:事件触发->执行回调函数->延时;如果在延时中,继续触发事件,则会重新进行延时.在延时结束后,并不会执行回调函数.常见例子:就是对于按钮防点击.例如点赞,心标,收藏等有立即反馈的按钮.


// 防抖 非立即执行版本
function debounce(func, wait) {
    let timeout;
    return function () {
        let context = this
        let args = arguments
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}

// 防抖 立即执行版
function debounce_new(func, wait) {
    let timeout
    return function () {
        let context = this
        let args = arguments
        if (timeout) clearTimeout(timeout)
        let callNow = !timeout
        timeout = setTimeout(() => {
            timeout = null
        }, wait)
        if (callNow) func.apply(context, args)
    }
}
// 防抖 双剑合璧版本
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */


function debounce(fun, delay = 500, immediate = true) {
    let timer = null //保存定时器
    return function (args) {
        let that = this
        let _args = args
        if (timer) clearTimeout(timer);  //不管是否立即执行都需要首先清空定时器
        if (immediate) {
            if (!timer) fun.apply(that, _args)  //如果定时器不存在,则说明延时已过,可以立即执行函数
            //不管上一个延时是否完成,都需要重置定时器
            timer = setTimeout(function () {
                timer = null; //到时间后,定时器自动设为null,不仅方便判断定时器状态还能避免内存泄露
            }, delay)
        }
        else {
            //如果是非立即执行版,则重新设定定时器,并将回调函数放入其中
            timer = setTimeout(function () {
                fun.call(that, _args)
            }, delay);
        }
    }
}



// 红宝书版本 节流
// 节流就是将多次执行变成规定时间内 只执行一次 
// 定时器版
function throttle(method, context) {
    clearTimeout(method.tid)
    method.tid = setTimeout(function () {
        method.call(context)
    }, 100);
}


//时间戳版：
//这里fun指的就是回调函数,我就不写出来了
function throttle(fun, delay = 500) {
    let previous = 0;  //记录上一次触发的时间戳.这里初始设为0,是为了确保第一次触发产生回调
    return function (args) {
        let now = Date.now(); //记录此刻触发时的时间戳
        let that = this;
        let _args = args;
        if (now - previous > delay) {  //如果时间差大于规定时间,则触发
            fun.apply(that, _args);
            previous = now;
        }
    }
}