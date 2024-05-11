<template>
  <div>
    <v-btn @click="dialog = true">Login</v-btn>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="1080px"
      max-height="7680px"
    >
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="6" style="background-color: blue">
              <!-- Conteúdo da coluna aqui -->
              <img src="../assets/pop.png" alt="Imagem de login" />
            </v-col>
            <v-col cols="6">
              <v-row justify="end">
                <v-btn icon @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-row>
              <!-- Coluna para o formulário de login -->
              <v-form @submit.prevent="login">
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="Senha"
                  type="password"
                  required
                ></v-text-field>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>
                <p>OLa</p>

                <v-btn type="submit" color="primary">Login</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Implemente sua lógica de login aqui
    },
  },
};
</script>
