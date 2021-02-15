/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import db from '../plugins/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      authenticated: false,
      data: null,
    },
    todos: [],
  },
  getters: {
    currentUser(state) {
      return state.user.data;
    },
    authenticated(state) {
      return state.user.authenticated;
    },
    //
    currentTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user.data = payload;
      state.user.authenticated = payload !== null;
    },
    clearUser(state) {
      state.user.data = null;
      state.user.authenticated = false;
    },
    //
    retrieveTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    // AUTHENTICATION
    signUpAction(context, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          console.log(user.uid);
          // ...
          const { currentUser } = firebase.auth();
          currentUser.updateProfile({
            displayName: payload.displayName,
          }).then(() => {
            // Update successful.
            // this is to immedietyly sign the user out
            // because we only wants to register and do other stuff
            context.commit('clearUser');
          }).catch((error) => {
            console.log(error);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    signInAction(context, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          // console.log(user.email);
          // console.log(user.displayName);
          context.commit('setUser', user);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          console.log(error);
        });
    },
    signOutAction(context) {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        context.commit('clearUser');
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    },
    onAuthChangedAction(context) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // console.log(user.email);
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const { uid } = user;
          // ...
          context.commit('setUser', user);
          // BUG = when sign up, it will also sign in
        } else {
          // User is signed out
          // ...
        }
      });
    },

    // other
    addTodoAction(context, payload) {
      db.collection('users')
        .doc(this.getters.currentUser.displayName)
        .collection('todos')
        .add({
          text: payload.newTodo,
          // completed: false,
          timestamp: new Date().toISOString(),
          // subTasks: [],
          // editing: false,
          // textCached: '',
        })
        .then((docRef) => {
          // this docRef.id is the unique id of this todo object
          console.log('Document written with ID: ', docRef.id);
          this.dispatch('retrieveTodosAction');
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
    retrieveTodosAction(context) {
      db.collection('users').doc(this.getters.currentUser).collection('todos').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, ' => ', doc.data());
          });
        });

      // const tmpArray = [];
      // db.collection('users')
      //   .doc(this.getters.currentUser.displayName)
      //   .collection('todos')
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       const todoObj = {
      //         timestamp: doc.timestamp,
      //         id: doc.id,

      //       };
      //       tmpArray.push(todoObj);
      //     });
      //   });
      // context.commit('retrieveTodos', tmpArray);
    },

  },
  modules: {
  },
});
