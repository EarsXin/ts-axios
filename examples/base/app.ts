import axios from '../../src/index'

// 数组
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     bar: ['bar', 'baz']
//   }
// })

// // 对象
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       bar: 'baz'
//     }
//   }
// })

// const date = new Date()
// // 时间
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// // 特殊字符，空格
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: '@:$, '
//   }
// })
// // 空值
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: 'bar',
//     baz: null
//   }
// })

// // hash
// axios({
//   method: 'get',
//   url: '/base/get#hash',
//   params: {
//     foo: 'bar'
//   }
// })

// // 带参数
// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

// // 普通字符串
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// axios({
//   method: 'post',
//   url: '/base/post',
//   headers: {
//     'content-type': 'application/json;'
//   },
//   data: {
//     a: 1,
//     b: 2
//   }
// })

// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// axios({
//   method: 'post',
//   url: '/base/post',
//   data: searchParams
// })

// const arr = new Int32Array([21, 31])
// // buffer
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })
const response = axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})
// tslint:disable-next-line: no-floating-promises
response.then(res => console.log(res))

// tslint:disable-next-line: no-floating-promises
axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then(res => {
  console.log(res)
})
