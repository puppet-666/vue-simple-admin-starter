<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { useUserTheme } from './hooks/useTheme';

useUserTheme();
</script>

<template>
  <a-style-provider hash-priority="high">
    <config-provider :locale="zhCN">
      <router-view />
    </config-provider>
  </a-style-provider>
</template>
