<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
import { createForm, onFormValuesChange, setValidateLanguage } from '@formily/core';
import { Form, Input } from 'ant-design-vue';
import {
  Field,
  FormProvider,
  connect,
  mapProps,
} from '@formily/vue';

const props = withDefaults(defineProps<{
  visible: boolean
  record: any
  mode: string
}>(), {
  visible: false,
});
const emit = defineEmits(['update:visible', 'ok']);

const isShowModal = useVModel(props, 'visible', emit);

const FormItem = connect(
  Form.Item,
  mapProps({
    validator: 'rules',
    title: 'label',
    required: 'required',
    dataSource: 'dataSource',
  }),
);
const form = createForm();

watch(() => props.record, (v) => {
  form.setValues({
    ...v,
  });
});

const componentsMap: Record<string, any> = {
  input: Input,
};
const column = [
  {
    name: 'name',
    title: 'name',
    initialValue: 'name',
    type: 'input',
    props: {

    },
    rules: [{ required: true, message: 'Please enter name' }],
  },
  {
    name: 'age',
    title: 'age',
    type: 'input',
    rules: [{ required: true, message: 'Please enter age' }],
  },
];

function reset() {
  form.reset();
}

function handleCancel() {
  reset();
}

const validateError = ref<Array<any>>([]);
async function handleOk() {
  form.validate().then(() => {
    validateError.value = [];
    emit('ok', Object.assign({}, form.values));
    return Promise.resolve();
  }).catch((err: any) => {
    validateError.value = err;
    return Promise.reject(err);
  });
}

function getValidateStatus(name: string, key: string) {
  return validateError.value.find(i => i.address === name)?.[key] || undefined;
}

defineExpose({
  reset,
});
</script>

<template>
  <a-modal v-model:open="isShowModal" :title="mode === 'add' ? 'Add User' : 'Edit User'" @cancel="handleCancel" @ok="handleOk">
    <form-provider :form="form">
      <template v-for="item of column" :key="item.name">
        <field
          :name="item.name"
          :title="item?.title || ''"
          :decorator="[FormItem]"
          :label-col="{
            span: 4,
          }"
          :initial-value="item.initialValue"
          :component="[componentsMap[item.type], { ...item.props }]"
          :validator="item.rules"
          :validate-status="getValidateStatus(item.name, 'type')"
          :help="getValidateStatus(item.name, 'messages')"
        />
      </template>
    </form-provider>
  </a-modal>
</template>
