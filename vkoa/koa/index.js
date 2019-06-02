const Koa = require('koa') // 引入koa

const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const router = require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')

const ejs = require('ejs')
const path = require('path') // 引入路径
const config = require('./config/default.js')

const app = new Koa()

// session存储配置
// const sessionMysqlConfig = {
// 	user: config.database.USERNAME,
// 	password: config.database.PASSWORD,
// 	database: config.database.DATABASE,
// 	host: config.database.HOST,
// }

// 配置session中间件
// app.use(session({
// 	key: 'USER_SID',
// 	store: new MysqlStore(sessionMysqlConfig)
// }))

// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
// app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
// 	maxAge: 365 * 24 * 60 * 60
// }))
// app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
// 	maxAge: 365 * 24 * 60 * 60
// }))

// 配置服务端模板渲染引擎中间件
// app.use(views(path.join(__dirname, './views'), {
// 	extension: 'ejs'
// }))
// app.use(bodyParser({
// 	formLimit: '1mb'
// }))

//  路由(我们先注释三个，等后面添加好了再取消注释，因为我们还没有定义路由，稍后会先实现注册)
// app.use(require('./routers/signin.js').routes())
// app.use(require('./routers/signup.js').routes())
// app.use(require('./routers/posts.js').routes())
// app.use(require('./routers/signout.js').routes())

app.listen(3000, () => {
  console.log(`服务启动于 ${config.port} 端口`)
})
