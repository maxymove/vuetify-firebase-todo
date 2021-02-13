<template>
  <v-app>
    <v-card>
      <v-tabs fixed-tabs background-color="black" dark >
        <v-tab :to="{ name: 'Profile' }"> profile </v-tab>
        <v-tab :to="{ name: 'Login' }"> login </v-tab>
        <v-tab :to="{ name: 'Register' }"> register </v-tab>
        <!-- <v-spacer></v-spacer> -->
        <v-tab :to="{ name: 'Todo' }"> todo </v-tab>
      </v-tabs> </v-card
    ><router-view></router-view>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>
