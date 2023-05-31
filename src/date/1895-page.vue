<template>
  <v-main>
    <v-col>
      <h1 class="display-2 font-weight-bold text-center">1895: Retour sur un siècle de grande mobilité</h1>
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
              Provenance des pensionnaires à Lausanne en 1895 (en %)
            </p>
          </v-card-text>
        </v-card-text>
      </v-card>
      <v-card class="elevation-5">
        <!-- <v-card-title class="headline font-weight-bold">Lausanne</v-card-title> -->
        <v-card-text>
          <p>
            Un grand événement qui a marqué les dernières années du XIXe siècle à Lausanne est le changement de statut de 
            l’ancienne Académie à Université, celle que l’on connaît aujourd’hui. Au début présentant seulement une faculté 
            de théologie, au fil des années plusieurs branches ont été proposées afin de varier l’offre et de permettre plusieurs 
            formations à un public plus ample. De même, l’accès aux études a été facilité et l’institution lausannoise a gagné de 
            visibilité et de reconnaissance aussi auprès d’étudiants d’autres cantons et aussi de l’étranger. Notamment, un grand 
            nombre d’étrangers provenant de la Russie étaient des femmes qui, n’ayant pas le droit d’étudier dans leur pays, sont 
            parties vers le sol helvétique afin de compléter leur formation, avant de retourner en Russie. 
          </p>
        </v-card-text>
      </v-card>
      <v-card>

        <div class="img-container">
          <img src="../assets/icono_9.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              Vue sur la façade est des bâtiments de l'Ancienne Académie, rue Cité-Devant. A gauche, adossée aux
              bâtiments, l'ancienne Cure des professeurs.
            </p>
          </v-card-text>
        </div>
      </v-card>
      <v-card>

        <div class="img-container">
          <img src="../assets/icono_10.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1891.</b> Fête universitaire de mai 1891: Arrivée du cortège à la place Saint-François depuis l'avenue du
              Théâtre.
            </p>
          </v-card-text>
        </div>
      </v-card>

      <v-card class="elevation-5">
        <!-- <v-card-title class="headline font-weight-bold">Lausanne</v-card-title> -->
        <v-card-text>
          <p>
            Nous avons donc pu voir l’évolution des flux migratoires au cours du XIXème siècle: l’arrivée d’étrangers, mais aussi 
            de Suisses venant d’autres cantons, est bien visible depuis les statistiques qui montrent des chiffres en constante 
            augmentation parmi les quatre dates de recensement choisies (1835, 1855, 1875 et 1895). Cela, grâce aussi au travail 
            de recherche avec les sources bibliographiques, nous permet de tirer une conclusion sur l’aspect de l’attractivité de 
            la ville de Lausanne; au départ simple ville de passage d’un pays à l’autre, grâce aux révolutions dans les domaines 
            de la culture, des infrastructures et du développement du secteur économique, Lausanne a mis en place des offres pour 
            attirer et satisfaire les besoins des gens qui arrivaient sur son territoire, que ce soit pour des raisons 
            professionnelles, académiques, personnelles ou simplement touristiques.
          </p>
        </v-card-text>
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
      year: 1895,
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
