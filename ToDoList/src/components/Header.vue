<template>
    <div>
    <div class="flex flex-col  mt-8  w-[39%] justify-self-center">
      <h2 class="text-pink-300 font-sans">{{ currentDate() }}</h2>
      <div class="flex justify-between items-end  w-full">
        <h1 class="text-gray-900 font-extrabold text-5xl mt-3">Tasks</h1>
        <div class="rounded-full bg-pink-300 h-10 w-10"></div>
      </div>
    </div>
  </div>
</template>

<script setup>  
function currentDate() {
  let cDate = new Date()
  return cDate.toDateString()
}
</script>