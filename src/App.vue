

<template>
  <Header />
  <div class="main-bg" style="padding-top: 70px; min-height: 100vh;">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style src="./styles/MainBackground.css"></style>
