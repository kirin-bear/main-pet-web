<template>
  <div>
    <LeftMenu />
    <Sandbox />
  </div>
</template>

<script lang="ts">
import Sandbox from "@/components/main/sandbox.vue";
import LeftMenu from "@/components/main/left-menu.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sandbox-view",
  components: {
    Sandbox,
    LeftMenu
  }
});
</script>

<style lang="scss">
  @import "src/assets/fonts/roboto-condensed.scss";
  @import "src/assets/variables";

  div {
    font-family: $font-family;
  }

</style>