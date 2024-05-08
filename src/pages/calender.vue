<template>
    <v-app>
      <router-view></router-view>
      <!-- Avatar -->
      <v-navigation-drawer v-model="drawer" app dark>
        <div class="avatar">
          <v-list-item two-line>
            <v-row justify="space-around">
              <v-avatar size="80" color="indigo">
                <v-icon size="50" dark> mdi-account-circle </v-icon>
              </v-avatar>
              <v-list-item-title class="nome">Admin</v-list-item-title>
            </v-row>
          </v-list-item>
        </div>
  
        <!-- Lista de Links -->
        <v-list dense style="margin-top: 25px">
    <template v-for="(item, index) in menuItems">
      <v-list-item :key="index" class="itens" :href="item.href">
        <v-list-item-icon>
          <v-icon :style="{ fontSize: item.iconSize }">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="nometitulo" :style="{ fontSize: item.titleSize }">{{ item.title }}</v-list-item-title>
      </v-list-item>
    </template>
  </v-list>
      </v-navigation-drawer>
  
      <v-app-bar app dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
        <v-toolbar-title class="titulo">BEYOND</v-toolbar-title>
      </v-app-bar>
  
      <!-- Conteúdo principal -->
      <v-main>
        
        <template>
          <!-- Tabela -->
          <v-data-table :headers="headers" :items="desserts" sort-by="autor" class="elevation-1">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Biblioteca</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                      Novo Material
                    </v-btn>
                  </template>
                  <v-card>
                    <!-- Popups -->
                    <v-card-title>
                      <span class="text-h5">Adicionar novo Material</span>
                    </v-card-title>
  
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.name" label="Título do Material"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.autor" label="Autor"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.assunto" label="Assunto Abordado"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.ensino" label="Área de Ensino"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.conteudo" label="Tipo do conteúdo"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-file-input label="Imagem de capa" v-model="editedItem.image" accept="image/*"></v-file-input>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
  
                    <!-- Botões Popups -->
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- popups delete -->
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
  
              <!-- icones da tabela -->
            </template>
            <template slot="item.actions" slot-scope="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </template>
      </v-main>
    </v-app>
  </template>
  
  <!-- Arquivos -->
  <script src="../components/script"></script>
  <style src="../components/style.css"></style>
  