import BlankLayout from '@/layouts/blank-layout.vue';

const admins = [
  {
    path: '/welcome',
    name: 'welcome',
    meta: { title: '工作台', icon: 'icon-icon-test' },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/admins',
    name: 'admins',
    meta: { title: '管理页', icon: 'icon-tuijian', flat: true },
    component: BlankLayout,
    redirect: () => ({ name: 'page1' }),
    children: [
      {
        path: 'page-1',
        name: 'page1',
        meta: { title: '一级页面', icon: 'icon-tuijian' },
        component: () => import('@/views/admins/page-info.vue'),
      },
      {
        path: 'page-2',
        name: 'page2',
        meta: { title: '二级页面', icon: 'icon-tuijian' },
        component: () => import('@/views/admins/page-typography.vue'),
      },
      {
        path: 'dynamic-match/:id(\\d+)',
        name: 'dynamic-match',
        // 路由 path 默认参数再 meta.params 里
        meta: { title: '动态参数页面', params: { id: 1 } },
        component: () => import('@/views/admins/dynamic-match.vue'),
      },
      {
        path: 'page-search',
        name: 'page-search',
        meta: { title: '查询表格' },
        component: () => import('@/views/admins/page-search.vue'),
      },
    ],
  },
  {
    path: '/version',
    name: 'version',
    meta: { title: 'Version', icon: 'icon-antdesign' },
    component: () => import('@/views/Detail.vue'),
  },
];

export default admins;
