import { defineStore } from 'pinia'
import { ref } from 'vue'
import { computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const task=ref("")
  const tag=ref("work")
 



  function addTodo() {
    todos.value.push({
      task:task.value,
      tag:tag.value,
      done: false
    })
    task.value=""
  }

  function deleteTodo(index) {
    todos.value.splice(index, 1)
  }

  function toggleDone(index) {
    todos.value[index].done = !todos.value[index].done
  }
  

 const activeCount = computed(() =>
  todos.value.filter(todo => !todo.done).length
)

const doneCount = computed(() =>
  todos.value.filter(todo => todo.done).length
)
  return {
    todos,
    addTodo,
    deleteTodo,
    toggleDone,
    task,
    tag,
   activeCount,
  doneCount,
  }
})