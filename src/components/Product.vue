<script setup lang="ts">
import type { IProduct } from '../types'
import { useStore } from '../store'

const store = useStore()

const props = defineProps<IProduct>()
</script>

<template>
  <v-col sm="6" md="4" lg="3" class="v-col-12 mb-4 px-4 px-lg-4 mb-lg-8 px-md-2 mb-md-4">
    <v-card class="product mx-auto h-100 d-flex flex-column" max-width="400">
      <v-img class="product-img align-end text-white flex-grow-0" height="200" :src="img" cover> </v-img>
      <v-card-title class="product-title">{{ name }}</v-card-title>
      <v-card-subtitle class="product-price pt-4"> Cena: {{ price }}PLN</v-card-subtitle>

      <v-card-text class="flex-grow-1">
        <div>{{ description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn class="btn" variant="tonal" color="orange" @click="store.dispatch('addProduct', props)">
          Dodaj do koszyka
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<style scoped>
.product {
  border-radius: 30px 30px 5px 5px;
}
.product-title {
  font-weight: bold;
  font-size: 18px;
  color: var(--text);
}

.product-price {
  font-weight: 700;
  font-size: 16px;
  color: var(--text);
  opacity: 1;
}
</style>
