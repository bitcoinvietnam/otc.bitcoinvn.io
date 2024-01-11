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
      RocketChat(function () {
        this.setDepartment('OTC');
      });
      RocketChat(function () {
        this.maximizeWidget();
      });
    }

  }
}
</script>