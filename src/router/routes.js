const routes = [
    {
      path: '/',
      component: () => import('../layouts/BasicLayout.vue'),
      children: [
          { path: '', component: () => import('../views/Landing.vue')},
          { path: '/home', name: 'home', component: () => import('../views/Home.vue')},
          { path: '/about', name: 'about', component: () => import('../views/About.vue')},
      ]
    }
];

export default routes;