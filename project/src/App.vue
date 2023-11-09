<template>
  <TheHeader
  />
  <router-view class="">

  </router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<script setup>
  import TheHeader from "@/components/layouts/TheHeader.vue"
</script>

