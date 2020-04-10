import Mock from 'mockjs'
Mock.mock('/api/getprodlist', 'get', {
  status: 0,
  'message|4': [
    {
      id: '@increment(1)',
      name: '@cword(3,8)',
      ctime: new Date()
    }
  ]
})
