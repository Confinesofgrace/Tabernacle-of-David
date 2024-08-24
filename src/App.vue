<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue'
import HomeView from './views/HomeView.vue'
import Navbar from './components/Navbar.vue'


</script>

<template>
  <header> <Navbar/> </header>

  <RouterView />
</template>
