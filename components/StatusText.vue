<template >
  <div v-if="isShown" class="pt-2">
    <span :class="textClass">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    textClass: String,
    isShown: Boolean
  }
}
</script>
