<template>
  <div>
    <AuthForm/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AuthForm from "@/components/main/auth/auth-form.vue";

export default defineComponent({
  name: "body",
  components: {AuthForm},
})
</script>

<style scoped>

</style>