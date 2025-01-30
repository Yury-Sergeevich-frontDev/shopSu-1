<template>
    <button class="toggleButton" @click="$emit('toggle')">
      <Icon v-if="isOpen" name="ci:close-lg" size="28" color="white" class="icon"/>
      <Icon v-else name="ci:hamburger-lg" size="28" color="white" class="icon"/>
    </button>
</template>

<script lang="ts" setup>
import { defineProps, watch, toRef } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const isOpen = toRef(props, 'isOpen');
</script>
<style lang="scss" scoped>

  .toggleButton {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
}
  .toggleButton .icon {
    width: 30px;
    height: 30px;
    background: rgb(216, 212, 212);
    transition: all 0.3s;
    transform: scale(1);
  }
</style>
