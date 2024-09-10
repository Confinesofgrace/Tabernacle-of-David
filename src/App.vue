<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue'
import HomeView from './views/HomeView.vue'
import Navbar from './components/Navbar.vue'
import Navbar2 from './components/Navbar2.vue'


</script>

<template>
  <header> 
    <!-- <Navbar/> --> 
    <Navbar2/>
  
  </header>

  <RouterView />
</template>
