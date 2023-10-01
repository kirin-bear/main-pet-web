<template>
  <div>
    <LeftMenu />
    <Memories />
  </div>
</template>

<script>
import LeftMenu from "@/components/main/left-menu.vue";
import Memories from "@/components/main/user/memories.vue";

export default {
  name: "memories-view",
  components: {
    Memories,
    LeftMenu
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>