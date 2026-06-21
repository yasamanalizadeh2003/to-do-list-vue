<script setup>
import { reactive } from 'vue';

const avtiveTabs=reactive(["ALL","AVTIVE","DONE"])
</script>

<template>
    <div>
        <div class="flex justify-between  mt-12 w-full max-w-2xl mx-auto px-5">
            <div class="flex gap-12">
            <div 
            class="flex  text-gray-400 font-light  font-mono"
            v-for="(tab,index) in avtiveTabs" :key="index">
             {{ tab }}
            </div>
            </div>
            <p class="text-gray-300 font-light font-mono hover:text-pink-300">clear done</p>
        </div>
    </div>
</template>