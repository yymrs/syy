<template>
  <div class="flex flex-col space-y-4 items-center text-center pb-8 sm:pb-10 md:pb-16">
    <img :src="icon" :alt="category" :srcset="srcset" style="max-width: 100%" />
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    srcset: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
