const mysql=require('mysql')
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql',
    port:'3306',
    database:'myblog'
})

con.connect()

const sql='select * from users;'
// const sql=`update users set realname='李四' where username='lisi';`
con.query(sql,(err,result)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})
con.end();