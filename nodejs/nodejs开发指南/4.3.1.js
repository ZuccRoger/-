/*
 * @Author: your name
 * @Date: 2020-07-28 16:19:48
 * @LastEditTime: 2020-07-28 16:27:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\nodejs\nodejs开发指南\4.3.1.js
 */
let events = require('events')
let emitter = new events.EventEmitter()
emitter.on('someEvent2', function (arg1, arg2) {
    console.log('listener1', arg1, arg2)
})
emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2)
})
emitter.emit('someEvent', 'byvoid', 1911)