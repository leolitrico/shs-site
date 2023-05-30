<template>
  <v-app>
    <Navigation></Navigation>
    <router-view class="router-view-with-margin" />
  </v-app>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "App-main",
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.router-view-with-margin {
  margin-top: 10px;
}
</style>