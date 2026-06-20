<script setup>
import { ref } from 'vue'
import { Plus } from 'lucide-vue-next'

const tag = ref('')
const tags = ['work', 'personal', 'urgent']
</script>

<template>
  <div>
    <div class="flex px-5 w-full max-w-2xl mx-auto">
      <div
        tabindex="0"
        class="border-2 border-gray-200 shadow-sm h-20 focus:border-pink-300 shadow-gray-300 mt-14 w-full max-w-2xl mx-auto outline-0 focus:shadow-sm focus:shadow-pink-300 rounded-sm p-6"
      >
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div class="h-4 w-4 border-2 border-pink-300 rounded-full"></div>
            <input type="text" class="outline-0" placeholder="Add a new task..." />
          </div>
          <div class="h-7 w-7  flex items-center justify-center rounded-sm bg-pink-200
           hover:transition-all duration-300 hover:scale-105 hover:shadow-lg ">
            <Plus class="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
