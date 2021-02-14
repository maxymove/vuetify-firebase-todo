<template>
  <v-app>
    <div class="register">
      <v-card width="500" class="mx-auto">
        <v-text-field label="username" v-model="username"></v-text-field>
        <v-text-field label="email" v-model="email"></v-text-field>
        <v-text-field label="password" v-model="password"></v-text-field>
        <v-card-actions
          ><v-btn class="mx-auto" depressed @click="signUp"> sign up </v-btn></v-card-actions
        >
      </v-card>
    </div>
  </v-app>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
    };
  },
  methods: {
    ...mapActions(['signUpAction']),
    signUp() {
      this.signUpAction({ email: this.email, password: this.password, displayName: this.username });
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
