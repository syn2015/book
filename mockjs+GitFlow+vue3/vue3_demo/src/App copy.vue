<template>
  <div id="app">
    <h1>vue3 learning</h1>
    <h2>{{msg}}</h2>
    <input type="text" v-model="msg">
    <p>计算属性：{{msgWrapper}}</p>
    <button @click="changeMsg" >修改msg</button>
  </div>
</template>

<script>
import { value, computed, onMounted } from 'vue-function-api'

export default {
  setup () {
    let msg = value('hellovue3')
    const msgWrapper = computed(() =>
      '---' + msg.value + '---'
    )
    const changeMsg = () => {
      msg.value = '修改了msg'
    }
    // 生命周期函数
    onMounted(() => {
      console.log('onmounted 执行')
    })

    return {
      msg,
      msgWrapper,
      changeMsg
    }
  },
  mounted () {
    console.log('执行了旧的mounted')
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
