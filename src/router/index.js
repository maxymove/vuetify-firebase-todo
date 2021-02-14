import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../views/Profile.vue';

import Todo from '../views/Todo.vue';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register' && !store.getters.isUserAuth) next({ name: 'Login' });
  else next();
});

export default router;
