<script setup lang="ts">
import { useStore } from '../store'

const store = useStore()
</script>

<template>
  <v-app-bar class="v-app-bar">
    <div class="app-bar-wrapper container">
      <RouterLink to="/">
        <v-toolbar-title> FIFA 23 </v-toolbar-title>
      </RouterLink>
      <v-spacer></v-spacer>
      <RouterLink to="/cart">
        <div class="btn btn-icon">
          <v-badge class="badge" color="orange" :content="store.getters.cartProductsSum">
            <v-icon color="black">mdi-cart-outline</v-icon>
          </v-badge>
        </div>
      </RouterLink>
    </div>
  </v-app-bar>
</template>

<style scoped>
.app-bar-wrapper {
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
  display: flex;
}
</style>
