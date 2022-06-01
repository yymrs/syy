<template>
  <div>
    <img
      loading="lazy"
      :src="`/img/home/discover/modules/dark/landscape-discover-modules-t.svg`"
      class="absolute left-0 object-fill w-full h-40 -mt-24"
      alt="A landscape image"
    />
    <HomeSection class="py-20 bg-sky-darkest text-white">
      <template #section-content>
        <SectionContent>
          <template #title>
            <h2
              class="font-normal text-center md:text-left font-serif text-display-6 md:text-display-5 2xl:text-display-4"
            >
              <Markdown use="title" unwrap="p" />
            </h2>
          </template>

          <template #paragraph>
            <p class="text-center font-normal text-body-base md:text-body-lg 2xl:text-body-xl">
              <Markdown use="description" unwrap="p" />
            </p>
          </template>

          <template #content>
            <div class="flex justify-center">
              <img
                src="https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM.png"
                loading="lazy"
                sizes="80vw"
                srcset="
                  https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM-p-500.png   500w,
                  https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM-p-800.png   800w,
                  https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM-p-1080.png 1080w,
                  https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM-p-1600.png 1600w,
                  https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM-p-2000.png 2000w,
                  https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM-p-2600.png 2600w,
                  https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62803c99cf53a25bf5c6344b_Screen%20Shot%202022-05-14%20at%204.34.34%20PM.png        2868w
                "
                alt="Main dash
"
              />
            </div>
          </template>

          <template #button>
            <div class="w-full self-start">
              <Markdown use="bottom" unwrap="p" />
            </div>
          </template>
        </SectionContent>
      </template>
    </HomeSection>
    <img
      loading="lazy"
      :src="`/img/home/discover/modules/dark/landscape-discover-modules-b.svg`"
      class="absolute left-0 z-10 object-fill w-full h-40 -mt-20"
      alt="A landscape image"
    />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>
