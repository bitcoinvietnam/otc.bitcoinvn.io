<template>
  <div class=" bg-[url('~/assets/images/main.jpg')]">
    <TopNav />
    <Welcome />
    <Customer />
    <Currency />
    <PrivateClient />
    <Team />
    <Service />
    <Info />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
