<template>
  <div id="app">
    <!-- <p>elementui</p> -->
    <h1 class="title">list---{{brandlist.length}}</h1>
   <el-row :gutter='10'>
     <el-col :span="7" >
         <el-input placeholder="请输入品牌名称" size="mini">
          <template slot="prepend">品牌名称：</template>
        </el-input>
     </el-col>
     <el-col :span="4">
       <el-button type="primary" size="mini">添加</el-button>
     </el-col>
   </el-row>

<el-table :data="brandlist" style="width: 100%; margin-top: 10px;" border size="mini">
      <el-table-column prop="id" label="Id"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column label="Ctime">
        <template v-slot="scope">
          {{scope.row.ctime | dateFormat}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="danger" size="mini">删除 -- {{scope.row.id}}</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { value, onMounted } from 'vue-function-api'
import { list } from './api/branch_list'

export default {
  setup (props, context) {
    const root = context.root
    const brandlist = value([])
    const getBrandList = async () => {
      const { data: res } = await list()
      console.log(res)
      // console.log(root)
      if (res.status !== 0) {
        return context.root.$message.error('get list failed')
      }
      root.$message.success('get list success')
      brandlist.value = res.message
    }
    onMounted(() => {
      getBrandList()
    })

    return {
      brandlist
    }
  }

}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.title{
  font-style: 18px;
  text-align: center;
}
</style>
