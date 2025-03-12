<script setup lang="ts">
import Box from './Box.vue'
import Btn from './Btn.vue'
</script>

<template>
  <section>
    <Box class="container gradient-big-box">
      <div class="row gap-4 justify-content-center py-5">
        <h2 class="text-white d-flex align-items-center justify-content-center">
          <img src="@/assets/bv-prime.png" alt="BV Prime Logo" width="auto" height="50"
            class="d-inline-block align-top" />BV
          <span class="prime-name-gradient ms-1" style="text-transform: none; letter-spacing: 1px">Prime</span>
        </h2>
        <div>
          <div>Premium, tailored services from the team behind BitcoinVN</div>
          <div>Join our BV Prime Newsletter for exclusive updates.</div>
        </div>
        <div>
          <a href="https://newsletter.bitcoinvn.io/private-client" target="_blank">
            <Btn style="height: fit-content">SUBSCRIBE</Btn>
          </a>
        </div>
      </div>
      <!-- <div class="col-md-4">
        <div class="prime-art"></div>
      </div> -->
    </Box>
  </section>
</template>

<style scoped>
.gradient-big-box {
  background:
    radial-gradient(circle at 0% 50%, var(--third-color) 5%, transparent 30%),
    radial-gradient(circle at 96% 25%, var(--third-color) 5%, transparent 30%);
  background-color: #0d1323;
  width: 70vw;
}

@media (max-width: 768px) {
  .gradient-big-box {
    width: 100vw;
  }
}


.prime-name-gradient {
  background-clip: text;
  color: transparent;
  font-weight: 700;
  background: linear-gradient(45deg, #b4904b, #e4ca7a, #968b67);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.prime-art {
  position: sticky;
  width: 100%;
  height: auto;
  /* background-color: var(--secondary-color); */
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%),
    url('@/assets/handshake.png') center/cover no-repeat;
}

.prime-art::after {
  content: '';
  position: absolute;
  bottom: 100;
  left: 0;
  width: 25%;
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, var(--secondary-color) 100%);
}
</style>
