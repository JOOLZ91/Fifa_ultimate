<script setup lang="ts">
import Product from './Product.vue'
import { products as productList } from '../data'
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <Product
        v-for="({ id, name, description, price, img, legendary, attributes, position }, index) in productList"
        :key="index"
        :id="id"
        :name="name"
        :description="description"
        :price="price"
        :img="img"
        :legendary="legendary"
        :attributes="attributes"
        :position="position"
      />
    </v-row>
  </v-container>
</template>

<style scoped></style>
