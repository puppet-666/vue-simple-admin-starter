<script lang="ts" setup>
import AddUser from './components/add-user.vue';
import { BaseTable } from '@/components';
import { IQueryParams } from '@/components/base-table/types';

const data = reactive({
  result: [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ],
  page: {
    size: 10,
    current: 1,
    total: 3,
  },
});
const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
];

const searchColumn = [
  {
    name: 'name',
    title: 'name',
    type: 'input',
    props: {
      placeholder: 'Please enter name',
    },
  },
];

async function tableRequest(searchValues: IQueryParams['searchValues'], page: IQueryParams['pagination']) {
  const { name } = searchValues;
  if (!name) {
    return {
      data,
    };
  } else {
    return {
      data: {
        ...data,
        result: data.result.filter((i) => {
          return i.name.toLowerCase().includes(name);
        }),
      },
    };
  }
}

const visible = ref(false);
const mode = ref('add');

function handleAdd() {
  mode.value = 'add';
  visible.value = true;
}

const colRecord = ref();
const colIndex = ref(-1);
function handleEdit(r: any, index: number) {
  mode.value = 'edit';
  colIndex.value = index;
  colRecord.value = {
    ...r,
    __TIME__: new Date().valueOf(),
  };
  visible.value = true;
}

const userModal = ref();
function handleOk(v: any) {
  if (mode.value === 'add') {
    data.result.push(v);
  } else {
    data.result[colIndex.value] = v;
  }
  visible.value = false;
  userModal.value?.reset();
}
</script>

<template>
  <page-container>
    <base-table :columns="columns" :request="tableRequest" :search-column="searchColumn">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
      </template>

      <template #operation>
        <a-button type="primary" @click="handleAdd">
          add
        </a-button>
      </template>

      <template #bodyCell="{ column, record, index }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a @click="handleEdit(record, index)">edit</a>
          </span>
        </template>
      </template>
    </base-table>
    <add-user
      ref="userModal"
      v-model:visible="visible"
      :record="colRecord"
      :mode="mode"
      @ok="handleOk"
    />
  </page-container>
</template>
