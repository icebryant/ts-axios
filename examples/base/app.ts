import axios, { AxiosError } from '../../src/index'

// axios({
//     method:'get',
//     url:'/base/get',
//     params:{
//         foo:['bar','baz']
//     }
// })
// axios({
//     method:'get',
//     url:'/base/get',
//     params:{
//         foo:{
//             bar:'baz'
//         }
//     }
// })

// const date=new Date()
// axios({
//     method:'get',
//     url:'/base/get',
//     params:{
//         date
//     }
// })
// axios({
//     method:'get',
//     url:'/base/get',
//     params:{
//         foo:'@:$,[]'
//     }
// })
// axios({
//     method:'get',
//     url:'/base/get',
//     params:{
//         foo:null
//     }
// })
// axios({
//     method:'get',
//     url:'/base/get',
//     params:{
//         foo:'bar'
//     }
// })
// axios({
//     method:'get',
//     url:'/base/get/#hash',
//     params:{
//         foo:'bar'
//     }
// })
// axios({
//   method: 'post',
//   url: '/base/post',
//   data: {
//     a: 1,
//     b: 2
//   }
// })
// const arr = new Int32Array([32, 21])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })
axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json,text/plian,*/*'
  },
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})
axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json,text/plian,*/*'
  },
  data: {
    a: 1,
    b: 2
  }
}).then(res => {
  console.log(res)
})
const paramsString = 'q=URLUtails.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)
axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
}).then(res => {
  console.log(res)
})
