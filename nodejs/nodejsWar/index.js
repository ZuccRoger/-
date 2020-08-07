/*
 * @Author: your name
 * @Date: 2020-07-28 17:11:50
 * @LastEditTime: 2020-07-28 17:18:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sharing\nodejs\nodejsWar\index.js
 */
const koa = require('koa')
const fs = require('fs')
const mount = require('koa-mount')
// const static = require('koa-static')
const app = new koa()
// app.use()
console.log(fs.existsSync('./index.html'))
app.use(
    mount('/', async (ctx) => {
        ctx.body = fs.readFileSync(__dirname + './index.html', 'utf-8')
    })
)
app.listen(4000)