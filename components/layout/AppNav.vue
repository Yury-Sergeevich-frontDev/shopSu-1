<template>
    <div class="appNav">
      <ul class="appNavList">
        <li class="appNavItem">
          <NuxtLink class="appNavLink" to="/">Главная</NuxtLink>
          </li>
        <li class="appNavItem">
          <NuxtLink class="appNavLink" to="/about">About</NuxtLink>
          </li>
        <li class="appNavItem">
          <NuxtLink class="appNavLink" to="/contact">Contact</NuxtLink>
          </li>
        <li class="appNavItem">
          <NuxtLink class="appNavLink" to="/">Главная</NuxtLink>
          </li>
        <li class="appNavItem">
          <NuxtLink class="appNavLink" to="/about">About</NuxtLink>
          </li>
        <li class="appNavItem">
          <NuxtLink class="appNavLink" to="/contact">Contact</NuxtLink>
          </li>
      </ul>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.appNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.appNavList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.appNavItem {
  margin: 10px 0;
}

.appNavLink{
  color: white;
  text-decoration: none;
}

.buttonClose {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #d9d9d9;
  cursor: pointer;
}
</style>
