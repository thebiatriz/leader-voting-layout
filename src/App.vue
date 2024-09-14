<template>
  <Toast />
  <div class="p-5"><router-view /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>