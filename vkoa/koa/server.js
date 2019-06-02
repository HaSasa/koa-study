
// server.js文件

let Koa = require('koa')
let Router = require('koa-router')

let cors = require('koa-cors')
// 引入modejs的文件系统API
let fs = require('fs')
// let buffer  = require('buffer')
const app = new Koa()
const router = new Router()

// 提供一个/getJson接口
router
  .get('/json', async ctx => {
    // 后端允许cors跨域请求
    await cors()
    // 返回给前端的数据
    let from = JSON.stringify(fs.readFileSync('../static/material.json'))
    let copy = new Buffer(JSON.parse(from))
    let data = copy.toString()
    // ctx.body = JSON.parse(fs.readFileSync('../static/material.json'));
    let status = ctx.response.status
    let message = ctx.response.message
    ctx.body = {
      data: data,
      time: Date.now(),
      status: status,
      message: message
    }
  })

// 将koa和两个中间件连起来
app.use(router.routes())
  .use(router.allowedMethods())

// 监听3000端口
app.listen(3000, () => {
  console.log('服务启动成功')
})
