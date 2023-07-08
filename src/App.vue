<script setup lang="ts">
import { useStore } from './store'
import Header from './components/Header.vue'
import '@mdi/font/css/materialdesignicons.css'

const store = useStore()
</script>

<template>
  <!-- Alerts -->
  <div id="alert" v-if="store.getters.status.check">
    <v-alert variant="flat" closable :text="store.getters.status.text" :type="store.getters.status.type"></v-alert>
  </div>
  <!--  -->
  <!-- Main app -->
  <v-app class="app">
    <div id="header">
      <Header />
    </div>
    <RouterView />
  </v-app>
  <!--  -->
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  background: transparent;
}
</style>
