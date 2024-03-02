<template>
  <div>
    <button class="btn" @click="contact">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    contact() {
      FreshworksWidget('show');
    }

  }
}
</script>