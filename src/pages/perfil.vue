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
              <v-container class="login">
                <v-form @submit.prevent="login">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    filled
                    required
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Senha"
                    type="password"
                    filled
                    required
                  ></v-text-field>
                  <v-btn
                    class="botao"
                    width="150px"
                    type="submit"
                    color="primary"
                    >Login</v-btn
                  >
                </v-form>
              </v-container>
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

<style>
.v-text-field {
  width: 400px;
}

.login {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}

.botao {
  display: flex;
  text-allign: center;
  justify-content: center;
}
</style>
