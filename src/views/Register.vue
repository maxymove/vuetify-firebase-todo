<template>
  <v-app>
    <div class="register">
      <v-card width="500" class="mx-auto">
        <v-text-field label="username" v-model="username"></v-text-field>
        <v-text-field label="email" v-model="email"></v-text-field>
        <v-text-field label="password" v-model="password"></v-text-field>
        <v-card-actions
          ><v-btn class="mx-auto" depressed @click="doRegister"> register </v-btn></v-card-actions
        >
      </v-card>
    </div>
  </v-app>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../plugins/firebaseConfig';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    doRegister() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          // ...
          console.log(user);
          //
          db.collection('users')
            .doc(this.username)
            .collection('profile')
            .add({
              username: this.username,
              email: this.email,
            })
            .then(() => {
              console.log('added user profile.');
            })
            .catch((error) => {
              console.error('Error adding document: ', error);
            });
          //
          this.username = '';
          this.email = '';
          this.password = '';
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
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
