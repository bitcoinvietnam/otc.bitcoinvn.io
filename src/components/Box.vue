<template>
  <div class="rounded-4 gradient-border">
    <slot></slot>
  </div>
</template>

<style scoped>
.gradient-border {
  border: 0.5px solid;
  border-image: linear-gradient(45deg, var(--third-color), var(--third-color), var(--third-color)) 1;
}
</style>
