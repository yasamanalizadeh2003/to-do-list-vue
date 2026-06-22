<script setup>
import { ref } from 'vue';
import { Trash2 } from 'lucide-vue-next'

const done=ref(false)


function clickDone(){
    done.value=!done.value
    console.log(done.value)
}
</script>

<template>
    <div>
    <div class="border-2 h-60 border-gray-200 flex flex-col  mt-8 w-full max-w-158 shadow-sm shadow-gray-300 mx-auto px-4">
    <ul >
        <li class="flex justify-between group items-center">
            <div class="flex gap-3 mt-5">
            <!-- done checkbox -->
            <div @click="clickDone"
             :class="done?'bg-pink-200 border-pink-400':'border-gray-200'" 
             class="h-6 w-6 rounded-full border-2  mr-2 self-center">
             
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
             <button
             class=""
            @click="deleteTodo(id)">
                <Trash2 class="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer
                hover:text-pink-400 hover:scale-110  ease-out" />
            </button>
            </div>
            
        </li>
        <hr class="h-1 mb-0 border-gray-200 -mx-4 mt-4">
    </ul>
    </div>

    </div>
</template>