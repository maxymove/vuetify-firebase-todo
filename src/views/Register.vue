<template>
  <v-app>
    <div class="register">
      <v-card width="500" class="mx-auto">
        <v-text-field label="username"></v-text-field>
        <v-text-field label="email"></v-text-field>
        <v-text-field label="password"></v-text-field>
        <v-card-actions><v-btn color="#E53935" depressed> register </v-btn></v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.register {
  margin-top: 30px;
}
</style>
