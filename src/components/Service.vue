<script setup lang="ts">
import Btn from './Btn.vue'
</script>

<template>
  <section class="container">
    <div class="row half-circle-container gap-md-3">
      <div class="half-circle"></div>
      <h2>Personalized 1-ON-1<br />Service</h2>
      <ul>
        <li>Initial high-touch consultation to help your trade execution.</li>
        <li>A decade of experience executing high volume orders.</li>
        <li>Long-lasting, trusted and mutually beneficial client relationship.</li>
      </ul>
      <div style="z-index: 1;">
        <a href="#_">
          <Btn> Contact Now </Btn>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 50vh;
}

@media (max-width: 768px) {
  section {
    height: auto;
  }
}

.half-circle-container {
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.half-circle {
  position: absolute;
  bottom: -20;
  width: 45%;
  height: 550px;
  background-color: transparent;
  border-top: 5px solid var(--primary-color);
  border-radius: 50% 50% 0 0;
}

@media (max-width: 768px) {
  .half-circle {
    width: 120%;
    height: 430px;
  }
}

ul {
  text-align: center;
  list-style-position: inside;
}

ul li::marker {
  color: white;
}

li {
  padding: 5px;
}
</style>
