<template>
  <v-app>
    <v-app-bar app color="brown" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>My Website</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/date/1835-page">1835</v-btn>
      <v-btn text to="/date/1855-page">1855</v-btn>
      <v-btn text to="/date/1875-page">1875</v-btn>
      <v-btn text to="/date/1895-page">1895</v-btn>
    </v-app-bar>
    <v-container class="pt-10">
      <v-card class="elevation-5">
        <v-card-title class="headline font-weight-bold">Intro</v-card-title>
        <v-card-text>
          <p>
            La ville de Lausanne que l’on connaît aujourd’hui est multiculturelle, centre d’intérêt européen et mondial grâce à son offre culturelle, de formation, ainsi qu’à son importance économique et à ses paysages incontournables. Le chef-lieu vaudois, quatrième ville suisse, est donc considéré à présent point majeur de passage et d’attraction touristique : mais quelles sont les origines de cette attractivité (en Suisse et également à l’étranger), comment les pratiques de mobilité et d’hébergement ont-elles influencé le développement économique et touristique de la ville au fil des années ? Dans notre site vous pourrez vous immerger, à l’aide des cartes, des images historiques et de nos statistiques, dans l’évolution de la mobilité des personnes à Lausanne.
Le besoin d’un logement lors d’un séjour à Lausanne, que ce soit pour des raisons professionnelles, académiques ou pour du simple loisir, entraîne des activités d’hébergement non négligeables qui, déjà à partir du XVIIIe siècle, sont visibles à travers les recensements des pensions, lesquels ont servi de base pour nos analyses : nous nous sommes basé.e.s sur les années suivantes : 1835, 1855, 1875 et 1895, afin d’en faire une analyse constante au fil du XIXe siècle. 
          </p>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card class="elevation-5" style="display: flex; height: 800px; flex-direction: column;">
        <v-card-title class="headline font-weight-bold">Carte des origines des pensionnaires pour chaque année</v-card-title>
        <div style="flex: 1; position: relative;">
          <l-map ref="map" @update:zoom="updateZoom" style="height: 100%; width: 100%" :zoom="zoom" :max-zoom="9" :min-zoom="3" :center="center">
            <l-tile-layer :url="url" layer-type="base"></l-tile-layer>
            <l-circle-marker v-for="(region, key) in dates[selectedDate].data['foreign']" :key="key" :lat-lng="[region.latitude, region.longitude]" :radius="getRadius(region.count)" @click="showRegionInfo(key)"></l-circle-marker>
            <div v-if="showSwiss" :key="'swiss'">
              <l-circle-marker v-for="(region, key) in dates[selectedDate].data['swiss']" :key="key + 'swiss'" :lat-lng="[region.latitude, region.longitude]" :radius="getRadius(region.count)" @click="showRegionInfo(key)"></l-circle-marker>
            </div>
          </l-map>
          <v-btn class="map-toggle" @click="toggleSwiss">{{ showSwiss ? 'International' : 'Suisse' }}</v-btn>
          <v-card class="dates-card">
            <v-list>
              <v-list-item v-for="(date, index) in dates" :key="index" @click="changeDate(date.title)">
                <v-list-item-title>{{ date.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </div>
      </v-card>
    </v-container>

    <evolution></evolution>

    <v-snackbar v-model="snackbar" :timeout="3000" top>{{ snackbarText }}</v-snackbar>
  </v-app>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircleMarker } from "@vue-leaflet/vue-leaflet";
import data from "./data/data.json"
import Evolution from "./Evolution.vue";

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    Evolution,
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      swissCenter: [46.8182, 8.2275],
      center: [46.8182, 8.2275],
      dates: {
        1835 : {title: "1835", data: data["1835"]}, 
        1855 : {title: "1855", data: data["1855"]}, 
        1875 : {title: "1875", data: data["1875"]}, 
        1895 : {title: "1895", data: data["1895"]}
      },
      selectedDate: "1835",
      showSwiss: false,
      zoom: 4,
      snackbar: false,
      snackbarText: "",
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
      this.showSwiss = zoom > 7;
    },
    toggleSwiss() {
      this.showSwiss = !this.showSwiss;
      if (this.showSwiss) {
        this.zoom = 8;
        this.center = this.swissCenter;
      } else {
        this.zoom = 4;
        this.center = [46.8182, 8.2275];
      }
    },
    showRegionInfo(key) {
      const region = this.dates[this.selectedDate].data['foreign'][key];
      this.snackbarText = `${key}: ${region.count} pensionnaires`;
      this.snackbar = true;
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

.map-toggle {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1000;
}

.dates-card {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
}
</style>