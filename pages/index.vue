<template>
  <div>
    <CategoryNav/>
  </div>
</template>

<script setup>
  definePageMeta ({
    layout: 'default',
  }),

  useHead ({
    title: 'Главная',
    meta: [
      {
        name: 'description',
        content: 'Главная страница',
      },
    ],
  })
</script>

<style lang="scss" scoped>

</style>
