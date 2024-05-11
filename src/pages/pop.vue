<template>
  <v-app>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="1080px"
      max-height="7680px"
    >
      <v-card>
        <v-container>
          <v-row>
            <v-col
              cols="6"
              style="
                background-color: linear-gradient(
                  90deg,
                  rgb(252, 115, 156) 0%,
                  rgb(139, 102, 241) 100%
                );
              "
            >
              <img src="../assets/pop.png" alt="Imagem da tela de login" />
            </v-col>
            <v-col cols="6"></v-col
          ></v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-app>
</template>
