
const mysql = require('mysql')

const connection = mysql.createConnection({
  // host     : '39.107.90.133',
  host: 'localhost',
  user: 'root',
  // password : 'Hanyang119.',
  password: 'Hanyang119.',
  port: '3306',
  database: 'Mia'
})

connection.connect()

const sql = 'SELECT * FROM user_login'
// const addSql = 'INSERT INTO article_list(tid,thumb,info,label,creat_time) VALUES(0,?,?,?,?)'
// const addSqlParams = ['https://c.runoob.com', 'babababbabababbababa', '测试3', '2018-11-01 17:45:34']
// 查
connection.query(sql, function (err, result) {
  if (err) {
    console.log('[SELECT ERROR] - ', err.message)
    return
  }

  console.log('--------------------------SELECT----------------------------')
  console.log(result, '结果')
  console.log('------------------------------------------------------------\n\n')
})

connection.end()
