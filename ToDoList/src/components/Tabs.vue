<script setup>
import { reactive,ref } from 'vue';
import { useTodoStore } from '@/pinia/stores/todo';

const store = useTodoStore()

const activeTabs=reactive(["ALL","ACTIVE","DONE"])
const activeTab=ref("")

function clickTab(data){
activeTab.value=data
}


</script>

<template>
    <div>
        <div class="flex justify-between  mt-12 w-full max-w-2xl mx-auto px-5">
            <div class="flex gap-8">
            <div 
            @click="clickTab(tab)"
            class="flex font-light font-mono"
            v-for="(tab,index) in activeTabs" :key="index"
            :class="activeTab==tab?'text-black transition':'text-gray-400 cursor-pointer hover:text-gray-500 transition'">
            
             {{ tab }}
              <div class="ml-2 text-gray-300"
               v-if="tab=='ACTIVE'">{{ store.activeCount  }}</div>
            <div class="ml-2 text-gray-300"
             v-if="tab=='DONE'">{{ store.doneCount  }}</div>
            </div>
           

            </div>
            <p class="text-gray-300 font-light font-mono hover:text-pink-300">clear done</p>
        </div>
    </div>
</template>