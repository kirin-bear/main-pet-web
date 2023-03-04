<template>
  <div>
    <el-form
        label-position="left"
        label-width="100px"
        :model="form"
        style="max-width: 460px"
    >
      <el-form-item :label="$t('main.auth.AuthForm.email')">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item :label="$t('main.auth.AuthForm.password')">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";

export default defineComponent({
  name: "auth-form",
  setup: function() {

    const form = reactive({
      email: '' as string,
      password: '' as string,
    });

    const onSubmit = () => {
      console.log(form)
    }

    return { form, onSubmit };
  }
});
</script>

<style scoped>

</style>