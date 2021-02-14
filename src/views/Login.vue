<template>
  <v-app>
    <v-card class="mx-auto" width="500">
      <v-text-field label="email" v-model="email"></v-text-field>
      <v-text-field
        label="password"
        type="password"
        v-model="password"
      ></v-text-field>
      <v-card-actions
        ><v-btn depressed class="mx-auto" @click="signIn" > login </v-btn>
        <v-btn depressed class="mx-auto"> logout </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  computed: {},
  methods: {
    ...mapActions(['signInAction']),
    signIn() {
      this.signInAction({ email: this.email, password: this.password });
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
