<script setup>
import { useTodoStore } from '@/pinia/stores/todo';

const store=useTodoStore()
function progress(completed, total) {
  if (total === 0) {
    return { width: '0%' }
  }

  return {
    width: `${(completed / total) * 100}%`
  }
}
</script>

<template>
  <div>
   <div class="px-3 sm:px-6 flex mt-7 w-full max-w-2xl  items-center mx-auto gap-4">
  <div class="h-1 w-full rounded-3xl bg-gray-200">
  <div class="bg-gradient-to-r from-pink-100 via-pink-300 to-pink-500
   transition-all duration-500 rounded-3xl h-1" :style="progress(store.doneCount , store.doneCount+store.activeCount )"></div>
  </div>
  <p class="text-gray-300 text-sm sm:text-base">{{ store.doneCount }}/{{ store.doneCount+store.activeCount }}</p>
</div>
  </div>
</template>
