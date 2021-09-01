import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Firebase from 'firebase'
Vue.use(Router)

Vue.use(Router);
const router = new Router({
  routes: [{
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        login: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
    next('l/ogin')
  } else if (user && !authRequired) {
    next('/login')
  } else {
    next()
  }
})

export default router;
