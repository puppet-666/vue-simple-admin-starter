<script lang="ts" setup>
import { PageContainer } from '@ant-design-vue/pro-layout';
import AreaChart from './components/area-chart.vue';
import BarChart from './components/bar-chart.vue';
import pieChart from './components/pie-chart.vue';
import datasetChart from './components/dataset-chart.vue';

const activeKey = ref(1);
</script>

<template>
  <page-container>
    <div class="cell-container">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane :key="1" tab="销售额" />
        <a-tab-pane :key="2" tab="访问量" />
      </a-tabs>
      <area-chart v-if="activeKey === 1" />
      <bar-chart v-if="activeKey === 2" />
    </div>
    <div class="mt-10px">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-card title="销售占比" :bordered="false">
            <pie-chart />
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="销售种类" :bordered="false">
            <dataset-chart />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </page-container>
</template>

<style lang="less" scoped>
.cell-container {
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
