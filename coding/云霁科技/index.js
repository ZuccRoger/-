// 实现回文

var isPalindrome = function (x) {
    if (x < 0) return false
    let str = '' + x
    return Array.from(str).reverse().join('') === str
}

console.log(isPalindrome('level'))

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
function debounce(func,wait,immediate) {
    let timeout;

    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}