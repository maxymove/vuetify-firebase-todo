<template>
  <v-app>
    <v-card>
      <v-tabs fixed-tabs background-color="black" dark >
        <v-tab :to="{ name: 'profile' }"> profile </v-tab>
        <v-tab :to="{ name: 'login' }"> login </v-tab>
        <v-tab :to="{ name: 'register' }"> register </v-tab>
        <!-- <v-spacer></v-spacer> -->
        <v-tab :to="{ name: 'todo' }"> todo </v-tab>
      </v-tabs> </v-card
    ><router-view></router-view>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>
