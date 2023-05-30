<template>
  <v-main>
    <v-col>
      <h1 class="display-2 font-weight-bold text-center">1855</h1>
      <v-card class="elevation-5">
        <v-card-title class="headline font-weight-bold">Lausanne</v-card-title>
        <v-card-text>
          <p>
            Dans les recensements de 1855 nous constatons une augmentation générale du tourisme étranger. En parallèle, la
            ville connaît également une augmentation de l’immigration italienne remarquable : elle voit son arrivée
            notamment pour des métiers de massiers ou de manœuvre, ou encore pour devenir maçon. En 1856, après la gare de
            Lausanne voit le jour. </p>
        </v-card-text>
      </v-card>
      <v-card>
        <div class="img-container">
          <img src="../assets/icono_4.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1856.</b> Vue des quais de la première gare.
            </p>
          </v-card-text>
        </div>
      </v-card>
      <v-card class="elevation-5">
        <v-card-title class="headline font-weight-bold">Lausanne</v-card-title>
        <v-card-text>
          <p>
            Son aboutissement est dû en grande partie aux forces de travail italiennes, provenant pour la majorité du Nord
            de leur pays, et elles constituaient la plupart des ouvriers qui s’occupaient de la construction du chemin de
            fer, ainsi que beaucoup d’autres constructions présentes dans la ville, dont une partie d’entre eux sont
            finalement restés à Lausanne pour le long terme.
            La construction du réseau ferroviaire et son développement constant ont besoin de personnel technique
            spécialisé dans le domaine de l’ingénierie, notamment des ingénieurs allemands (en outre des suisses), réputés
            pour leurs qualités en matière: nous observons donc aussi un grand pourcentage de provenance d’Allemagne dans
            les pensions.
          </p>
        </v-card-text>
      </v-card>
      <v-card>

        <div class="img-container">
          <img src="../assets/icono_5.jpg" alt="Image" />
          <v-card-text class="img-text">
            <p>
              <b>1859.</b> Vue des quais de la première gare.
            </p>
          </v-card-text>
        </div>
      </v-card>
    </v-col>
  </v-main>
</template>

<style scoped>
.v-card {
  margin: 20px 100px;
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
  width: 60%;
  height: 60%;
}
</style>
  