const routes = [
    {
      path: '/',
      component: () => import('../layouts/SmartModelerLayout.vue'),
      children: [
          { path: '/sm', component: () => import('../views/SmartModelerView.vue')},
          { path: '/pc', name: 'processcreator', component: () => import('../views/ProcessCreatorView.vue')},
        ]
    }
];

export default routes;