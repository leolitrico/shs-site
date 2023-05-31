<template>
  <v-main>
    <v-col>
      <h1 class="display-2 font-weight-bold text-center">1875: Lausanne cosmopolite</h1>
      <v-card>
        <v-card-title class="headline font-weight-bold">Statistiques</v-card-title>
        <v-card-text>
          <v-btn class="foreign-toggle" @click="toggleSwiss"> {{ showForeignImage ? 'International' : 'Suisse' }}</v-btn>
          <div class="image-wrapper" style="position: relative;">
            <img v-if="showForeignImage" :src="foreignImageSrc" alt="Foreign Origins" class="img-diagram" />
            <img v-if="showSwissImage" :src="swissImageSrc" alt="Swiss Origins" class="img-diagram" />
          </div>
          <v-card-text class="img-text">
            <p>
              Provenance des pensionnaires à Lausanne en 1875 (en %)
            </p>
          </v-card-text>
        </v-card-text>
      </v-card>
      <v-card class="elevation-5">
        <!-- <v-card-title class="headline font-weight-bold">Lausanne</v-card-title> -->
        <v-card-text>
          <p>
            Le boom industriel et les grandes constructions réalisées dans les décennies précédentes peuvent sûrement expliquer la 
            constante arrivée de gens (suisses et étrangers) à Lausanne. Les recensements montrent une augmentation des origines 
            étrangères: seulement en 1875, nous observons des arrivées depuis le Danemark, Russie, Prusse, Turquie, Roumanie, 
            Algérie, Japon et Egypte, et la liste n’est pas exhaustive. Nous remarquons aussi un fait intéressant : en 1875 
            apparaît un nombre important de pensionnaires d’origine américaine qui augmente jusqu’en 1895. Notre hypothèse est 
            que cette tendance est due à la forte émigration de Suisses qui a eu lieu entre 1850 et 1890 vers les États-Unis à 
            cause des tensions économiques présentes en Europe. Durant les années suivantes, les habitants qui ont fui sont sans 
            doute retournés dans leur pays d’origine pour rendre visite à leurs proches : ils ont donc trouvé logement dans des 
            pensions. 
          </p>
        </v-card-text>
      </v-card>
      <v-card>

        <div class="img-container">
          <img src="../assets/icono_6.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1873.</b> Petit document, pour le touriste à Lausanne, comprenant à gauche un plan de Lausanne s'étendant
              du Tunnel à l'avenue de la Gare et de Marterey à Montbenon. Les édifices, rivières, reliefs et natures du
              terrain sont figurés. Les noms des rues sont indiqués. En haut, à gauche, et en bas, à droite, des lettres
              et des chiffres renvoient aux principaux hôtels et édifices publics de la ville, avec leurs coordonnées dans
              le plan. À droite, carte topographique de la partie sud de la ville de Lausanne, qui va de Saint-François à
              Ouchy et de Montolivet à Montriond. Les édifices, chemins, reliefs, limites des propriétés et voies de
              chemin de fer sont figurés.
            </p>
          </v-card-text>
        </div>
      </v-card>
      <v-card>

        <div class="img-container">
          <img src="../assets/icono_7.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1876.</b> Gare agrandie, vue depuis la place.
            </p>
          </v-card-text>
        </div>
      </v-card>

      <v-card class="elevation-5">
        <!-- <v-card-title class="headline font-weight-bold">Lausanne</v-card-title> -->
        <v-card-text>
          <p>
            À partir du dernier quart de siècle, nous observons une forte augmentation du pourcentage de pensionnaires russes : 
            cela peut s’expliquer, en plus du tourisme, avec l’asile politique ou pour des raisons de travail. En effet, dans 
            l’histoire de l’Académie (aujourd’hui Université), plusieurs réfugiés politiques ont occupé des chaires dans les 
            départements d’italien, d’anglais, d’économie politique ou encore de latin. L’augmentation d’étrangers stimule, en 
            même temps, outre la construction de plusieurs hôtels, l’ouverture de davantage de pensions. De plus, le bon « climat 
            tempéré » de la région et les différentes évolutions dans le champ de la médecine apportent à Lausanne la réputation 
            de « mecque médicale » et à l’ouverture de cliniques mais aussi de plusieurs lieux d’hébergement et de soins. 
          </p>
        </v-card-text>
      </v-card>
      <v-card>

        <div class="img-container">
          <img src="../assets/icono_8.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1870.</b> Vue sur l'ancien établissement de bains Odot, situé à la place Pépinet 23.
            </p>
          </v-card-text>
        </div>
      </v-card>

    </v-col>
  </v-main>
</template>

<script>

export default {
  data() {
    return {
      showForeignImage: true,
      showSwissImage: false,
      year: 1875,
    }
  },
  computed: {
    foreignImageSrc() {
      return require(`@/assets/plots_per_year/foreign_origins_${this.year}.png`);
    },
    swissImageSrc() {
      return require(`@/assets/plots_per_year/swiss_origins_${this.year}.png`);
    },
  },
  methods: {
    toggleSwiss() {
      this.showForeignImage = !this.showForeignImage;
      this.showSwissImage = !this.showSwissImage;
    },
  },
}
</script>
  
<style scoped>
.v-card {
  margin: 20px 240px;
  padding: 10px;
}

.v-card-text {
  font-size: 20px;
}

.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.img-text {
  text-align: center;
  font-size: 18px;
}

img {
  display: block;
  margin: 0 auto;
  width: 60%;
  height: 60%;
}

.img-diagram {
  width: 45%;
  height: 45%;
  margin-top: -100px;
  margin-bottom: -50px;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  min-height: 400px;
}

.toggles {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
}

.foreign-toggle {
  margin-left: 16px;
  position: absolute;
  top: 20px;
  right: 10px;
}

p {
    text-align: justify;
}
</style>
