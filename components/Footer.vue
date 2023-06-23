<template>
  <div class="flex py-8 text-center bg-gray-900/100">
    <div class="m-auto">
      <div class="flex flex-col space-y-3 text-gray-600">
        <div class="text-center sub-title external-link">
          <NuxtLink to="/contact">
            Contact Us
          </NuxtLink>
        </div>
        <div class="flex flex-row tracking-wide">
          <div v-for="item in external_links" :key="item.caption" class="px-2 external-link">
            <a :href="item.url" target="_blank">
              {{ item.caption }}
            </a>
          </div>
        </div>
        <div class="text-sm tracking-wide">
          © 2014 - {{ new Date().getFullYear() }} BitcoinVN
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      external_links: [
        {
          caption: 'Exchange',
          url: 'https://bitcoinvn.io'
        },
        {
          caption: 'News',
          url: 'https://news.bitcoinvn.io'
        },
        {
          caption: 'Shop',
          url: 'https://shop.bitcoinvn.io'
        },
        {
          caption: 'OTC',
          url: 'https://otc.bitcoinvn.io'
        },
        {
          caption: 'BTM',
          url: 'https://btm.bitcoinvn.io'
        },
        {
          caption: 'Newsletter',
          url: 'https://newsletter.bitcoinvn.io'
        },
      ]
    }
  }
}
</script>
