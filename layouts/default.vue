<template>
  <div class="appWrapper">
    <AppHeader />
    <main class="appMain">
      <slot/>
      </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.appWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.appMain {
  flex: 1;
  overflow: auto;
  padding: 80px 0;
  background-color: #282626;
}
</style>
