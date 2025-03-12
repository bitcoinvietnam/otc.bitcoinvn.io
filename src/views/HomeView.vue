<script setup lang="ts">
import Intro from '@/components/Intro.vue'
import Client from '@/components/Client.vue'
import Currency from '@/components/Currency.vue'
import Header from '@/components/Header.vue'
import Leadership from '@/components/Leadership.vue'
import Prime from '@/components/Prime.vue'
import Service from '@/components/Service.vue'
import Outro from '@/components/Outro.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="background" id="_">
    <Header />
    <Intro />
  </div>
  <Client class="fade-in" />
  <Currency class="fade-in" />
  <Service class="fade-in" />
  <Leadership />
  <Prime />
  <Outro />
  <Footer />
</template>

<style scoped>
.background {
  position: relative;
  width: 100%;
  height: auto;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%),
    url('@/assets/main-bg.webp') center/cover no-repeat;
}

.background::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  /* Adjust fade height */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--secondary-color) 100%);
}

@media (max-width: 768px) {
  .background::after {
    height: 15%;
  }
}
</style>
