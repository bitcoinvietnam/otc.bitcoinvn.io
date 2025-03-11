<template>
  <section>
    <div class="container" style="width: 50vw">
      <div class="row gap-5 justify-content-center">
        <h2 class="pt-10 mb-10">Supported Currencies</h2>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-3 currency-box">
              <img src="@/assets/icons/tether.png" alt="USDT" />USDT (Tether)
            </div>
            <div class="col-md-3 currency-box">
              <img src="@/assets/icons/btc.png" alt="BTC" />BTC (Bitcoin)
            </div>
            <div class="col-md-3 currency-box">
              <img src="@/assets/icons/usdc.png" alt="USDC" />USDC
            </div>
          </div>
        </div>
        <div class="currency-box w-auto further-text px-0 px-md-5">
          <span class="fw-semibold" style="color: var(--primary-color)"
            >Further common cryptocurrencies upon request</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.currency-box {
  border-radius: 0;
  background-color: var(--third-color);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 3px;
  padding-right: 5px;
}

.currency-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  width: 70px;
  height: 70px;
  margin-right: 7px;
}
</style>
