const path = require('path')
const Koa = require('koa')
const Cors = require('koa2-cors')
const Static = require('koa-static')
const Router = require('koa-router')
const BodyParser = require('koa-bodyparser') // bodyparser 把post 请求转化后放到ctx.request.body 里面
// const BodyParser_1 = require('koa-better-body');

const app = new Koa()

const router = new Router()

app.use(BodyParser())

app.use(Static(path.join(__dirname, '/assets')))

app.use(router.routes()).use(router.allowedMethods())

// 配置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET')
  ctx.set('Access-Control-Allow-Credentials', true)
  ctx.set('Access-Control-Max-Age', 3600 * 24)
  await next()
})
// 跨域
app.use(Cors({
  origin: function (ctx) {
    return '*' // 允许来自所有域名请求
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

app.use(async (ctx) => {
  ctx.body = '服务启动好了'
})

app.listen(3000, () => {
  console.log('3000端口服务启动成功！')
})
