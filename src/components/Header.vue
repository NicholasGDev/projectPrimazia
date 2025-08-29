<template>
  <header class="main-header">
    <div class="logo-placeholder"></div>
    <nav class="nav-bar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobre">Sobre</router-link></li>
        <li class="dropdown" :class="{ open: showDropdown, selected: isServicosSelected }" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <span class="dropdown-label">Serviços ▾</span>
          <ul v-if="showDropdown" class="dropdown-menu">
            <li><router-link to="/contabilidade">Contabilidade</router-link></li>
            <li><router-link to="/folha-pagamento">Folha de Pagamento</router-link></li>
            <li><router-link to="/fiscal">Fiscal</router-link></li>
            <li><router-link to="/paralegal">Paralegal</router-link></li>
            <li><router-link to="/nota-fiscal">Nota Fiscal</router-link></li>
            <li><router-link to="/atendimento">Atendimento</router-link></li>
            <li><router-link to="/certificadora-digital">Certificadora Digital</router-link></li>
            <li><router-link to="/contato">Contato</router-link></li>
            <li><router-link to="/servicos-adicionais">Serviços Adicionais</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const showDropdown = ref(false)
const route = useRoute()
const servicosPaths = [
  '/contabilidade',
  '/folha-pagamento',
  '/fiscal',
  '/paralegal',
  '/nota-fiscal',
  '/atendimento',
  '/certificadora-digital',
  '/contato',
  '/servicos-adicionais'
]
const isServicosSelected = computed(() => servicosPaths.includes(route.path))
</script>

<style src="../styles/Header.css"></style>
