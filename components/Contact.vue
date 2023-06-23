<template>
  <div class="flex main-section bg-gray-900/90">
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
                  class="w-full max-w-2xl px-2 py-2 text-base leading-tight text-gray-900 bg-gray-400 border border-gray-200 rounded appearance-none md:text-lg placeholder:text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500" />
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
                  class="w-full max-w-2xl px-2 py-2 text-sm leading-tight text-gray-900 bg-gray-400 border border-gray-200 rounded appearance-none placeholder:text-gray-900 focus:outline-none focus:bg-white focus:border-gray-500" />
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
      message: '',
      btc: false,
      eth: false,
      usdt: false,
      usdc: false,
      endpoint: 'https://formspree.io/f/mdobajgq',
    }
  },
  methods: {
    async submit() {
      if (!this.email || !this.message) {
        return
      }

      const data = {
        email: this.email,
        message: this.message,
        interested_coins: {
          btc: this.btc,
          eth: this.eth,
          usdt: this.usdt,
          usdc: this.usdc
        }
      }
      const resp = await fetch(this.endpoint, {
        method: 'POST',
        body: JSON.stringify(data)
      })

      console.log(JSON.stringify(resp))
    },
  },
}
</script>