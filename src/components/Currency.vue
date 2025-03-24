<template>
  <section class="pb-md-5">
    <div class="container w-75 w-md-50">
      <div class="row gap-3 gap-md-5 justify-content-center">
        <h2 class="pt-md-10 mb-md-10">Supported Currencies</h2>
        <div class="container">
          <div class="row justify-content-center gap-md-3">
            <div class="col-12 col-md-3 currency-box">
              <img src="@/assets/icons/tether.png" alt="USDT" />USDT (Tether)
            </div>
            <div class="col-12 col-md-3 currency-box">
              <img src="@/assets/icons/btc.png" alt="BTC" />BTC (Bitcoin)
            </div>
            <div class="col-12 col-md-3 currency-box">
              <img src="@/assets/icons/usdc.png" alt="USDC" />USDC
            </div>
          </div>
        </div>
        <div class="currency-box w-auto further-text px-1 px-md-5">
          <span class="fw-semibold" style="color: var(--primary-color)">Further common cryptocurrencies upon
            request</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 55vh;
}

@media (max-width: 768px) {
  section {
    min-height: fit-content;
  }
}

.currency-box {
  border-radius: 0;
  background-color: var(--third-color);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 3px;
  padding-right: 3px;
}

@media (max-width: 768px) {
  .currency-box {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: auto;
    display: flex;
    justify-content: start;
    align-items: center;
  }
}

.currency-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  width: 70px;
  height: 70px;
  margin-right: 3px;
}

@media (max-width: 768px) {
  .currency-box img {
    width: 40px;
    height: 40px;
    margin-right: 3px;
  }
}
</style>
