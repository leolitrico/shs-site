<template>
  <v-container>
    <v-card class="elevation-5">
      <v-card-title class="headline font-weight-bold">Statistiques par Pays/Cantons de 1835 à 1895</v-card-title>
      <v-card-text>
        <v-select v-model="selectedCountry" :items="countries" label="Select a country"></v-select>
        <div v-if="selectedCountry === 'Suisse'">
          <v-select v-model="selectedCanton" :items="cantons" label="Select a canton"></v-select>
        </div>
        <div class="image-container" v-if="(selectedCountry && selectedCountry !== 'Suisse') || (selectedCountry === 'Suisse' && selectedCanton)">
          <img :src="imageSrc" :alt="selectedCountry || selectedCanton" :title="selectedCountry || selectedCanton" />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Evolution-component',
  data() {
    return {
      selectedCountry: null,
      selectedCanton: null,
      countries: ['Suisse', 'Allemagne', 'Amerique', 'Angleterre', 'Autriche', 'Bulgarie', 'Danemark', 'Ecosse', 'Espagne', 'France', 'Hollande', 'Italie', 'Moldavie', 'Prusse', 'Roumanie', 'Russie', 'Suede'],
      cantons: ['Argovie', 'Bale', 'Berne', 'Fribourg', 'Geneve', 'Glaris', 'Grisons', 'Jura', 'Lucerne', 'Neuchatel', 'SaintGall', 'Soleure', 'Tessin', 'Thurgovie', 'Valais', 'Zurich'],
    }
  },
  computed: {
    imageSrc() {
      if (this.selectedCountry) {
        if (this.selectedCountry === 'Suisse') {
          if (this.selectedCanton) {
            const cantonSlug = this.selectedCanton.toLowerCase().replace(/ /g, '_');
            return this.getImageUrl(`evolution_cantons/evolution_${cantonSlug}.png`);
          } else {
            return null;
          }
        } else {
          const countrySlug = this.selectedCountry.toLowerCase().replace(/ /g, '_');
          return this.getImageUrl(`evolution_pays/evolution_${countrySlug}.png`);
        }
      } else {
        return null;
      }
    },
  },
  methods: {
    getImageUrl(imageName) {
      return require(`@/assets/${imageName}`);
    },
  },
};
</script>

<style scoped>
.image-container {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 80%;
  max-height: 80%;
  margin-top: -45px;
}
</style>