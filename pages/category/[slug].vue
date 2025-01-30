<template>
  <div>
    <h2>{{ category }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const category = computed(() => route.params.slug);
</script>

<style lang="scss" scoped>

</style>
