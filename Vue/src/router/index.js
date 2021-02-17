import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/payments',
    name: 'ValidateForm',
    component: () => import('@/components/ValidateForm.vue')
  },
  {
    path: '/history',
    name: 'PaymentHistory',
    component: () => import('@/components/PaymentHistory.vue')
  },
  {
    path: '/success',
    name: 'SuccessfulPayment',
    component: () => import('@/components/SuccessfulPayment.vue')
  },
  {
    path: '/404',
    name: 'Error',
    component: () => import('@/components/Error.vue')
  },
  {
    path: '/',
    redirect: '/payments'
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "SuccessfulPayment" && !store.state.validationPassed) {
    next({ name: "ValidateForm" });
  } else {
    next();
  }
});

export default router;
