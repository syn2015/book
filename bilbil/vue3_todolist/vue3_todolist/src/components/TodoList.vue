<template>
    <div class="todo-list">
      <!-- 传递给子组件数据 -->
      <todo-list-item v-for="todo in todos" :key="todo.id" :todo-item="todo" @change-state="todo.completed=$event.target.checked"></todo-list-item>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  // 接受父组件的数据
  props: ['todos']
}
</script>

<style >
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>
