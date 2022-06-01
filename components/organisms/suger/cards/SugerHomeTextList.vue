<template>
  <div class="relative rounded-lg" :class="[bkColor]">
    <section class="relative z-10 rounded-lg">
      <NuxtContainer class="flex flex-col items-center p-12 sm:p-8 text-sky-black">
        <div class="flex flex-col w-full col-span-12">
          <h3 class="font-normal font-serif text-left text-display-6 mb-2" :style="{ color: titleColor }">
            <Markdown use="title" unwrap="p" />
          </h3>
          <h2 class="font-normal font-serif text-left text-display-6 mb-6" :style="{ color: subtitleColor }">
            <Markdown use="subtitle" unwrap="p" />
          </h2>
          <!-- <p class="font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-4">
            <Markdown use="description" unwrap="p" />
          </p> -->
          <ul>
            <template v-for="(text, index) in textList">
              <li :key="text" class="text-display-10" :style="{ color: index == 0 ? '#909090' : textColor }">
                {{ text }}
              </li>
            </template>
          </ul>
        </div>
      </NuxtContainer>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    textList: {
      type: Array,
      default: () => {
        return []
      }
    },
    bkColor: {
      type: String,
      default: 'white'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    subtitleColor: {
      type: String,
      default: 'white'
    },
    titleColor: {
      type: String,
      default: 'white'
    }
  }
})
</script>
