## 下载文件
1. downloadFileBlob() 下载流文件
2. downloadFileUseData() 将json数据转换
```
<template>
  <el-button @click="downloadFileBlob">Download</el-button>
</template>

<script>
import { downloadFile } from '@/utils/download'
export default {
  method: {
    downloadFileBlob() {
      this.$prompt('输入保存文件名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue: '安全督察模板',
          inputPattern: /\S+/,
          inputErrorMessage: '不能为空（空字符）'
        }).then(({ value }) => {
          const name = value.trim() || 'defult name'
          downloadFile(`${name}.xlsx`, res)
        })
    },
    downloadFileUseData() {
      this.$prompt('输入保存文件名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue: '安全督察模板',
          inputPattern: /\S+/,
          inputErrorMessage: '不能为空（空字符）'
        }).then(({ value }) => {
          const name = value.trim() || 'defult name'
          import('@/views/OperationMaintain/vendor/Export2Excel').then(excel => {
            // ['姓名'， '年龄']
            const tHeader = res.data.header
            // ['name', 'age']
            const filterVal = res.data.values
            // [{ name: 'fewbadboy', age: '28', ... }]
            const list = [...res.data.result]
            const data = this.formatJson(filterVal, list)
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: name,
              autoWidth: true,
              bookType: 'xlsx'
            })
          })
        })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === 'periodStartTime') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        })
      )
    },
  }
}
</script>

<style>

</style>

```

## Axios 针对表单不同 Content-Type 请求
1. multipart/form-data
`值不能嵌套对象`
```js
/**
  * el-form-item 中包括 el-upload 时 下面操作会自动添加file到表单formData中
  * const form = this.$refs.ruleForm.$el
  * const formData = new FormData(form)
  */
const data = { name: 'fewbadboy', age: 20 }
const formData = new FormData()
      formData.append('robotId', item.robotId)
      formData.append('file', item.robotId)
      // 嵌套对象时
      formData.append('data', JSON.stringify(data))
Axios(formData).then(res => // do something)
```
2. application/x-www-form-urlencoded
application/x-www-form-urlencoded: 数据被编码成以 '&' 分隔的键-值对, 同时以 '=' 分隔键和值. 非字母或数字的字符会被 percent-encoding: 这也就是为什么这种类型不支持二进制数据(应使用 multipart/form-data 代替)
```js
const params = new URLSearchParams()
      params.append('robotId', item.robotId)
Axios(params).then(res => // do something)
```