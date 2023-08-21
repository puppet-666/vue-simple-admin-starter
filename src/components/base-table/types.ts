import { type TablePaginationConfig } from 'ant-design-vue';
import { type FilterValue, type SorterResult, type TableCurrentDataSource } from 'ant-design-vue/lib/table/interface';
import { type DefaultRecordType } from 'ant-design-vue/lib/vc-table/interface';

export interface ISearchColumn {
  name: string
  title: string
  hide?: boolean
  type: string
  initialValue?: 'visible' | 'hidden' | 'none'
  display?: string
  props?: Record<string, any>
  reactions?: [()=> void]
}

export interface IQueryParams {
  searchValues: Record<string, string>
  pagination: TablePaginationConfig
  filters: Record<string, FilterValue | null>
  sorter: SorterResult<DefaultRecordType> | SorterResult<DefaultRecordType>[]
  source: TableCurrentDataSource<DefaultRecordType>
}
