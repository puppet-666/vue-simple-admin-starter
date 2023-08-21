# base-table

## Props
ps: 此处仅说明与 antdv table 有区别的配置，antdv table 原有配置可以直接传入
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| searchColumn | 配置表格头部搜索栏, 当为空时不显示搜索栏 | --- | [] |
| pagination | 配置表格分页 | Object，与 antdv table 保持一致 | {  total: attrs.total, pageSize: attrs.pageSize, position: ['bottomCenter'], showTotal: (total: number, range: number) => `共 ${total} 条`, showSizeChanger: true} |

## slot
| 参数 | 说明 |
| --- | --- |
| bodyCell | 与 andtv 中 bodyCell 一致 |
| operation | 表格操作栏 |
| default | 默认插入 |

## 事件
| 参数 | 说明 |
| --- | --- |
| search | 点击查询时触发 |
| reset | 点击重置时触发 |

## tips
搜索栏需要用到的搜索组件需要在 constants 中的 componentsMap 注册，目前已有的类型
| 参数 | 类型 |
| --- | --- |
| input | Input |
| rangePicker | RangePicker |