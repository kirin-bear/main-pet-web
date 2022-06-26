<script lang="ts">
import LeftMenu from "@/components/main/LeftMenu.vue";
import Body from "@/components/main/Body.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "SandboxView",
  components: {
    Body,
    LeftMenu
  }
});
</script>

<template>
  <div class="main-page">
    <LeftMenu />
    <Body />
  </div>
</template>

<style lang="scss">
  @import "src/assets/fonts/roboto-condensed.scss";
  @import "src/assets/variables";

  .main-page {
    background-image: url("@/assets/images/bear.png");
    height: 100vh;
    width: 100%;
    font-family: $font-family;
    background-size: cover;
    background-position-x: right;
    background-repeat: no-repeat;
  }
</style>