<template>
  <v-container>
    <v-card class="elevation-5">
      <v-card-title class="headline font-weight-bold">Statistiques par Pays/Cantons de 1835 à 1895</v-card-title>
      <v-card-text>
        <v-select
          v-model="selectedCountry"
          :items="countries"
          label="Select a country"
        ></v-select>
        <v-select
          v-if="selectedCountry === 'Suisse'"
          v-model="selectedCanton"
          :items="cantons"
          label="Select a canton"
        ></v-select>
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
      countries: ['France', 'Allemagne', 'Italie', 'Suisse', 'Angleterre', 'Prusse', 'Russie', 'Hollande', 'Roumanie', 'Autriche', 'Amerique', 'Suede', 'Bulgarie', 'Espagne', 'Mali', 'Australie', 'Belgique', 'Maroc', 'Grece', 'Pologne', 'Ecosse', 'Danemark', 'Jamaique', 'Canada', 'Luxembourg', 'Moldavie', 'Argentine', 'Indonésie', 'Turquie', 'Algerie', 'Japon', 'Bolivie', 'Egypte', 'Armenie', 'Inde'],
      cantons: ['Vaud', 'Valais', 'Fribourg', 'Genève', 'Neuchâtel', 'Jura', 'Berne', 'Zurich', 'Lucerne', 'Grisons', 'Tessin', 'Uri', 'Schwytz', 'Obwald', 'Nidwald', 'Glaris', 'Appenzell Rhodes-Extérieures', 'Appenzell Rhodes-Intérieures', 'Saint-Gall', 'Argovie', 'Thurgovie', 'Bâle-Campagne', 'Bâle-Ville', 'Zoug']
    }
  }
};
</script>