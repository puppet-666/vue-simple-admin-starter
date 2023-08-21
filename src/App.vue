<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { useUserTheme } from './hooks/useTheme';

dayjs.locale('zh-cn');
useUserTheme();
</script>

<template>
  <a-style-provider hash-priority="high">
    <config-provider :locale="zhCN">
      <router-view />
    </config-provider>
  </a-style-provider>
</template>
