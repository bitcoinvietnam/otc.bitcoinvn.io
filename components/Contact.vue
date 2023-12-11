<template>
  <div class="flex py-3 overflow-y-auto main-section bg-gray-900/90">
    <div class="m-auto">
      <div class="flex flex-col space-y-7">
        <div class="text-xl main-title md:text-3xl">
          Contact
        </div>
        <div class="text-base md:text-lg md:mx-auto">
          <form @submit.prevent="submit">
            <div class="flex flex-col space-y-5 md:space-y-5 md:tracking-wide">
              <div>
                <input type="email" v-model="email" placeholder="Your Email"
                  class="w-full max-w-2xl px-2 py-2 text-base leading-tight text-gray-900 bg-gray-400 border border-gray-200 rounded appearance-none md:min-w-full md:text-lg placeholder:text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500" />
              </div>
              <div v-if="!isValidEmail" class="text-red-500">
                Please enter a valid email address.
              </div>
              <div>
                <input type="tel" v-model="phone" placeholder="Your Telephone Number"
                  class="w-full max-w-2xl px-2 py-2 text-base leading-tight text-gray-900 bg-gray-400 border border-gray-200 rounded appearance-none md:min-w-full md:text-lg placeholder:text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500" />
              </div>
              <div v-if="!isValidPhone" class="text-red-500">
                Please enter a valid phone number.
              </div>
              <div>
                <input type="text" v-model="telegram" placeholder="Your Telegram Handle"
                  class="w-full max-w-2xl px-2 py-2 text-base leading-tight text-gray-900 bg-gray-400 border border-gray-200 rounded appearance-none md:min-w-full md:text-lg placeholder:text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500" />
              </div>
              <div v-if="!isValidTelegram" class="text-red-500">
                Please enter a valid Telegram handle.
              </div>
              <div>
                <div class="flex flex-col space-y-3">
                  <div>
                    Asset(s) you interested in:
                  </div>
                  <div class="flex flex-row space-x-4 ">
                    <div class="flex flex-row space-x-1">
                      <input type="checkbox" id="btc" v-model="btc" /><label for="btc" class="">BTC</label>
                    </div>
                    <div class="flex flex-row space-x-1">
                      <input type="checkbox" id="eth" v-model="eth" /><label for="eth">ETH</label>
                    </div>
                    <div class="flex flex-row space-x-1">
                      <input type="checkbox" id="usdt" v-model="usdt" /><label for="usdt">USDT</label>
                    </div>
                    <div class="flex flex-row space-x-1">
                      <input type="checkbox" id="usdc" v-model="usdc" /><label for="usdc">USDC</label>
                    </div>
                  </div>
                  <div class="text-sm italic">
                    If you are interested in other coins, please tell us more below.
                  </div>
                </div>
              </div>
              <div>
                <textarea v-model="message" placeholder="Your Message (Optional)" rows="6"
                  class="w-full max-w-2xl px-2 py-2 text-sm leading-tight text-gray-900 bg-gray-400 border border-gray-200 rounded appearance-none md:min-w-full placeholder:text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500" />
              </div>
              <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">
              <div v-if="successResp" class="text-green-600">
                <div class="font-bold">
                  Thank you for contacting us.
                </div>
                <div class="font-bold">
                  We will get back to you shortly via the provided email.
                </div>
                <div class="text-gray-500">You can safely close this tab now.</div>
              </div>
              <div class="text-sm italic">
                We reply within the same day - please also check your spam folder carefully.
              </div>
            </div>
          </form>

        </div>
        <div class="text-center">
          <button class="btn" @click="submit">Submit</button>
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
      phone: '',
      telegram: '',
      message: '',
      btc: false,
      eth: false,
      usdt: false,
      usdc: false,
      endpoint: "https://formspree.io/f/xjvqnpjn",
      isValidEmail: true,
      isValidPhone: true,
      isValidTelegram: true,
      successResp: false
    }
  },
  methods: {
    validateEmail(email) {
      if (!email) {
        return false
      }
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
      }
      return false
    },

    validatePhone(phone) {
      if (!phone) {
        return false
      }
      return true
    },

    validateTelegram(handle) {
      if (!handle) {
        return false
      }
      return true
    },

    async submit() {
      this.successResp = false
      this.isValidEmail = this.validateEmail(this.email)
      this.isValidPhone = this.validatePhone(this.phone)
      this.isValidTelegram = this.validateTelegram(this.telegram)
      if (!this.isValidEmail || !this.isValidPhone || !this.isValidTelegram) {
        return false
      }
      let captcha_token = document.getElementById('g-recaptcha-response').value;
      const data = {
        "g-recaptcha-response": captcha_token,
        email: this.email,
        message: this.message,
        phone: this.phone,
        telegram: this.telegram,
        interested_coins: {
          btc: this.btc,
          eth: this.eth,
          usdt: this.usdt,
          usdc: this.usdc
        }
      }
      // Formspree side will send an email for confirmation.
      // So we just display a thank you note here
      this.successResp = true
      const resp = await fetch(this.endpoint, {
        method: 'POST',
        body: JSON.stringify(data)
      })
    },
  },
}
</script>