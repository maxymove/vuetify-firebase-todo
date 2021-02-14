/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      authenticated: false,
      data: null,
    },
  },
  getters: {
    currentUser(state) {
      return state.user.data;
    },
    authenticated(state) {
      return state.user.authenticated;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user.data = payload;
      state.user.authenticated = payload !== null;
    },
  },
  actions: {
    signUpAction(context, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          // console.log(user.email);
          console.log(user.uid);
          // console.log(user.metadata);
          // ...
          const { currentUser } = firebase.auth();

          currentUser.updateProfile({
            displayName: payload.displayName,
            // photoURL: 'https://example.com/jane-q-user/profile.jpg',
          }).then(() => {
            // Update successful.
            console.log(user.displayName);
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
        })
        .catch((error) => {
          console.log(error);
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // ..
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
  },
  modules: {
  },
});
