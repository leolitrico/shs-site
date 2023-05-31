<template>
    <v-main>
      <v-col>
        <h1 class="display-2 font-weight-bold text-center">Bibliographie</h1>
        <v-card class="elevation-5">
            <v-list dense>
                <v-list-item v-for="(entry, index) in bibliography" :key="index">
                    <v-list-item-content>
                        <v-list-item-text>{{ entry }}</v-list-item-text>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
      </v-col>
    </v-main>
  </template>

  <script>
  export default {
  name: 'Bibliography-component',
  data() {
    return {
        bibliography: [
  'Bechtel, D. (2009). Ces suisses qui ont peuplé l’Amérique. Swissinfo. Disponible sur: swissinfo.ch/fre/ces-suisses-qui-ont-peuplé-l-amérique/7447882 (consulté le: 24.05.2023)',
  'Biaudet, Anex-Cabanis, D., & Dubuis, P. (1982). Histoire de Lausanne. Privat.',
  'Gigase, Humair, C., & Tissot, L. (2014). Le tourisme comme facteur de transformations économiques, techniques et sociales (XIXe-XXe siècles) = Tourism as a factor of economic, technical and social transformations (XIXth-XXth Centuries). Alphil-Presses universitaires suisses.',
  'Humair, Tissot, L., & Lapointe Guigoz, J. (2011). Le tourisme suisse et son rayonnement international (XIXe-XXe siècles) : “Switzerland, the playground of the world.” Editions Antipodes.',
  'Netzle Simon; Arlettaz Gérald; Vonsattel-Amoos Anne-Marie: "Etats-Unis d\'Amérique", in: Dictionnaire historique de la Suisse (DHS), version du 18.03.2015, traduit de l’allemand. Online: https://hls-dhs-dss.ch/fr/articles/003380/2015-03-18/, consulté le 30.05.2023.',
  'Renato Arnold: "Simplon, col du", in: Dictionnaire historique de la Suisse (DHS), version du 19.12.2012, traduit de l’allemand. Online: https://hls-dhs-dss.ch/fr/articles/008806/2012-12-19/, consulté le 29.05.2023.',
  'Ressources iconographiques provenant du site https://museris.lausanne.ch/',
  'Tissot Laurent (2017). Histoire du tourisme en Suisse au XIXe siècle : les Anglais à la conquête de la Suisse. Livreo-Alphil.',
  'Tissot Laurent (1999). “Hôtels, pensions, pensionnats et cliniques: fondements pour une histoire de l”industrie des étrangers” à Lausanne, 1850-1920, in Brigitte Studer et Laurent Tissot, Le passé du présent: mélanges offerts à André Lasserre, Lausanne: Payot, 331 p.',
  'Tissot Laurent: "Tourisme", in: Dictionnaire historique de la Suisse (DHS), version du 08.03.2022. Online: https://hls-dhs-dss.ch/fr/articles/014070/2022-03-08/, consulté le 28.05.2023.',
  'Vuilleumier Marc: "Etrangers", in: Dictionnaire historique de la Suisse (DHS), version du 09.07.2015. Online: https://hls-dhs-dss.ch/fr/articles/010384/2015-07-09/, consulté le 27.05.2023.'
]
    }
  }
  }
</script> 
  <style scoped>
  .v-card {
    margin: 20px 100px;
    padding: 10px;
  }

  .v-list-item {
    margin: 15px 0;
  }
  </style>