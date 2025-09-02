

<template>
  <Header />
  <div class="main-bg">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style src="./styles/MainBackground.css"></style>
