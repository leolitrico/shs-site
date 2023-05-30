<template>
  <v-app>
    <v-container>
      <v-card class="elevation-5">
        <v-card-title class="headline font-weight-bold">Intro</v-card-title>
          <v-card-text>
            <p>Lausanne est une belle ville</p>
            <p>super belle</p>
          </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card class="elevation-5" style="display: flex; height: 800px; flex-direction: column;">
        <v-card-title class="headline font-weight-bold">Carte</v-card-title>
        <div style="flex: 1">
          <l-map ref="map" style="height: 100%; width: 100%" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" layer-type="base"></l-tile-layer>
          <l-circle-marker :lat-lng="circle.center" :radius="circle.radius" :color="circle.color"></l-circle-marker>
        </l-map>
        </div>
      </v-card>
    </v-container>
    <v-container class="horizontal-bar">
        <v-col v-for="(link, index) in links" :key="index" class="align-center flex-grow-1">
          <div class="button-container">
            <v-btn :to="link.url" class="text-center" rounded>
            {{ link.title }}
          </v-btn>
          </div>
        </v-col>
    </v-container>
  </v-app>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircleMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker
  },
  data() {
    return {
      circle: {
        center: [ 49.1193089, 6.1757156 ],
        radius: 100,
        color: 'red',
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      center: [ 49.1193089, 6.1757156 ],
      zoom: 12,
      links: [
        {
          title: "1835",
          url: "/date/1835-page"
        },
        {
          title: "1855",
          url: "/date/1855-page"
        },
        {
          title: "1875",
          url: "/date/1875-page"
        },
        {
          title: "1895",
          url: "/date/1895-page"
        }
      ],
    };
  }
};
</script>

<style scoped>
.horizontal-bar {
  background-color: brown;
  padding: 16px;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>



