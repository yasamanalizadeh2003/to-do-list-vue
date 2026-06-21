<script setup>
import { reactive, ref } from 'vue'
import { Plus } from 'lucide-vue-next'
import { onClickOutside } from '@vueuse/core'

const tag = ref('')
const tags = ['work', 'personal', 'urgent']
const activeTab=ref(0)
const controller=ref(false)
const task=ref("")
const card = ref(null)

function tabs(data,index){
tag.value=data
activeTab.value=index

}

onClickOutside(card, () => {
  controller.value = false
})
</script>

<template>
  <div>
    <div class="flex px-5 w-full max-w-2xl mx-auto max-h-min">
      <div 
       ref="card"
      @click="controller=true"
        tabindex="0"
        class="border-2 border-gray-200 shadow-sm  focus-within:border-pink-300
         shadow-gray-300 mt-14 w-full max-w-2xl mx-auto outline-0 focus-within:shadow-sm focus-within:shadow-pink-300 rounded-sm p-6"
      >
        <div class="flex justify-between items-center">
          <div class="flex gap-3 items-center">
            <div class="h-4 w-4 border-2 border-pink-300 rounded-full"></div>
            <input v-model="task" type="text" class="outline-0" placeholder="Add a new task..." />
          </div>
          <div class="h-7 w-7  flex items-center justify-center rounded-sm bg-pink-200
           hover:transition-all duration-300 hover:scale-105 hover:shadow-lg ">
            <Plus class="w-5 h-5 text-white" />
          </div>
        </div>

      <Transition name="expand">
  <div v-if="controller" class="w-full">
    <hr class="text-gray-100 my-4 w-full" />

    <div class="flex gap-3 ">
      <div class="text-gray-300 font-light font-mono text-sm self-center">
        TAG
      </div>

      <div
        v-for="(t,index) in tags"
        :key="index"
        @click="tabs(t,index)"
        :class="activeTab===index?'text-white font-light font-mono text-sm bg-pink-300 px-2 py-1':
        'text-gray-500 font-light font-mono text-sm bg-gray-100 px-2 py-1 cursor-pointer hover:scale-105 transition'"
      >
        {{ t }}
      </div>
    </div>
  </div>
</Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
