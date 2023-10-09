/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-10-09 15:45:05
*/
const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'main',
      meta: {
        title: '首页',
        icon: { type: 'el', icon: 'Apple' }
      },
      component: () => import('view/index.vue'),
      children: [
        {
          path: 'a',
          name: 'a',
          redirect: { name: 'aa' },
          children: [
            {
              path: 'aa',
              name: 'aa',
              meta: {
                title: '列表页',
                icon: { type: 'el', icon: 'Apple' }
              },
              component: () => import('view/aa.vue')
            },
            {
              path: 'ab',
              name: 'ab',
              meta: {
                title: '详情页',
                icon: { type: 'el', icon: 'Apple' }
              },
              component: () => import('view/ab.vue')
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
});
export default router;