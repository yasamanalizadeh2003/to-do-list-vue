<script setup>
import { Trash2 } from 'lucide-vue-next'
import { useTodoStore } from '@/pinia/stores/todo';

const store = useTodoStore()
</script>

<template>
  <div>
    <div class="border-2 mb-10 border-gray-200 flex flex-col  mt-8 w-full max-w-158 shadow-sm shadow-gray-300 mx-auto">
    <ul>
      <li
        v-for="(todo, index) in store.todos"
        :key="index"
        class="flex justify-between group items-center border-b-2 border-gray-200 px-4 py-2"
      >

        <!-- checkbox -->
          <div class="flex gap-3 mt-5 self-center">
        <div
          @click="store.toggleDone(index)"
         :class="todo.done?'bg-pink-200 border-pink-400':'border-gray-200'" 
             class="h-6 w-6 rounded-full border-2  mr-2 self-center">
    </div>
    </div>
      <!-- task+type -->
            <div class="flex flex-col gap-1 text-[20px]">
                <!-- task -->
              <div class="">
             {{ todo.task}}
              </div >
              <!-- type -->
               <div class=" flex items-center gap-1">
               <div class="h-2 w-2 rounded-full"></div>
              <div class="text-[13px]">
              {{todo.tag}}
              </div>
            </div>
            </div>
           

        <!-- delete -->
        <div>
             <button
             class=""
            @click="store.deleteTodo(index)">
                <Trash2 class="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer
                hover:text-pink-400 hover:scale-110  ease-out" />
            </button>
            </div>

      </li>
    </ul>
    </div>
  </div>
</template>