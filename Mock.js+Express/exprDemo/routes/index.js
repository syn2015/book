var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express Nodejs'
  });
});

// router.get('/mockjs', function(req, res, next) {
//   var Mock=require('mockjs')
//   var data=Mock.mock({
//     'list|1-10':[{
//       'id|+1':1
//     }]
//   })
//   var ret=JSON.stringify(data,null,4);
//   console.log(ret)
//   res.render('index', { title: 'Express mockjs' });
// });

// router.get('/mockjsapi', function(req, res, next) {
//   var Mock=require('mockjs')
//   var data=Mock.mock({
//     'list|1-10':[{
//       'id|+1':1
//     }]
//   })
//   var ret=JSON.stringify(data,null,4);
//   console.log(ret)
//   res.send(ret);
// });
router.get('/shopapi', function (req, res, next) {
  //req.query获取参数
  var callback=req.query.callback;
  console.log(callback);
  var Mock = require('mockjs')
  var data = Mock.mock({
    'categorys|3-5': [{
      categoryName: '@cfirst',
      'categoryID|+1': 100,
      logo: '@image(64x64,#eee,Logo)',
      'categoryItems|1-4': [{
        cname:'@cname',
        'cid|+1':100,
        'item|3-7':[{
          name:'@cname',
          'id|+1':1000,
          link:'@url(http)'
        }]
      }]
      ,'seller|8-15':[{
        name:'@cname@cname',
        url:'@url(http)'
      }]
    }]
  })
  var ret = JSON.stringify(data, null, 4);
  ret=callback+'('+ret+')';
  console.log(ret)
  res.send(ret);
});
module.exports = router;