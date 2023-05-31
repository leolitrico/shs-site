<template>
  <v-main>
    <v-col>
      <h1 class="display-2 font-weight-bold text-center">1835: La nature bienfaitrice du tourisme helvétique
      </h1>
      <v-card>
        <v-card-title class="headline font-weight-bold">Statistics</v-card-title>
        <v-card-text>
          <v-btn class="foreign-toggle" @click="toggleSwiss"> {{ showForeignImage ? 'International' : 'Suisse' }}</v-btn>
          <div class="image-wrapper" style="position: relative;">
            <img v-if="showForeignImage" :src="foreignImageSrc" alt="Foreign Origins" class="img-diagram" />
            <img v-if="showSwissImage" :src="swissImageSrc" alt="Swiss Origins" class="img-diagram" />
          </div>
          <v-card-text class="img-text">
            <p>
              Provenance des pensionnaires à Lausanne en 1835 (en %)
            </p>
          </v-card-text>
        </v-card-text>
      </v-card>
      <v-card class="elevation-4">
        <!-- <v-card-title class="headline font-weight-bold">Introduction</v-card-title> -->
        <v-card-text>
          <p>
            De simple lieu de passage sur l’axe Nord-Sud grâce à son emplacement stratégique au centre de l’Europe, 
            la Suisse est bien connue parmi les voyageurs jusqu’au XVIIIe siècle. Elle est connue, mais elle manque 
            encore de reconnaissance pour des séjours de longue durée. La route du Simplon, construite sur ordre de 
            Napoléon 1er  au début du XIXe siècle, permet un plus ample accès des voyageurs en Suisse romande et, plus 
            précisément, sur l’arc lémanique.
          </p>
        </v-card-text>
      </v-card>
      <v-card>
        <div class="img-container">
          <img src="../assets/icono_1.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1831.</b> vue de la route du Simplon avec un groupe de chalets à l'avant-plan et quelques personnages sur
              la route
            </p>
          </v-card-text>
        </div>
      </v-card>
      <v-card class="elevation-5">
        <!-- <v-card-title class="headline font-weight-bold">Lausanne</v-card-title> -->
        <v-card-text>
          <p>
            Entre 1835 et 1855 une augmentation de voyageurs provenant d’Angleterre peut être observée. Selon le courant du 
            Romantisme, la montagne devient un lieu attirant : grâce aux écrivains, artistes et philosophes il y a une 
            idéalisation de l’image de la nature entraînant une sorte de « publicité » involontaire. Depuis le début du 
            XIXe siècle la Suisse (et en particulier Lausanne), qui était auparavant seulement un lieu de passage d’un 
            pays à l’autre, s’ajoute désormais aux destinations convoitées, dont font déjà partie la France et l’Italie. 
            Les Alpes suisses deviennent un point régulier de visite pour les randonnées, l’admiration des paysages, 
            mais aussi pour la pratique de l’escalade.
            L’arrivée des touristes anglais peut s’expliquer par les bonnes relations économique et politique dont bénéficient 
            les deux pays. Ces dernières ont encouragé l’augmentation du flux touristique britannique. Cette période a permis, 
            parmi d'autres, de développer une culture de l’accueil en Suisse qui servira de base pour créer l’industrie 
            touristique dont elle bénéficiera tout au long du XIXe siècle.

            Se déplacer d’un pays comme l’Angleterre jusqu’en Europe et, plus particulièrement, dans les Alpes suisses et à 
            Lausanne, était aussi une manière d’échapper aux effets de l’urbanisme et de l’industrialisation des grandes 
            villes pour profiter du calme que la nature pouvait offrir. Cela était également de plus en plus conseillé par 
            les médecins qui encourageaient leurs patients à se retirer dans la nature pour profiter de l’air pur et du 
            pouvoir de guérison de la tranquillité des paysages.
          </p>
        </v-card-text>
      </v-card>
      <v-card>
        <div class="img-container">
          <img src="../assets/icono_2.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1836.</b> “The pays de Vaud. From above Lausanne” (Anglais à Lausanne au XIXe siècle, catalogue
              d'exposition, MHL, juin-août 1978, p. 48, Borgeaud, p. 25).
            </p>
          </v-card-text>
        </div>
      </v-card>
      <v-card class="elevation-5">
        <!-- <v-card-title class="headline font-weight-bold">Lausanne</v-card-title> -->
        <v-card-text>
          <p>
            A Lausanne, autour de l’année 1835, nous pouvons retrouver une concentration d’hôtels dans la zone entre la Rue du Bourg, 
            Saint-Pierre et Saint-Laurent. Quelques années après, en 1838, Lausanne voit la naissance du premier grand hôtel sur 
            la place Saint-François: l’Hôtel Gibbon. Ces nouveaux bâtiments destinés à l’accueil des touristes contribuent à l’essor 
            de la mobilité lausannoise.
          </p>
        </v-card-text>
      </v-card>
      <v-card>
        <div class="img-container">
          <img src="../assets/icono_3.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1839.</b> Vue de l'hôtel Gibbon depuis le sud-ouest. Au premier plan le Petit-Chêne avec de nombreux
              passants. Devant l'hôtel, son très grand jardin ceint d'un haut mur et parcouru de sentiers, avec des
              fontaines et des kiosques. Derrière l'hôtel on aperçoit la Place St.-François, avec une voiture attelée. A
              gauche, on voit la tour du beffroi de la Cathédrale et à droite de l'hôtel la flèche de Saint-François. La
              vue s'étend à gauche sur le lac et les montagne.
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
      year: 1835,
    };
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
};
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
