<script setup lang="ts">
import { useStore } from '../store'

const store = useStore()
</script>

<template>
  <div id="cart" class="cart container" v-if="store.getters.products.length > 0">
    <div class="cart-wrapper">
      <v-col
        sm="6"
        md="4"
        lg="3"
        class="cart-item-wrapper v-col-12 mb-4 px-4 px-lg-4 mb-lg-8 px-md-2 mb-md-4"
        v-for="({ id, name, price, count, description, img }, index) in store.getters.products"
        :key="index"
      >
        <v-card class="cart-item product mx-auto h-100 d-flex flex-column" max-width="400">
          <v-img class="cart-img align-end text-white flex-grow-0" height="200" :src="img" cover> </v-img>
          <v-card-title class="cart-title">{{ name }}</v-card-title>
          <v-card-subtitle class="cart-price pt-4"> Cena: {{ price }}PLN</v-card-subtitle>

          <v-card-text class="flex-grow-1">
            <div class="cart-description">{{ description }}</div>
          </v-card-text>
          <v-card-text>
            <div class="cart-quantity">
              Ilość: <span>{{ count }}</span>
            </div>
          </v-card-text>
          <v-btn class="btn" variant="tonal" @click="store.dispatch('removeProduct', id)">Usuń</v-btn>
        </v-card>
      </v-col>
    </div>
    <div class="cart-summary">
      <div class="cart-summary-wrapper">
        <h3 class="cart-headline">Twój koszyk</h3>
        <div class="cart-quantity">
          Ilość kart: <span>{{ store.getters.cartProductsSum }}</span>
        </div>
        <div class="cart-total">
          Wartość zamówienia: <span>{{ store.getters.cartPriceSum }}PLN</span>
        </div>
        <v-btn
          :disabled="!store.getters.hasProducts"
          color="orange"
          variant="elevated"
          @click="store.dispatch('sendProducts')"
          >Złóż zamówienie</v-btn
        >
        <div v-if="store.getters.status.sending">
          <v-progress-circular
            class="circular-progress"
            :size="70"
            :width="7"
            color="purple"
            indeterminate
          ></v-progress-circular>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="cart-no-products">
    <h2>Nie posiadasz żadnej karty w koszyku</h2>
    <RouterLink class="go-back" to="/">Wróć do strony głównej i wrzuć pierwszą kartę do koszyka!</RouterLink>
  </div>
</template>

<style scoped>
.cart {
  display: flex;
  gap: 60px;
  flex-direction: column;
}
@media (min-width: 757px) {
  .cart {
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 60px;
  }
}

.cart-summary {
  background-color: #fff;
  padding: 25px 15px;
  border-radius: 5px;
  height: fit-content;
  margin: 0 15px;
}
@media (min-width: 757px) {
  .cart-summary {
    max-width: 400px;
    position: sticky;
    top: 85px;
  }
}
.cart-item-wrapper {
  padding-top: 0;
}
.cart-no-products h2 {
  margin-bottom: 1rem;
}
.cart-headline {
  text-align: left;
  font-size: 20px;
  color: var(--text);
  margin-bottom: 10px;
}
.cart-total {
  margin-bottom: 10px;
}
.cart-img img {
  max-width: 100%;
  width: 100%;
}
span {
  font-weight: 700;
}

.cart-item {
  border-radius: 30px 30px 5px 5px;
  padding-top: 0;
}
.cart-title {
  font-weight: bold;
  font-size: 18px;
  color: var(--text);
}

.cart-price {
  font-weight: 700;
  font-size: 16px;
  color: var(--text);
  opacity: 1;
}
.cart-quantity {
  font-size: 16px;
}
.cart-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.circular-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
