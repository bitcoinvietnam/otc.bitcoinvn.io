<script setup lang="ts">
import Btn from './Btn.vue'
</script>

<template>
  <section>
    <div>
      <div class="intro-text">High-Volume Crypto Trading. Executed with Precision</div>
      <div class="pt-3 pb-3">
        <div class="outlined-text glow-text fw-medium display-2" style="color: var(--primary-color)">
          BitcoinVN OTC
        </div>
        <span class="fst-italic" style="color: var(--primary-color)">(est 2014)</span>
      </div>
      <div class="intro-text">Trusted by HNWI & insitutions in Vietnam and globally</div>
      <div class="intro-text">Personalized service, deep liquidity, and fast settlement</div>
      <div class="pt-5">
        <Btn id="contact-btn-1">Get In Touch</Btn>
      </div>
    </div>
  </section>
</template>

<style scoped>
.outlined-text {
  -webkit-text-stroke: 1px #ffdd00;
}

.intro-text {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .intro-text {
    font-size: 1rem;
  }
}

.glow-text {
  text-shadow: 0 0 3px var(--primary-color), 0 0 8px var(--primary-color);
}
</style>
