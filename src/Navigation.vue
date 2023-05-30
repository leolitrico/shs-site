<template>
  <v-app-bar app color="brown" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title class="title">SHS - Pensions à Lausanne au XIXe siècle</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="links">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/date/1835-page" class="link">1835</router-link>
      <router-link to="/date/1855-page" class="link">1855</router-link>
      <router-link to="/date/1875-page" class="link">1875</router-link>
      <router-link to="/date/1895-page" class="link">1895</router-link>
      <router-link to="/bibliography" class="link last">Bibliography</router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navigation-component',
};
</script>

<style scoped>
.title {
  font-size: 24px;
  font-weight: bold;
}

.links {
  display: flex;
  align-items: center;
}

.link {
  color: white;
  text-decoration: none;
  margin-left: 30px;
  font-size: 20px;  
}

.last {
  margin-right: 60px;
}

.link:hover {
  color: #ffe082;
}
</style>