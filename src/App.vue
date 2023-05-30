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
          <l-map ref="map" @update:zoom="updateZoom(zoom)" style="height: 100%; width: 100%" :zoom="zoom" :max-zoom="8" :min-zoom="3" :center="swissCenter">
            <l-tile-layer :url="url" layer-type="base"></l-tile-layer>
            <l-circle-marker v-for="(region, index) in dates[selectedDate].data['foreign']" :key="index" :lat-lng="[region.latitude, region.longitude]" :radius="getRadius(region.count)"></l-circle-marker>
            <div v-if="showSwiss" :key="'swiss'">
              <l-circle-marker v-for="(region, index) in dates[selectedDate].data['swiss']" :key="index + 'swiss'" :lat-lng="[region.latitude, region.longitude]" :radius="getRadius(region.count)"></l-circle-marker>
            </div>
          </l-map>
        </div>
      </v-card>
    </v-container>
    <v-container class="horizontal-bar">
        <v-col v-for="(date, index) in dates" :key="index" class="align-center flex-grow-1">
          <div class="button-container">
            <v-btn class="text-center" rounded>
            {{ date.title }}
          </v-btn>
          </div>
        </v-col>
    </v-container>
  </v-app>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircleMarker } from "@vue-leaflet/vue-leaflet";
import data from "./data/data.json"

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      swissCenter: [46.8182, 8.2275],
      dates: {
        1835 : {title: "1835", data: data["1835"]}, 
        1855 : {title: "1855", data: data["1855"]}, 
        1875 : {title: "1875", data: data["1875"]}, 
        1895 : {title: "1895", data: data["1895"]}
      },
      selectedDate: "1835",
      showSwiss: false,
      zoom: 4,
    };
  },
  methods: {
    changeDate(date) {
      this.selectedDate = date;
    },
    getRadius(count) {
      return Math.sqrt(count / 20) * this.zoom * 10;
    },
    updateZoom(zoom) {
      this.zoom = zoom;
      this.showSwiss = zoom > 6;
    }
  },
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



