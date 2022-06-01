<template>
  <img
    src="https://uploads-ssl.webflow.com/6280284db2137d2c42b7c4b1/62802a2b5f1eee2ef590e190_suger_log_v2_white.png"
    loading="lazy"
    width="46"
    alt="logo"
    @click.right.prevent="$router.push(localePath('/design'))"
    @click="home"
  />
</template>

<script>
export default {
  methods: {
    home() {
      if (this.$docus.currentPath.value === '/') {
        // scroll to top
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>
