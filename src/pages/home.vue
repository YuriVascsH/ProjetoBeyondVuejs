<template>
    <v-app>
      <v-app-bar app>
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
</style>



