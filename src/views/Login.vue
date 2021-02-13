<template>
  <v-app>
    <v-card class="mx-auto" width="500">
      <v-text-field label="email"></v-text-field>
      <v-text-field label="password"></v-text-field>
      <v-card-actions
        ><v-btn depressed class="mx-auto" > login </v-btn></v-card-actions
      >
    </v-card>
  </v-app>
</template>

<script>
export default {};
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
