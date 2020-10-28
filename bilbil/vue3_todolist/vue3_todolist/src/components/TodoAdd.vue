<template>
      <div class="input-add">
        <input type="text" name="todo" v-model="todoContent" @keyup-enter="emitAddTodo" />
        <button @click="emitAddTodo">
          <i class="plus"></i>
        </button>
      </div>
</template>

<script>
export default {
  name: 'TodoAdd',
  // props: 访问传递而来的数据
  // context: vue的上下文信息
  setup (props, context) {
    return useEmitAddTodo(props.tid, context.emit)
  }
}
// 专属composables
function useEmitAddTodo (tid, emit) {
  // eslint-disable-next-line no-undef
  const todoContent = ref('')
  // 按钮事件添加todo
  const emitAddTodo = () => {
    const todo = {
      id: tid, // 来自父组件的数据ID
      content: todoContent.value, // 经由ref或reactive包装的数据需要通过value来访问，再template模板中不需要value来访问
      completed: false
    }
    // 发送数据给父组件
    emit('add-todo', todo)
    todoContent.value = ''
  }
  return {
    todoContent,
    emitAddTodo
  }
}
</script>

<style >
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}
.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}
.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;
  color: white;
  position: absolute;
  right: 0px;
  cursor: pointer;
}
.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  /* 生成横线和竖线 */
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
