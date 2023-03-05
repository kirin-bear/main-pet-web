<template>
  <div>
    <LeftMenu />
    <div>Вот тут личный граф с фотографиями</div>
  </div>
</template>

<script>
import LeftMenu from "@/components/main/left-menu.vue";

export default {
  name: "memories-view",
  components: {
    LeftMenu
  }
}
</script>

<style scoped>

</style>