const conn=require('../db/db')
let express = require('express');
let router = express.Router();

/**
 * 获取首页轮播图
 */
router.get('/api/homecasual', (req, res)=>{
   let sqlStr = 'select * from pdd_homecasual';
   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
       
   })
   /*const data = require('../data/homecasual');
   res.json({success_code: 200, message: data})*/
});

/**
* 获取首页导航
*/
router.get('/api/homenav', (req, res)=>{
  /*
  let sqlStr = 'select * from homenav';
   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
   })
   */
   const data = require('../data/homenav');
   res.json({success_code: 200, message: data});
});

/**
* 获取首页商品列表
*/
router.get('/api/homeshoplist', (req, res)=>{
   /*
  let sqlStr = 'select * from homeshoplist';
   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
   })
   */
   setTimeout(function () {
        const data = require('../data/shopList');
        res.json({success_code: 200, message: data})
   }, 300);
});

/**
* 获取推荐商品列表
*/
router.get('/api/recommendshoplist', (req, res)=>{
  //  setTimeout(function () {
  //      const data = require('../data/recommend');
  //      res.json({success_code: 200, message: data})
  //  }, 10);
  let pageNo=req.query.page||1;
  let pageSize=req.query.count||20;
  console.log(pageNo,pageSize)
  let sqlStr=`select * from pdd_recommend limit ${(pageNo-1)*pageSize},${pageSize}`;
  console.log(sqlStr);
  conn.query(sqlStr, (err, results) => {
    if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
    res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
    
})
});

/**
* 获取推荐商品列表拼单用户
*/
router.get('/api/recommenduser', (req, res)=>{
   setTimeout(function () {
       const data = require('../data/recommend_users');
       res.json({success_code: 200, message: data})
   }, 10);
});

/**
* 获取搜索分类列表
*/
router.get('/api/searchgoods', (req, res)=>{
   setTimeout(function () {
       const data = require('../data/search');
       res.json({success_code: 200, message: data})
   }, 10);
});

/**
* 获取商品数据
*/
   router.get('/api/getqalist', (req, res) => {
   const course = req.query.course;
   const limit = req.query.limit || 20;
   const keyword = req.query.keyword || '';

   let sqlStr = 'select * from qa where course= "' + course + '" LIMIT ' + limit;
   if (keyword !== '') {
       sqlStr = 'select * from qa where course= "' + course + '" AND qname LIKE "%' + keyword + '%" LIMIT ' + limit;
   }

   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0});
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
   })
});

module.exports = router;
