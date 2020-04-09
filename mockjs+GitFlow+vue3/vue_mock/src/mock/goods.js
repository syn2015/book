import Mock from 'mockjs'
Mock.mock('/api/goodslist', 'get', {
  status: 200,
  message: 'success',
  // data:[{
  //     id:0,
  //     name:'boluo',
  //     price:100,
  //     count:100,
  //     img:'image url'
  // }],
  'data|5': [{
    // id:'@increment(1)',
    'id|+1': 0,
    name: '@cword(2,8)',
    price: '@natural(100,999)',
    count: '@natural(100,999)',
    img: '@dataimage(60x60)'
  }]
})
Mock.mock('/api/addgoods', 'post', function (option) {
  console.log(option)
  return Mock.mock({

    status: 200,
    message: '@cword()'

  })
})
// Mock.mock(/\/api\/getgoods/,'get',{
//    data:{
//        id:9,
//        name:'apple',
//        price:2,
//        count:199,
//        img:'@dataimage(64x64)'
//    },
//    status:200,
//    message:'get success '

// })
Mock.mock(/\/api\/getgoods/, 'get', function (option) {
  console.log(option)
  const res = /\/api\/getgoods\/(\d+)/.exec(option.url)
  console.log(res)
  return Mock.mock({
    data: {
      id: res[1] - 0,
      name: '@fruit',
      price: 2,
      count: 199,
      img: '@dataimage(64x64)'
    },
    status: 200,
    message: 'get success '
  })
})
