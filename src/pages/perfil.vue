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
              <v-card flat>
                <v-row justify="end">
                  <v-btn icon @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-row>

                <v-card-text>
                  <h2 class="text-center">Login</h2>
                  <h4 class="text-center">Bem vindo novamente</h4>
                </v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    filled
                    required
                  ></v-text-field>
                  <v-select
                    :items="items"
                    filled
                    label="Instituição de ensino"
                    dense
                  ></v-select>

                  <v-text-field
                    v-model="password"
                    label="Senha"
                    type="password"
                    filled
                    required
                  >
                  </v-text-field>

                  <v-card-actions class="botao">
                    <v-btn
                      @click="criarcc"
                      width="200px"
                      type="submit"
                      color="primary"
                      >Criar Conta</v-btn
                    >
                    <v-btn
                      @click="login"
                      width="200px"
                      type="submit"
                      color="primary"
                      >Login</v-btn
                    >
                  </v-card-actions>
                </v-form>
              </v-card>
              <!-- Coluna para o formulário de login -->
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
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.$route.push("/calender");
    },

    createcc() {
      this.$store.dispatch("create", {
        email: this.email,
        password: this.password,
      });
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
  justify-content: center;
}
</style>

/* Versão Antiga */ /*
<v-container class="login">
  <v-card>
    <v-card-title class="headline text-center"
      >Login</v-card-title
    >
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="email"
        label="Email"
        filled
        required
      ></v-text-field>
      <v-select
        :items="items"
        filled
        label="Instituição de ensino"
        dense
      ></v-select>

      <v-text-field
        v-model="password"
        label="Senha"
        type="password"
        filled
        required
      >
      </v-text-field>

      <v-row class="botao">
        <v-btn width="200px" type="submit" color="primary"
          >Login</v-btn
        >
      </v-row>
    </v-form>
  </v-card>
</v-container>
*/
