const {
    exec
} = require('../db/mysql')
const getList = (author, keyword) => {
    //返回假数据
    // return [{
    //     id: 1,
    //     title: 'titl1',
    //     content: 'content1',
    //     createTime: new Date(),
    //     author: 'zhangsan'
    // }, {
    //     id: 2,
    //     title: 'titl2',
    //     content: 'content2',
    //     createTime: new Date(),
    //     author: 'lisi'
    // }]
    let sql = `select id,title,content,author from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += ` and title like '%${keyword}%' `
    }
    sql += ` order by createtime desc;`
    return exec(sql)
}

const getDetail = (id) => {
    // return {
    //     id: 1,
    //     title: 'titl1',
    //     content: 'content1',
    //     createTime: new Date(),
    //     author: 'zhangsan'
    // }
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    // console.log('get blogData,', blogData)
    // return {
    //     id: 3
    // }
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()
    const sql = `
        insert into blogs (title,content,createtime,author)
        values ('${title}','${content}',${createTime},'${author}');
    `
    return exec(sql).then(insertData => {
        console.log('insertData is ', insertData)
        return {
            id: insertData.insertId
        }

    })
}

const updateBlog = (id, blogData = {}) => {
    // console.log('updateBlog,id,blogData,', id, blogData)
    // return true
    const content = blogData.content
    const title = blogData.title
    const sql = `
        update blogs set title='${title}',content='${content}' where id=${id}
    `
    return exec(sql).then(updateData => {
        console.log('updateData is', updateData)
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })




}
const delBlog = (id, author) => {
    // return true
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(data => {
        console.log('delblog is ', data)
        if (data.affectedRows > 0) {
            return true
        }
        return false
    })
}


module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}