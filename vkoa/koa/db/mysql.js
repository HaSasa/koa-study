const mysql = require('mysql')
const config = require('../config/config.js')
const envConfig = process.env.NODE_ENV === 'development' ? config.dev : config.prod
// 操作数据库
class QuerySQL {
  constructor () {
    this.Client = null// 数据库连接
  }
  static get instance () {
    if (!QuerySQL.__client) {
      QuerySQL.__client = new QuerySQL()
    }
    return QuerySQL.__client
  }
  // 隐示连接
  start () {
    this.connect()
  }
  // 查询语句(使用此种方案,无需再为进行编码,防止SQL注入)
  querySql (sqlStr, sqlParams = []) {
    return new Promise((resolve, reject) => {
      this.Client.query(sqlStr, sqlParams, (err, results) => {
        err ? reject(err) : resolve(results)
      })
    })
  }
  // 链接数据库  显示连接
  connect () {
    this.Client = mysql.createConnection({
      host: envConfig.database.host,
      user: envConfig.database.user,
      password: envConfig.database.password,
      database: envConfig.database.database,
      port: envConfig.database.port
    })

    this.Client.connect(err => {
      err && console.log('数据库开启失败')
    })
  }
  close () {
    // destroy不管query是否访问完成 都直接取消
    // this.Client&&this.Client.end();destroy()
    this.Client && this.Client.destroy()
    this.Client = null
    this.httpData = null
  }
}

QuerySQL.__client = null

module.exports = QuerySQL
