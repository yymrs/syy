<template>
  <section class="relative pt-12" :style="{ backgroundColor }">
    <NuxtContainer class="flex flex-col items-center text-white">
      <div class="flex flex-col w-full items-center col-span-12">
        <h2 class="mb-2 text-black font-serif font-normal text-display-6 md:text-display-5 2xl:text-display-4">
          <Markdown use="title" unwrap="p" />
        </h2>
        <div class="grid grid-cols-2 pt-8 sm:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-20 pb-8">
          <Markdown use="img-card" unwrap="p" />
        </div>
      </div>
    </NuxtContainer>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    }
  }
})
</script>
