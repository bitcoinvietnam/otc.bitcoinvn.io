<template>
  <section class="pb-5 pb-md-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-flex justify-content-center justify-content-lg-end">
          <img src="@/assets/chess.png" class="leadership-art" height="auto" />
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
section {
  height: 50vh;
}

@media (max-width: 768px) {
  section {
    min-height: fit-content;
  }
}

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

.leadership-art {
  width: 27rem;
}

@media (max-width: 768px) {
  .leadership-art {
    width: 12rem;
  }
}
</style>
