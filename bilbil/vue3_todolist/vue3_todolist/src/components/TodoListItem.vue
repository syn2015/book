<template>
  <div class="todo-item" :class="{done:todoItem.completed}">
    <label>
      <input type="checkbox" :checked="todoItem.completed"  @click="$emit('change-state',$event)"/>
      {{todoItem.content}}
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  // 接受数据
  props: ['todo-item']
}
</script>

<style >
.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}
.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}
/* 完成样式 */
.todo-item.done label{
  /* 删除线和斜体 */
  text-decoration: line-through;
  font-style: italic;
}
.todo-item label span.check-button {
  position: absolute;
  top: 0;
}
/* 空心 */
.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
}
/* 实心 */
.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #b382f9;
  /* 向下移动1px */
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}
/* 选中和未选中通用代码 */
.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: " ";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
/* 隐藏input */
.todo-item input {
  margin-right: 16px;
  opacity: 0;
}
/* 实现选中状态 */
.todo-item input:checked + span.check-button::after {
  opacity: 1;
}
</style>
