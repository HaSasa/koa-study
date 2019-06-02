const config = {
  dev: {
    // 启动端口
    server: {
      port: 3000,
      host: '127.0.0.1'
    },
    // 数据库配置
    database: {
      database: 'Mia',
      user: 'root',
      password: '123456',
      port: '3306',
      host: 'localhost',
      type: 'mysql'
    }
  },
  prod: {
    // 启动端口
    server: {
      port: 3000,
      host: '127.0.0.1'
    },
    // 数据库配置
    database: {
      database: 'Mia',
      user: 'root',
      password: '123456',
      port: '3306',
      host: 'localhost',
      type: 'mysql'
    }
  }
}

module.exports = config
