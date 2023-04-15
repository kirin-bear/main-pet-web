<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import Body from "@/components/main/body.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "main-view",
  components: {
    Body,
    LeftMenu
  }
});
</script>

<template>
  <div>
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
    background-position-x: 75%;
    background-repeat: no-repeat;
  }
</style>