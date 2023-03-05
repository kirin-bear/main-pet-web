<template>
  <div>
    <LeftMenu/>
    <div>Вот тут информация обо мне</div>
  </div>
</template>

<script>
import LeftMenu from "@/components/main/left-menu.vue";

export default {
  name: "about-view",
  components: {
    LeftMenu
  }
}
</script>

<style scoped>

</style>