<template>
  <div class="flex main-section bg-gray-900/90">
    <div class="m-auto">
      <div class="flex flex-col space-y-5">
        <div class="main-title">
          Our Team Leadership
        </div>
        <div class="flex flex-col space-y-4 text-center">
          <div>
            <img :src="require(`~/assets/images/leader-avt.jpg`)"
              class="inline w-32 h-32 border-2 rounded-full md:w-44 md:h-44" />
          </div>
          <div class="text-gold-600 md:text-xl">
            Nguyen Tran Bao Phuong
          </div>
        </div>
        <div class="text-lg italic text-justify md:text-2xl md:px-20 md:leading-relaxed">
          “Our team has been able to pioneer this market since its early days. We have successively been able to build up
          a large liquidity network within Vietnam as well as in many neighbouring countries. If you feel we could provide
          a solution to your needs - we hope to have a conversation soon!”
        </div>
      </div>
    </div>
  </div>
</template>