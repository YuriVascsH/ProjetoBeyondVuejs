<template>
    <v-app>
      <v-app-bar app
      color="white"
      elevate-on-scroll>
        <v-toolbar-title class="titlebar">Beyond</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn elevation="3" color="transparent" class="orange-border">
          Sign in
        </v-btn>
  
        <v-btn elevation="3" color="transparent" class="orange-border margin-left">
          Sign up
        </v-btn>
      </v-app-bar>
      <!-- Conteudo Principal -->
      <v-main>
        <v-container class="mt-10">
          <v-row>
            <v-col cols="6">
              <h2 style="margin-bottom: 10px;">
                Biblioteca Digital
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti error saepe illum
                 quis possimus natus asperiores perspiciatis est iure, nostrum aperiam quibusdam, sint eveniet? Temporibus ad necessitatibus voluptates pariatur?
              </p>
              <v-btn class="mr-6 ">Iniciar</v-btn>
              <v-btn>Planos</v-btn>
            </v-col>
            <v-col cols="6">
              <img width="100%" src="../assets/home.jpg">
            </v-col>
          </v-row>

        </v-container>
        <v-container color="red">
        </v-container>
      </v-main>

      <!-- Foooter -->
      <v-footer dark>
  <v-row class="inicio" justify="space-around">
    <!-- Empresa -->
    <v-col cols="3">
      <h2>Beyond</h2> 
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nemo consequatur facilis deleniti fugit, labore provident quia nam voluptatem libero at dignissimos dolore corrupti perspiciatis delectus obcaecati nesciunt beatae voluptates.
      </p>  
      <v-icon class="icone direita" size="30">mdi-linkedin</v-icon>
      <v-icon class="icone direita" size="30">mdi-instagram</v-icon>  
      <v-icon class="icone" size="30">mdi-facebook</v-icon>
    </v-col>

    <!-- Explore -->
    <v-col cols="2">
      <h3>Explore</h3>
      <v-list dense class="transparent" >
    <v-list-item>
      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Planos</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Serviços</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Parceiros</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Contato</v-list-item-title>
    </v-list-item>
  </v-list>     
    </v-col>
    <v-col cols="2">
      <h3>Serviços</h3>
      <v-list dense class="transparent" >
    <v-list-item>
      <v-list-item-title>Reforço online</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Biblioteca Digital</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Consultoria de Carreira</v-list-item-title>
    </v-list-item>

  </v-list>   
        

    </v-col>

    <!-- Contato -->
    <v-col cols="2">
      <h3>Contato</h3>
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
  </v-row>

 
  <v-card-text class="white--text">
          card
        </v-card-text>

</v-footer>
</v-app>

  </template>

<style scoped>
.orange-border {
    background: none;
    border: 2px solid orange !important;
}

.margin-left {
    margin-left: 10px;
}

.titlebar {
    margin-left: 10px;
    font-family:Verdana, Geneva, Tahoma, sans-serif
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
.icone {
  width: 40px; 
  height: 40px; 
  border-radius: 20%;
  background-color: red;
}

.direita {
  margin-right: 10px;
}

</style>



<script>
export default {
  data() {
  return {
    menuNavegacao: [
      { text: 'Item 1', href: '#'},
      { text: 'Item 2', href: '#'},
      { text: 'Item 3', href: '#'}
    ]
  };
}

}
</script>