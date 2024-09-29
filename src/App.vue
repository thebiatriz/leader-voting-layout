<template>
  <Navbar />
  <Toast />
  <div class='pt-32'>
    <router-view />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>