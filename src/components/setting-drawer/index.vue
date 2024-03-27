<script setup lang="ts">
type CheckedType = boolean | string | number;

type ConfType = 'layout' | 'fixedHeader' | 'fixSiderbar' | string;

const props = defineProps<{
  modelValue: Record<string, string | boolean | undefined>
}>();
const emit = defineEmits(['update:modelValue']);

const visible = ref<boolean>(false);
const handleShowDrawer = () => {
  visible.value = !visible.value;
};

const updateConf = (val: string | CheckedType | undefined, type: ConfType) => {
  const newVal = {
    ...toRaw(props.modelValue),
    [`${type}`]: val,
  };

  emit('update:modelValue', newVal);
};
</script>

<template>
  <div class="ant-pro-setting-drawer-handle" @click="handleShowDrawer">
    <setting-outlined v-if="!visible" />
    <close-outlined v-else />
  </div>
  <a-drawer v-model:open="visible" :width="300" placement="right" :closable="false">
    <div class="margin-bottom: 24px">
      <h3>导航模式</h3>
      <a-radio-group :value="modelValue.layout" @change="(e: Event) => updateConf((e.target as HTMLInputElement).value, 'layout')">
        <a-radio value="side">
          左侧菜单布局
        </a-radio>
        <a-radio value="top">
          顶部菜单布局
        </a-radio>
        <a-radio value="mix">
          混合菜单布局
        </a-radio>
      </a-radio-group>
      <a-divider />
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          固定 Header
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.fixedHeader"
            @change="(checked: boolean) => updateConf(checked, 'fixedHeader')"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          固定 左侧菜单
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.fixSiderbar"
            @change="(checked: boolean) => updateConf(checked, 'fixSiderbar')"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          自动分割菜单
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.splitMenus"
            @change="(checked: boolean) => updateConf(checked, 'splitMenus')"
          />
        </a-col>
      </a-row>

      <a-divider />
      <h3>内容区域</h3>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          顶栏
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.headerRender === undefined"
            @change="(checked: boolean) => updateConf(checked === true && undefined, 'headerRender')"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          页脚
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.footerRender === undefined"
            @change="(checked: boolean) => updateConf(checked === true && undefined, 'footerRender')"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          菜单
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            disabled
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.menu === undefined"
            @change="(checked: boolean) => updateConf(checked === true && undefined, 'menu')"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          菜单头
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.menuHeaderRender === undefined"
            @change="(checked: boolean) => updateConf(checked === true && undefined, 'menuHeaderRender')"
          />
        </a-col>
      </a-row>
      <a-row style="margin-bottom: 12px">
        <a-col :span="12">
          多页签
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-switch
            checked-children="开"
            un-checked-children="关"
            :checked="modelValue.multipleTab"
            @change="(checked: boolean) => updateConf(checked, 'multipleTab')"
          />
        </a-col>
      </a-row>
    </div>
  </a-drawer>
</template>

<style lang="less">
.ant-pro-setting-drawer-handle {
  position: absolute;
  top: 240px;
  right: 0px;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: #f6f6f7;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);

  > span {
    font-size: 20px;
  }
}
</style>
