<script setup lang="ts"></script>

<template>
  <h1 class="not-found">Page not found 404</h1>
  <RouterLink class="go-back" to="/">Wróć do strony głównej</RouterLink>
</template>

<style scoped>
.not-found {
  color: #fff;
  font-size: 45px;
}
.go-back {
  color: var(--secondary);
}
</style>
