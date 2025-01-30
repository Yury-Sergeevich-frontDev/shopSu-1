<template>
  <header class="appHeader">
    <div class="containerContent">
      <NuxtLink to="/">LOGO</NuxtLink>
      <ToggleButton :isOpen="isOpen" @toggle="toggle"/>
      <LazyAppNav v-if="isOpen" />
    </div>
  </header>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const isOpen = ref(false);
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };




</script>

<style lang="scss" scoped>
  .appHeader {
    background: #2a2a2a;
    top: 0;
    position: fixed;
    width: 100%;
  }
</style>
