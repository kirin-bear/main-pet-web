<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import {RouterLink} from "vue-router";

export default defineComponent({
  name: "LeftMenu",
  setup() {

    const state = reactive({
      isOpened: false as boolean,
    });

    return { ...toRefs(state) }
  },
  methods: {
    toggleMenu: function () {
      this.isOpened = !this.isOpened;
    }
  }
})
</script>

<template>
  <div class="main__left-menu">
    <div @click="toggleMenu" :class="{'open': isOpened, 'hamburger-button': true}">
      <div class="icon-left"></div>
      <div class="icon-right"></div>
    </div>
    <el-drawer
        v-model="isOpened"
        title="I am the title"
        :with-header="false"
        direction="ltr"
        custom-class="main__left-menu__drawer"
    >
      <el-menu
          class="el-menu-vertical-demo"
      >
        <el-menu-item>
          <RouterLink to="/">
            <el-icon><HomeFilled /></el-icon><span>Главная</span>
          </RouterLink>
        </el-menu-item>
        <el-menu-item>
          <RouterLink to="/sandbox">
            <el-icon><Setting /></el-icon><span>Песочница</span>
          </RouterLink>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<style lang="scss">
  @import 'src/assets/mixins/humburger-button';

  .main__left-menu {
    .hamburger-button {
      transform: scale(0.4);
      z-index: 1000000;
    }

    & &__drawer {
      padding-top: 60px;
      min-width: 300px;

      .el-drawer__body {
        padding: 0;
      }

      a {
        color: #ffffff !important;
        text-decoration: unset;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 20px;

        > span {
          margin-left: 10px;
        }
      }
    }
  }
</style>