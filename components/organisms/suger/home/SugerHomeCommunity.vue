<template>
  <section class="pb-20 pt-20 bg-secondary-black text-white">
    <NuxtContainer>
      <div class="flex flex-col items-center xl:items-start col-span-12">
        <h2 class="mb-2 font-serif font-normal text-display-6 md:text-display-5 2xl:text-display-4">
          <Markdown use="title" unwrap="p" />
        </h2>
        <p class="mb-12 font-normal text-body-base md:text-body-lg 2xl:text-body-xl w-1/2 text-center xl:text-left">
          <Markdown use="description" unwrap="p" />
        </p>
        <ul class="flex flex-col items-start grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-8">
          <li v-for="(post, index) in posts" :key="index" @click="showClickImg(post)">
            <div v-if="post" :class="post.hoverClass" class="cursor-pointer">
              <div
                class="aspect-h-8 bg-gray-100 bg-secondary-black text-center overflow-hidden mb-4 rounded-lg"
                :class="post.hoverClass"
              >
                <img :src="post.icon" :alt="post.name" class="w-8 inline-block" />
                <!-- <NuxtImg :src="post.icon || post.logo" :alt="post.name" loading="lazy" class="object-cover" /> -->
                <h3 class="text-body-xl lg:text-body-2xl font-bold mb-2 text-center">{{ post.name }}</h3>
              </div>
              <!-- <span class="text-primary text-body-base lg:text-body-lg font-bold mb-2">{{
                index > 0 ? eventsCategory : announcementsCategory
              }}</span> -->
              <!-- <p class="mb-4 text-body-base lg:text-body-lg truncate">{{ post.name }}</p> -->
            </div>
          </li>
        </ul>
        <div class="mt-8 sm:mt-16 xl:mt-24">
          <img :src="currentShowImg" />
        </div>
      </div>
    </NuxtContainer>
  </section>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    announcementsCategory: {
      type: String,
      default: ''
    },
    eventsCategory: {
      type: String,
      default: ''
    },
    articleLinkTitle: {
      type: String,
      default: ''
    }
  },
  setup() {
    const { $docus, i18n } = useContext()
    const posts = ref([])
    const currentShowImg = ref('')
    useFetch(async () => {
      const announcements = await $docus
        .search('/suger-home', { deep: true })
        .where({ language: i18n.locale })
        .sortBy('position', 'asc')
        .limit(1)
        .fetch()

      posts.value.push(...announcements[0].itemList)
      currentShowImg.value = posts.value[0].activeImg
    })

    const showClickImg = item => {
      currentShowImg.value = item.activeImg
    }
    return {
      posts,
      currentShowImg,
      showClickImg
    }
  }
})
</script>
