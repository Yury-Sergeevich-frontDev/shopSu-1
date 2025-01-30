<template>
  <div>
    <h2>{{ rolls}}</h2>
    <CategoryNav/>

  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const rolls = computed(() => route.params.id);
</script>

<style lang="scss" scoped>

</style>
