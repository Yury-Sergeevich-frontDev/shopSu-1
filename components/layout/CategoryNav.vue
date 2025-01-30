<template>
      <ul class="categoryNavList">
        <li class="categoryNavItem">
          <NuxtLink class="categoryNavLink" to="/">сэты</NuxtLink>
        </li>
        <li class="categoryNavItem">
          <NuxtLink class="categoryNavLink" to="category/rolls/[id]">роллы</NuxtLink>
        </li>
        <li class="categoryNavItem">
          <NuxtLink class="categoryNavLink" to="category/set">пицца</NuxtLink>
        </li>
        <li class="categoryNavItem">
          <NuxtLink class="categoryNavLink" to="/">вок</NuxtLink>
        </li>
        <li class="categoryNavItem">
          <NuxtLink class="categoryNavLink" to="/">супы</NuxtLink>
        </li>
      </ul>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .categoryNavList {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;

  }

  .categoryNavItem {
    margin: 0 10px;
    width: 150px;
    height: 150px;
    border: 1px solid #000;
    background: #404040;
  }

  .categoryNavLink {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #ffffff;
  }
</style>
