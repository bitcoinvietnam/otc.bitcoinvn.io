<template>
  <div class="flex main-section bg-gray-900/90">
    <div class="m-auto">
      <div class="flex flex-col space-y-5 md:space-y-10">
        <div class="main-title">
          Private Client Service
        </div>
        <div class="flex flex-col space-y-4 text-left md:text-center">
          <div class="text-xl md:mx-auto">
            <ul class="space-y-3 md:space-y-5 md:tracking-wider">
              <li>
                Looking for a premium service highly tailored to your needs?
              </li>
              <li>
                Join our Private Client Newsletter to get more updates.
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center">
          <a href="https://newsletter.bitcoinvn.io/private-client" target="_blank">
            <button class="btn" @click="subscribe">
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      invalidEmail: false,
      success: false,
      loading: false
    }
  },
  methods: {
    validateEmail() {
      if (!this.email) {
        this.invalidEmail = false
        return
      }
      this.loading = false
      this.success = false
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.invalidEmail = false
      } else {
        this.invalidEmail = true
      }
    },

    async subscribe() {
      if (!this.email) {
        this.invalidEmail = true
        return
      }

      if (this.invalidEmail) {
        return
      }

      this.loading = true
      this.success = false

      if (this.invalidEmail) {
        return
      }
      if (!this.email) {
        this.invalidEmail = true
        return
      }
      const result = await fetch('https://mailcoach.bitcoinvn.io/subscribe/3ba607bb-7c81-4fc8-950a-46af2a4999a7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          form_email: this.email
        })
      })
      if (result.status === 200) {
        this.loading = false
        this.success = true
      } else {
        this.loading = false
        this.success = false
      }
    }
  }
}
</script>