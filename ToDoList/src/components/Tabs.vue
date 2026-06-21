<script setup>
import { reactive,ref } from 'vue';

const activeTabs=reactive(["ALL","ACTIVE","DONE"])
const activeTab=ref("")

function clickTab(data){
activeTab.value=data
console.log(activeTab.value)
}
</script>

<template>
    <div>
        <div class="flex justify-between  mt-12 w-full max-w-2xl mx-auto px-5">
            <div class="flex gap-12">
            <div 
            @click="clickTab(tab)"
            class="flex font-light  font-mono"
            v-for="(tab,index) in activeTabs" :key="index"
            :class="activeTab==tab?'text-black transition':'text-gray-400 cursor-pointer hover:text-gray-500 transition'">
            
             {{ tab }}
            </div>
            </div>
            <p class="text-gray-300 font-light font-mono hover:text-pink-300">clear done</p>
        </div>
    </div>
</template>