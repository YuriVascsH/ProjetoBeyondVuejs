<!-- <template>
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
</template> -->


<!-- Parte referente ao login -->
<template>
  <v-app>
    <h1>Sign In to an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In with Google</button></p>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router/router";
const email = ref("");
const errMsg = ref();
const password = ref("");
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Registro sucesso");
      router.push("/calender");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Email inválido";
          break;
        case "auth/user-not-found":
          errMsg.value = "Nenhuma conta com esse email";
          break;
        case "auth/wrong-password":
          errMsg.value = "Senha incorreta";
          break;
        default:
          errMsg.value = "Email or senha incorreta";
          break;
      }
    });
};

const signInWithGoogle = () => {};
</script>
<!-- Fim do novo códgio -->
