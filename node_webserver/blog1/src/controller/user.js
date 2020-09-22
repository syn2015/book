const {exec} = require('../db/mysql')

const login = (username, password) => {
    // if (username == 'zhangsan' && password == '666') {
    //     return true
    // }
    // return false
    const sql = `select username,realname from users where username='${username}' and password='${password}';`
    return exec(sql).then(data => {
        return data[0] || {}
    })
}
module.exports = login