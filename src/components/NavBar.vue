<template>
  <v-app>
    <v-card>
      <v-tabs fixed-tabs background-color="black" dark>
        <v-tab :to="{ name: 'Profile' }"> profile </v-tab>
        <v-tab :to="{ name: 'Login' }"> login </v-tab>
        <v-tab :to="{ name: 'Register' }"> register </v-tab>
        <!-- <v-spacer></v-spacer> -->
        <v-tab :to="{ name: 'Todos' }"> app </v-tab>
      </v-tabs>
    </v-card>
    <div style="text-align: center" v-if="authenticated">
      Welcome, {{currentUser.displayName}}
      <br>
      <v-btn @click="signOut">sign out</v-btn>
    </div>

    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['signOutAction']),
    signOut() {
      this.signOutAction();
    },

  },
  computed: {
    ...mapGetters(['currentUser', 'authenticated']),
  },
};
</script>

<style>
</style>
