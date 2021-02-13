<template>
  <v-app>
    <v-card class="mx-auto" width="500">
      <v-text-field label="email" v-model="email"></v-text-field>
      <v-text-field label="password" v-model="password"></v-text-field>
      <v-card-actions
        ><v-btn depressed class="mx-auto" @click="doLogin"> login </v-btn>
        <v-btn depressed class="mx-auto" @click="signOut"> logout </v-btn>
      </v-card-actions>
    </v-card>
    <div v-if="authenticated" style="text-align: center">
      current user: {{ currentUser.email }}
    </div>
  </v-app>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    authenticated() {
      return this.$store.getters.authenticated;
    },
    currentUser() {
      return this.$store.getters.user;
    },
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('successfully sign out');
          this.$store.commit('clearUser');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    doLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const { user } = userCredential;
          console.log(user);
          this.$store.commit('modifyCurrentUser', this.email);
          this.email = '';
          this.password = '';
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-top: 30px;
}
.v-text-field {
  margin: auto;
  width: 400px;
}
</style>
