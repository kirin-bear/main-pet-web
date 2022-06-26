<script lang="ts">
import {defineComponent, reactive, toRefs, ref} from "vue";
import type User from "@/types/User";

export default defineComponent({
  name: "Sandbox",
  setup: function () {

    // пример через 1 объект
    const state = reactive({
      mode: 'Sandbox' as string,
    });

    // пример через простые переменные
    const id = ref<number>(0);
    id.value = 1;

    const users = ref<User[]>([
      {name: 'Kirin', age: 27, location: 'Moscow'},
      {name: 'Ka4', age: 28, location: 'Moscow'},
      {name: 'Rij', age: 28, location: 'Moscow'},
      {name: 'Marach', age: 28, location: 'Hachow'},
    ]);

    return { ...toRefs(state), id, users }
  }
})
</script>

<template>
  <div>
    State: {{ mode }}
    <br>
    Id: {{ id }}
    <br>
    Users: <pre>{{ users }}</pre>
  </div>
</template>

<style scoped>

</style>