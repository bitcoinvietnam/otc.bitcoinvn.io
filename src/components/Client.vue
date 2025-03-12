<script setup lang="ts">
import Box from './Box.vue'
</script>

<template>
  <section class="section">
    <Box class="gradient-big-box py-5">
      <h2 class="pb-md-3">WHO WE SERVE</h2>
      <div class="container">
        <div class="row justify-content-center px-1 px-md-3 gap-5">
          <Box class="col-md-3 gradient-small-box">
            <div class="icon-container">
              <img src="@/assets/icons/corporate.png" alt="Corporate Icon" />
            </div>
            <h3>Corporate & Institutional Clients</h3>
            <ul>
              <li>Secure and efficient execution for high-volume transactions</li>
              <li>Dedicated support for compliance & treasury management</li>
            </ul>
          </Box>
          <Box class="col-md-3 gradient-small-box">
            <div class="icon-container">
              <img src="@/assets/icons/privacy.png" alt="Privacy Icon" />
            </div>
            <h3>Privacy-Oriented Investors</h3>
            <ul>
              <li>Discreet & non-custodial solutions for Bitcoin transactions</li>
              <li>Dedicated support for compliance</li>
            </ul>
          </Box>
          <Box class="col-md-3 gradient-small-box">
            <div class="icon-container">
              <img src="@/assets/icons/hnw.png" alt="HNW Icon" />
            </div>
            <h3>HNWI & Family Offices (FOs)</h3>
            <ul>
              <li>Customized Bitcoin acquisition & wealth preservation</li>
              <li>Concierge-level service with deep liquidity access</li>
            </ul>
          </Box>
        </div>
      </div>
    </Box>
  </section>
</template>

<style scoped>
.gradient-big-box {
  background:
    radial-gradient(circle at 0% 50%, var(--third-color) 5%, transparent 30%),
    radial-gradient(circle at 96% 25%, var(--third-color) 5%, transparent 30%);
  background-color: #0d1323;
  width: 75vw;
}


@media (max-width: 768px) {
  .gradient-big-box {
    width: 100vw;
  }
}

.gradient-small-box {
  background: radial-gradient(circle at 95% 0%, var(--third-color) 5%, transparent 50%);
  background-color: #0d1323;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 12px 0;
}

.icon-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  width: 40px;
  height: 40px;
}

ul {
  text-align: left;
}

ul li::marker {
  color: var(--primary-color);
  font-size: 1em;
}
</style>
