<template>
  <div id="app">
    <div>
      <button @click="getGoodsList">goodslist</button>
      <button @click="addGoods">addgoods</button>
     <button @click="getGoodsById(99)">addgoods</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/goodslist')
      console.log(res)
    },
    async addGoods() {
      const { data: res } = await this.$http.post('/api/addgoods',{name:'boluo',price:9,count:100,img:'image url'})
      console.log(res)
    },
    async getGoodsById(id){
      const {data:res}=await this.$http.get(`/api/getgoods/${id}`)
      console.log(res)
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
