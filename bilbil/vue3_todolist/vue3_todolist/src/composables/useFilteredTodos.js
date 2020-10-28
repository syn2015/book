import { ref, computed } from 'vue'
// 接收原始todos
export default function useFilteredTodos (todos) {
  const filter = ref('all') // 默认选中all
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'done':
        return todos.value.filter((todo) => todo.completed)
      case 'todo':
        return todos.value.filter((todo) => !todo.completed)// 取反
      default:
        break
    }
  })
  return {

    filter,
    filteredTodos
  }
}
