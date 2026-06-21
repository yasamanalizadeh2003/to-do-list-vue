<template>
  <div class="flex flex-col">
  <Header/>
  <ProgressBar/>
  <AddNewTask/>
  <Tabs/>
  <TodoList/>
  </div>
</template>

<script setup>
import AddNewTask from './components/AddNewTask.vue';
import Header from './components/Header.vue';
import ProgressBar from './components/ProgressBar.vue';
import Tabs from './components/Tabs.vue';
import TodoList from './components/TodoList.vue';


</script>
