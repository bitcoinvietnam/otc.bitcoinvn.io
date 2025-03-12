<template>
  <section>
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img src="@/assets/chess.png" class="responsive-image" height="auto" />
        </div>
        <div class="col-lg-5 text-start">
          <h2>OUR TEAM LEADERSHIP</h2>
          <div class="quote-mark">“</div>
          <div class="fst-italic pb-4">
            "Our team has been able to pioneer this market since its early days. We have
            successively been able to build up a large liquidity network within Vietnam and nearby
            markets. If you feel we could provide a solution to your needs - we hope to have a
            conversation soon!"
          </div>
          <div class="left-border">
            <div>Nguyen Tran Bao Phuong</div>
            <div style="font-size: smaller">Founder</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quote-mark {
  font-size: 5rem;
  font-weight: bold;
  color: var(--primary-color);
  font-family: serif;
}

@media (max-width: 768px) {
  .quote-mark {
    font-size: 2.5rem;
  }
}

.left-border {
  border-left: 1px solid var(--primary-color);
  padding-left: 30px;
}

.responsive-image {
  width: 500px;
}

@media (max-width: 768px) {
  .responsive-image {
    width: 300px;
  }
}
</style>
