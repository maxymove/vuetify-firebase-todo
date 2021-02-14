<template>
  <v-app>
    <v-card class="mx-auto" width="750">
      <v-text-field label="add a new todo" v-model="newTodo"></v-text-field>
      <v-card-actions class="mx-auto"
        ><v-btn depressed class="mx-auto" @click="addTodo">
          add a new todo
        </v-btn></v-card-actions
      >
    </v-card>
    <v-card class="mx-auto" width="500">
        {{currentTodos}}
    </v-card>
    <v-btn @click="retrieveTodos">update todos</v-btn>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      newTodo: '',
    };
  },
  created() {
    this.retrieveTodos();
  },
  computed: {
    ...mapGetters(['currentTodos']),
  },
  methods: {
    ...mapActions(['addTodoAction', 'retrieveTodosAction']),
    addTodo() {
      this.addTodoAction({ newTodo: this.newTodo });
      this.newTodo = '';
    },
    retrieveTodos() {
      this.retrieveTodosAction();
    },
  },
};
</script>

<style scoped>
.v-text-field {
  margin: auto;
  width: 500px;
}
</style>
