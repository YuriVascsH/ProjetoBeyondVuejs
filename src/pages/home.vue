<template>
    <v-app>
      <v-app-bar app
      color="white"
      elevate-on-scroll>
        <v-toolbar-title class="title-bar">Beyond</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn elevation="3" color="transparent" class="orange-border">
          Sign in
        </v-btn>
  
        <v-btn elevation="3" color="transparent" class="orange-border margin-left">
          Sign up
        </v-btn>
      </v-app-bar>
      <v-main>
        ola
      </v-main>

      <!-- Foooter -->
     <v-footer app dark>
      <v-row class="inicio">
        <v-col cols="4">
          <h2>
            Beyond
          </h2>
        </v-col>
        <v-col cols="4">
  <div class="espaco inicio">
    <v-icon class="fundo">mdi-map-marker</v-icon>
    <span>Recife, Cidade Universitária</span>
  </div>
  <div class="espaco">
    <v-icon class="fundo">mdi-phone</v-icon>
    <span>(81) 98765-9876</span>
  </div>
  <div class="espaco">
    <v-icon class="fundo">mdi-email</v-icon>
    <span>supporte@gmail.com</span>
  </div>
</v-col>
<v-col cols="4">
          <h2>
            Beyond
          </h2>
        </v-col>
      </v-row>
     </v-footer>
    </v-app>
  </template>

<style scoped>
/* Adicionando estilo para a borda laranja */
.orange-border {
    background: none;
    border: 2px solid orange !important;
}

.margin-left {
    margin-left: 10px;
}

.titlebar {
    margin-left: 10px;
}
.orange-border :hover {
    color: orange;
    transition: color 0.5s;
}

.fundo {
  margin-right: 10px;
  width: 40px; /* Largura do círculo */
  height: 40px; /* Altura do círculo */
  background-color: red;
  border-radius: 50%; /* Define a forma do elemento como um círculo */
}

.espaco {
  margin-bottom: 15px;
}
.inicio {
  margin-top: 20px;
}

</style>



