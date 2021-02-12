<template>
  <v-app>
    <div class="login">
      <v-card id="login-inner" class="mx-auto" width="500">
        <v-text-field label="email"></v-text-field>
        <v-text-field label="password"></v-text-field>
        <v-card-actions
          ><v-btn depressed color="#E53935"> login </v-btn></v-card-actions
        >
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.login {
}
#login-inner {
  margin-top: 30px;
}
</style>
