<template>
  <button type="button" class="w-50 btn btn-responsive-size btn-sm text-uppercase fw-semibold rounded-pill" style="
      background: linear-gradient(to right, var(--primary-color), #ff3300);
      color: var(--text-color);
      max-width: 40%;
    ">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn-responsive-size {
  font-size: 1.2rem;
  padding: 10px 20px;
  min-width: fit-content;
}

@media (max-width: 768px) {
  .btn-responsive-size {
    font-size: 0.8rem;
    font-weight: 300;
  }
}
</style>
