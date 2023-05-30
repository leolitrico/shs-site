<template>
  <v-app>
    <Navigation></Navigation>
    <router-view class="router-view-with-margin" />
    <v-snackbar v-model="snackbar" :timeout="3000" top>{{ snackbarText }}</v-snackbar>
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
  margin-top: 80px;
}
</style>