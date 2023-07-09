<script setup lang="ts">
import type { IProduct } from '../types'
import { useStore } from '../store'

const store = useStore()
const props = defineProps<IProduct>()
console.log(props)
</script>

<template>
  <v-col sm="6" md="4" lg="3" class="v-col-12 mb-4 px-4 px-lg-4 mb-lg-8 px-md-2 mb-md-4">
    <!-- <div class="box-item"> -->
    <div class="flip-box">
      <div
        class="flip-box-front product mx-auto h-100 d-flex flex-column"
        max-width="400"
        :class="{ legendary: legendary }"
      >
        <v-img class="product-img align-end text-white flex-grow-0" height="200" :src="img" cover> </v-img>
        <div class="product-title-wrapper">
          <v-card-title class="product-title">{{ name }}</v-card-title>
          <v-icon v-if="legendary" color="yellow">mdi-star-outline</v-icon>
        </div>
        <v-card-subtitle class="product-price pt-4"> Cena: {{ price }}PLN</v-card-subtitle>
        <v-card-text class="flex-grow-1">
          <div>{{ description }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="btn"
            :variant="legendary ? 'text' : 'tonal'"
            :color="legendary ? 'blue' : 'orange'"
            @click="store.dispatch('addProduct', props)"
          >
            Dodaj do koszyka
          </v-btn>
        </v-card-actions>
      </div>
      <v-card class="flip-box-back product mx-auto h-100 d-flex flex-column" :class="{ legendary: legendary }">
        <div class="attributes" height="200">
          <v-card-title>{{ position }}</v-card-title>
          <div class="attributes-item-wrapper">
            <div class="attributes-item">
              dribbling: <span>{{ attributes.dribbling }}</span>
            </div>
            <div class="attributes-item">
              shot: <span>{{ attributes.shot }}</span>
            </div>
            <div class="attributes-item">
              speed: <span>{{ attributes.speed }}</span>
            </div>
            <div class="attributes-item">
              defensive: <span>{{ attributes.defensive }}</span>
            </div>
            <div class="attributes-item">
              overall: <span>{{ attributes.overall }}</span>
            </div>
          </div>
        </div>
        <div class="product-title-wrapper">
          <v-card-title class="product-title">{{ name }}</v-card-title>
          <v-icon v-if="legendary" color="yellow">mdi-star-outline</v-icon>
        </div>
        <v-card-subtitle class="product-price pt-4"> Cena: {{ price }}PLN</v-card-subtitle>

        <v-card-text class="flex-grow-1">
          <div>{{ description }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            class="btn"
            :variant="legendary ? 'text' : 'tonal'"
            :color="legendary ? 'blue' : 'orange'"
            @click="store.dispatch('addProduct', props)"
          >
            Dodaj do koszyka
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <!-- </div> -->
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

.attributes {
  padding: 0 15px;
  height: 200px;
}

.attributes .v-card-title {
  text-align: center;
  border-bottom: 1px solid var(--text);
}

.attributes-item-wrapper {
  margin-top: 15px;
  border-bottom: 1px solid;
  padding-bottom: 15px;
}

.attributes-headline {
  font-weight: 500;
  text-align: center;
  font-size: 18px;
}

.attributes span {
  font-weight: 700;
}

/* FLIP CART */

.flip-box {
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  perspective: 1000px;
  -webkit-perspective: 1000px;
  height: 100%;
}

.flip-box-front,
.flip-box-back {
  background-size: cover;
  background-position: center;
  -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-front {
  -ms-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box-back {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;

  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-back {
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
</style>
