<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <Component
    v-bind="linkProps"
    :key="link.slug"
    :aria-label="link.title"
    class="flex font-medium group whitespace-nowrap text-gray-400 text-white"
    :class="{
      [activeClass]: forceActive || currentSlug === link.slug,
      [inactiveClass]: !forceActive && currentSlug !== link.slug,
      'text-black': currentPreference == 1 && !isHome
    }"
  >
    <slot />
  </Component>
</template>

<script>
import { defineComponent, computed, useContext } from '@nuxtjs/composition-api'
import { useNav } from '~/plugins/nav'

export default defineComponent({
  props: {
    link: {
      type: Object,
      required: true
    },
    forceActive: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: 'text-primary'
    },
    inactiveClass: {
      type: String,
      default: 'hover:d-primary-text-hover'
    }
  },
  setup(props) {
    const { currentSlug, isHome } = useNav()

    const linkProps = computed(() => {
      const { to, href } = props.link
      if (to?.length) {
        return {
          is: 'AppLink',
          to
        }
      } else if (href?.length) {
        return {
          is: 'AppLink',
          href
        }
      } else {
        return {
          is: 'span'
        }
      }
    })
    const { $colorMode } = useContext()
    const values = ['system', 'light', 'dark']
    const currentPreference = values.indexOf($colorMode.preference)
    return {
      currentSlug,
      linkProps,
      currentPreference,
      isHome
    }
  }
})
</script>

<style scoped lang="postcss">
.nuxt-link-active {
  /* color: #fff; */
}
.menu li {
  display: block;
  position: relative;
}
</style>
