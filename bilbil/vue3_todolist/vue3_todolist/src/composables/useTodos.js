// https://jsonplaceholder.typicode.com/todos?_limit=5
import { ref } from 'vue'
export default function useTodos () {
  const todos = ref([])
  const addTodo = (todo) => todos.value.push(todo)
  // 获取远程数据
  const fetchTodos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    )
    const rawTodos = await response.json()
    todos.value = rawTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      complated: todo.complated
    }))
  }
  // eslint-disable-next-line no-undef
  onMounted(() => {
    fetchTodos()
  })
  return {
    todos,
    addTodo

  }
}
