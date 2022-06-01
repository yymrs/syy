<template>
  <div class="relative pb-48 sm:pb-24 md:pb-32 lg:pb-36 xl:pb-46 bg-sky-surface">
    <section class="relative pt-20 z-10">
      <NuxtContainer class="flex flex-col items-center xl:pt-10 text-sky-black">
        <div class="flex flex-col w-full items-center col-span-12">
          <h2 class="font-normal font-serif text-center text-display-6 md:text-display-5 2xl:text-display-4 mb-2">
            <Markdown use="title" unwrap="p" />
          </h2>
          <p class="font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-8">
            <Markdown use="description" unwrap="p" />
          </p>
          <div class="grid grid-cols-1 w-full sm:grid-cols-2 gap-12 sm:gap-8 xl:gap-24 sm:px-8 xl:px-48 pt-8 pb-8">
            <Markdown use="pricing-card" unwrap="p" />
          </div>
          <p><Markdown use="bottom" unwrap="p" /></p>
        </div>
      </NuxtContainer>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {}
})
</script>
