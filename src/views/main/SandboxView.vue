<template>
  <div>
    <LeftMenu />
    <Sandbox />
  </div>
</template>

<script>
import Sandbox from "@/components/main/Sandbox.vue";
import LeftMenu from "@/components/main/LeftMenu.vue";
export default {
  name: "SandboxView",
  components: {LeftMenu, Sandbox}
}
</script>

<style lang="scss">
  @import "src/assets/fonts/roboto-condensed.scss";
  @import "src/assets/variables";

  div {
    font-family: $font-family;
  }

</style>