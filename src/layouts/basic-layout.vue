<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { type RouteContextProps, clearMenuItem, getMenuData } from '@ant-design-vue/pro-layout';

const router = useRouter();
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));

const state = reactive<Omit<RouteContextProps, 'menuData'>>({
  collapsed: false, // default collapsed
  openKeys: [], // defualt openKeys
  selectedKeys: [], // default selectedKeys
});
const loading = ref(false);
const proConfig = ref({
  layout: 'side',
  navTheme: 'dark',
  fixedHeader: true,
  fixSiderbar: true,
  splitMenus: true,
  multipleTab: true,
});
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map((item) => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title || '',
    };
  }));
const currentUser = reactive({
  nickname: 'Admin',
  avatar: 'A',
});

watch(
  router.currentRoute,
  () => {
    const matched = router.currentRoute.value.matched.concat();
    state.selectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path);
    state.openKeys = matched.filter(r => r.path !== router.currentRoute.value.path).map(r => r.path);
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <pro-layout
    v-model:collapsed="state.collapsed"
    v-model:selectedKeys="state.selectedKeys"
    v-model:openKeys="state.openKeys"
    :loading="loading"
    header-theme="light"
    :menu-data="menuData"
    :breadcrumb="{ routes: breadcrumb }"
    disable-content-margin
    style="min-height: 100vh"
    iconfont-url="//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js"
    v-bind="proConfig"
  >
    <template #menuHeaderRender>
      <router-link :to="{ path: '/' }">
        <img src="https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg">
        <h1>Simple Admin</h1>
      </router-link>
    </template>
    <template #rightContentRender>
      <RightContent :current-user="currentUser" />
    </template>
    <!-- custom breadcrumb itemRender  -->
    <template #breadcrumbRender="{ route, params, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link
        v-else
        :to="{ path: route.path, params }"
      >
        {{ route.breadcrumbName }}
      </router-link>
    </template>
    <template v-if="proConfig.multipleTab" #tabRender>
      <TabBar />
    </template>
    <SettingDrawer v-model="proConfig" />
    <router-view v-slot="{ Component, route }">
      <transition
        name="slide-left"
        mode="out-in"
      >
        <component
          :is="Component"
          :key="route.path"
        />
      </transition>
    </router-view>
  </pro-layout>
</template>
