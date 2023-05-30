<script setup lang="ts">
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons-vue';

export interface CurrentUser {
  nickname: string
  avatar?: string
}

defineProps<{
  currentUser: CurrentUser
}>();
</script>

<template>
  <div style="margin-right: 12px">
    <a-space>
      <a-dropdown>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <template #icon>
                <setting-outlined />
              </template>
              <span>个人设置</span>
            </a-menu-item>
            <a-menu-item>
              <template #icon>
                <logout-outlined />
              </template>
              <span>退出登录</span>
            </a-menu-item>
          </a-menu>
        </template>
        <a-avatar shape="square" size="small">
          <template #icon>
            <user-outlined />
          </template>
          {{ currentUser.nickname }}
        </a-avatar>
      </a-dropdown>
    </a-space>
  </div>
</template>
