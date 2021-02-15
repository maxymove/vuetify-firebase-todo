<template>
  <v-app
    ><v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Task</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in currentTodos" :key="todo.id"></tr>
        </tbody>
      </template>
      </v-simple-table
  >
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {},
  created() {
    this.retrieveTodos();
  },
  computed: {
    ...mapGetters(['currentTodos']),
  },
  methods: {
    ...mapActions(['retrieveTodosAction']),
    retrieveTodos() {
      this.retrieveTodosAction();
    },
  },
};
</script>

<style>
</style>
