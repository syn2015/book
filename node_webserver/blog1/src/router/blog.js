const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const {
    SuccessModel,
    ErrorModel
} = require('../module/responseModel')
const handleBlogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const id = req.query.id
    //获取/app/blog/list
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)
        // return new SuccessModel(listData)
        const result = getList(author, keyword)
        //返回promise
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    if (method === 'GET' && path === '/api/blog/detail') {

        // const detailDate = getDetail(id)
        // return new SuccessModel(detailDate)
        const result = getDetail(id)
        return result.then(data => {
            return new SuccessModel(data)
        })
    }

    if (method === 'POST' && path === '/api/blog/new') {
        // const blogData = req.body
        // const data = newBlog(blogData)
        // return new SuccessModel(data)

        //上线需要修改author
        const author = 'zhangzhang'
        req.body.author = author
        const result = newBlog(req.body)
        return result.then(data => {
            return new SuccessModel(data)
        })

    }

    if (method === 'POST' && path === '/api/blog/update') {

        // const result = updateBlog(id, req.body)
        // if (result) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('update blog field')
        // }
        const result = updateBlog(id, req.body)
        return result.then(data => {
            if (data) {
                return new SuccessModel()
            } else {
                return new ErrorModel('update blog field')
            }
        })

    }

    if (method === 'POST' && path === '/api/blog/del') {
        // const result = delBlog(id)
        // if (result) {
        //     return new SuccessModel()
        // } else {
        //     return new ErrorModel('delblog failed')
        // }
        //开发时的假数据，上线时需要修改
        const author = 'zhangzhang'
        const result = delBlog(id, author)
        return result.then(data => {
            if (data) {
                return new SuccessModel()
            } else {
                return new ErrorModel('del blog failed')
            }
        })




    }
}
module.exports = handleBlogRouter