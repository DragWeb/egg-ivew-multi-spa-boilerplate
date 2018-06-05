import Main from 'component/layout/content/content.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404'
  },
  component: () => import('spa/error-page/404.vue')
};

export const page403 = {
  path: '/403',
  meta: {
    title: '403'
  },
  name: 'error-403',
  component: () => import('spa/error-page/403.vue')
};

export const page500 = {
  path: '/500',
  meta: {
    title: '500'
  },
  name: 'error-500',
  component: () => import('spa/error-page/500.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  component: () => import('spa/list.vue')
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/developss',
    icon: 'ios-home',
    title: 'develop5',
    name: 'develop7',
    component: () => import('spa/detail.vue'),
    children: [
      {
        path: 'event',
        title: '事实管理3',
        name: '事实管理4',
        component: () => import('spa/detail.vue')
      }
    ]
  }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  otherRouter,
  ...appRouter,
  page500,
  page403,
  page404
];
