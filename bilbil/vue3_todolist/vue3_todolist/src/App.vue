<template>
  <main>
    <div class="container">
      <h1>Sun 代办事项！</h1>
      <todo-add />
      <todo-filter />
      <todo-list />
    </div>
  </main>
</template>

<script>
import TodoAdd from './components/TodoAdd'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'
export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoFilter,
    TodoList
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
main {
  width: 100vw;
  /* 保持背景容器到滚动条底部 */
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  background: rgb(203, 210, 240);
}
.container {
  max-width: 400px;
  /* width: 60%; */

  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background: rgb(245, 246, 252);
}
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
