import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref(JSON.parse(localStorage.getItem('todos')) || [])
  const task=ref("")
  const tag=ref("work")
  const activeTab=ref("")

  watch(
  todos,
  (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos))
  },
  { deep: true }
)

function clickTab(data){
activeTab.value=data
}
 
  function addTodo() {
    if(task.value!=""){
    todos.value.push({
       id: Date.now(),
      task:task.value,
      tag:tag.value,
      done: false,
      activeTab:activeTab.value
    })
    task.value=""
  }}

  function deleteTodo(index) {
    todos.value.splice(index, 1)
  }

  function toggleDone(index) {
    todos.value[index].done = !todos.value[index].done
  }
  
  function clearDone(){
    todos.value = todos.value.filter(todo => !todo.done)
  }

 const activeCount = computed(() =>
  todos.value.filter(todo => !todo.done).length
)

const doneCount = computed(() =>
  todos.value.filter(todo => todo.done).length
)

const filteredTodos = computed(() => {
  switch (activeTab.value) {
    case 'ACTIVE':
      return todos.value.filter(todo => !todo.done)

    case 'DONE':
      return todos.value.filter(todo => todo.done)

    default:
      return todos.value
  }
})

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleDone,
    task,
    tag,
   activeCount,
  doneCount,
  activeTab,
  clickTab,
  filteredTodos,
  clearDone
  }
})