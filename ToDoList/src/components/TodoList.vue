<script setup>
import { Trash2,Check } from 'lucide-vue-next'
import { useTodoStore } from '@/pinia/stores/todo'

const store = useTodoStore()
</script>

<template>
  <div>
    <div
      class="border-2 mb-10 border-gray-200 flex flex-col mt-8 w-full max-w-158 shadow-sm shadow-gray-300 mx-auto"
    >
      <ul>
        <TransitionGroup name="todo" tag="div">
          <li 
          :class="todo.done?'bg-gray-100':''"
            v-for="(todo, index) in store.filteredTodos"
            :key="todo.id"
            class="flex justify-between items-center border-b-2 border-gray-200 px-4 py-2"
          >
            <!-- checkbox -->
            <div class="flex gap-3">
              <div
                @click="store.toggleDone(index)"
                :class="todo.done ? 'bg-pink-300 border-pink-500 shadow-[0_0_10px_2px_rgba(236,72,153,0.25)]' : 'border-gray-300'"
                class="h-6 w-6 rounded-full border-2 mr-2 self-center flex items-center"
              >
            <Check class="h-5 text-white"/>
            </div>
            </div>
            <!-- task+type -->
            <div class="flex flex-col gap-1 text-[20px] w-full px-4 py-1">
              <!-- task -->
              <div :class="todo.done?'text-gray-400 line-through':''"
              class="font-serif">
                {{ todo.task }}
              </div>
              <!-- type -->
              <div class="flex items-center gap-1">
                <div
                  :class="
                    todo.tag == 'work'
                      ? 'bg-gray-300'
                      : todo.tag == 'personal'
                        ? 'bg-pink-200'
                        : todo.tag == 'urgent'
                          ? 'bg-gray-700'
                          : ''
                  "
                  class="h-2 w-2 rounded-full mt-1"
                ></div>
                <div class="text-[13px]">
                  {{ todo.tag }}
                </div>
              </div>
            </div>

            <!-- delete -->
            <div>
              <button class="" @click="store.deleteTodo(index)">
                <Trash2
                  class="w-4 h-4 text-gray-300 transition-opacity duration-200 cursor-pointer hover:text-pink-400 hover:scale-110 ease-out"
                />
              </button>
            </div>
          </li>
        </TransitionGroup>
      </ul>
    </div>
    <div class="text-center text-gray-400 text-[14px]">{{ store.activeCount }}  remaining</div>
  </div>
</template>

<style scoped>
.todo-enter-active,
.todo-leave-active {
  transition: all 0.2s ease;
}

.todo-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.todo-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.todo-leave-active {
  position: absolute;
  width: 100%;
}

.todo-move {
  transition: transform 0.2s ease;
}
</style>
