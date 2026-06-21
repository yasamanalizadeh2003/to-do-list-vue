<script setup>
import { ref } from 'vue';

const done=ref(false)

function clickDone(){
    done.value=!done.value
    console.log(done.value)
}
</script>

<template>
    <div>
    <div class="border-2 h-60 border-gray-200 flex flex-col  mt-8 w-full max-w-158 shadow-sm shadow-gray-300 mx-auto px-4">
    <ul class="px-2">
        <li class="flex justify-between">
            <div class="flex gap-3 mt-5">
            <!-- done checkbox -->
            <div @click="clickDone"
             :class="done?'bg-pink-200 border-pink-400':'border-gray-200'" 
             class="h-6 w-6 rounded-full border-2 self-center mr-2">
             
            </div>
            <!-- task+type -->
            <div class="flex flex-col gap-1 text-[20px]">
                <!-- task -->
              <div>
             
              </div >
              <!-- type -->
               <div class=" flex items-center gap-1">
               <div class="h-2 w-2 rounded-full"></div>
              <div class="text-[13px]">

              </div>
            </div>
            </div>
            </div>
            <!-- delete -->
            <div>

            </div>
        </li>
    </ul>
    </div>

    </div>
</template>