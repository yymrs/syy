<template>
  <div class="flex flex-col space-y-4 items-center text-center">
    <img :src="icon" :alt="category" :srcset="srcset" width="130" style="max-width: 100%" />
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
