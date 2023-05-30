<template>
    <v-container class="pt-10 introduction">
        <v-card class="elevation-5">
            <v-card-title class="headline font-weight-bold">Intro</v-card-title>
            <v-card-text>
                <p>
                    Lausanne telle qu’on la connaît aujourd’hui est une ville cosmopolite. C’est un centre d’intérêt européen et mondial grâce à sa diversité culturelle, ses offres de formation, ainsi qu’à son importance économique et à ses paysages incontournables. Le chef-lieu vaudois, quatrième ville suisse, est donc considéré à présent comme un point majeur de passage et d’attraction touristique ; mais quelles sont les origines (suisses et étrangères) de cette attractivité ? Comment les pratiques de mobilité et d’hébergement ont-elles influencé le développement économique et touristique de la ville au fil des années ? Sur notre site, vous pourrez vous immerger, à l’aide de cartes, d’images historiques et de nos statistiques, dans l’évolution de la mobilité des personnes à Lausanne.
Le besoin d’un logement lors d’un séjour à Lausanne, que ce soit pour des raisons professionnelles, académiques ou pour du loisir, entraîne des activités d’hébergement non négligeables qui, déjà à partir du XVIIIe siècle, sont visibles à travers les recensements des pensions. Ces derniers ont servi de source principale pour nos analyses. Afin de faire une analyse représentative de l’ensemble du XIXe siècle, nous avons mené notre étude sur les années suivantes : 1835, 1855, 1875 et 1895. 
                </p>
            </v-card-text>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="elevation-5" style="display: flex; height: 800px; flex-direction: column;">
            <v-card-title class="headline font-weight-bold">Carte des origines des pensionnaires pour chaque
                année</v-card-title>
            <div style="flex: 1; position: relative;">
                <l-map ref="map" @update:zoom="updateZoom" @update:ready="mapReady" style="height: 100%; width: 100%"
                    :zoom="zoom" :max-zoom="9" :min-zoom="3" :center="center">
                    <l-tile-layer :url="url" layer-type="base"></l-tile-layer>
                    <div v-if="!showSwiss" :key="'foreign'">
                        <div v-if="showCircles">
                            <l-circle-marker v-for="(region, key) in dates[selectedDate].data['foreign']" :key="key"
                                :lat-lng="[region.latitude, region.longitude]" :radius="getRadius(region.count)"
                                :color="region.color" @click="showRegionInfo(key)"></l-circle-marker>
                        </div>
                        <l-polyline v-for="(region, key) in dates[selectedDate].data['foreign']" :key="'line-' + key"
                            :lat-lngs="[[region.latitude, region.longitude], [46.519962, 6.633597]]" :color="region.color"
                            :weight="showLines ? 2 : 0"></l-polyline>
                    </div>
                    <div v-if="showSwiss" :key="'swiss'">
                        <div v-if="showCircles">
                            <l-circle-marker v-for="(region, key) in dates[selectedDate].data['swiss']" :key="key + 'swiss'"
                                :lat-lng="[region.latitude, region.longitude]" :radius="getRadius(region.count)"
                                :color="region.color" @click="showRegionInfo(key)"></l-circle-marker>
                        </div>
                        <l-polyline v-for="(region, key) in dates[selectedDate].data['swiss']" :key="'line-' + key"
                            :lat-lngs="[[region.latitude, region.longitude], [46.519962, 6.633597]]" :color="region.color"
                            :weight="showLines ? 1.5 : 0"></l-polyline>
                    </div>
                </l-map>
                <div class="toggles">
                    <v-btn class="line-toggle" @click="toggleLines">{{ showLines ? 'Hide Lines' : 'Show Lines' }}</v-btn>
                    <v-btn class="circle-toggle" @click="toggleCircles">{{ showCircles ? 'Hide Circles' : 'Show Circles'
                    }}</v-btn>
                </div>
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
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircleMarker, LPolyline } from "@vue-leaflet/vue-leaflet";
import data from "../data/data.json"
import Evolution from "../components/Evolution.vue";

export default {
    name: 'Home-component',
    components: {
        LMap,
        LTileLayer,
        LCircleMarker,
        LPolyline,
        Evolution,
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            swissCenter: [46.8182, 8.2275],
            center: [46.8182, 8.2275],
            dates: {
                1835: { title: "1835", data: data["1835"] },
                1855: { title: "1855", data: data["1855"] },
                1875: { title: "1875", data: data["1875"] },
                1895: { title: "1895", data: data["1895"] }
            },
            selectedDate: "1835",
            showSwiss: false,
            zoom: 4,
            showCircles: true,
            snackbar: false,
            showLines: true,
            snackbarText: "",
        };
    },
    methods: {
        toggleLines() {
            this.showLines = !this.showLines;
        },
        changeDate(date) {
            this.selectedDate = date;
        },
        toggleCircles() {
            this.showCircles = !this.showCircles;
        },
        mapReady(ready) {
            if (ready) {
                this.$refs.map.mapObject.invalidateSize();
            }
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
            if (this.showSwiss) {
                const region = this.dates[this.selectedDate].data['swiss'][key];
                this.snackbarText = `${key}: ${region.count} pensionnaires`;
            } else {
                const region = this.dates[this.selectedDate].data['foreign'][key];
                this.snackbarText = `${key}: ${region.count} pensionnaires`;
            }
            this.snackbar = true;
        }
    },
};
</script>

<style scoped>
.toggles {
    position: absolute;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
}

.circle-toggle {
    margin-left: 16px;
}

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

.introduction {
    margin-top: 50px;
}
</style>