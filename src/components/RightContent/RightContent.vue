<script setup lang="ts">
export interface CurrentUser {
  nickname: string
  avatar?: string
}

defineProps<{
  currentUser: CurrentUser
}>();

const { logout } = useUser();
const handleLogout = () => {
  logout();
};

const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
</script>

<template>
  <div style="margin-right: 12px">
    <a-space :size="24">
      <a-tooltip>
        <template #title>
          {{ isFullscreen ? '点击退出全屏模式' : '点击切换全屏模式' }}
        </template>
        <a-button
          type="dashed"
          size="small"
          @click="toggleFullScreen"
        >
          <template #icon>
            <fullscreen-exit-outlined v-if="isFullscreen" />
            <fullscreen-outlined v-else />
          </template>
        </a-button>
      </a-tooltip>
      <a-dropdown :trigger="['click']">
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <template #icon>
                <setting-outlined />
              </template>
              <span>个人设置</span>
            </a-menu-item>
            <a-menu-item @click="handleLogout">
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
