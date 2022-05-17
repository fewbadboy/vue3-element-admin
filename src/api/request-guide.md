## Demo
```js
import request from '@/utils/request'

// Get
export function fetchGet(params) {
  return request({
    url: '/get',
    method: 'get',
    params,
    timeout: 5 * 1000
  })
}

// Post
export function fetchPost(data) {
  return request({
    url: '/post',
    method: 'post',
    data
  })
}

// Post File
// detail see ./download.md
export function fetchPostFile(data) {
  return request({
    url: '/post',
    method: 'post',
    responseType: 'blob',
    data
  })
}

```
