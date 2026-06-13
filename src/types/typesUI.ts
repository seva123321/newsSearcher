import type { DateRange, Info, DataItem } from '@/types';
import type { ReactNode } from 'react';

export interface PanelActiveProps {
  dataRange: DateRange;
  onSearch?: (params: { start_dt: string; end_dt: string }) => void;
}

export interface PanelInfoProps {
  data: Info;
  onToggleAll: (toggle: boolean) => void;
  allCollapsed: boolean;
}

export interface PanelInfoItemProps {
  title?: string;
  value: string | number;

  icon: ReactNode;
}

export interface ChannelItemProps {
  item: DataItem;
  onDelete: (tlg_channel: string) => void;
}

export interface ButtonAllCollapsedProps {
  onToggleAll: (toggle: boolean) => void;
  allCollapsed: boolean;
}
export interface ButtonShowModalProps {
  setIsModalOpen: (trigger: boolean) => void;
  setDataList: (data: DataItem[] | ((prev: DataItem[]) => DataItem[])) => void;
}

export interface TlgListProps {
  dataList: DataItem[];
  setDataList: (data: DataItem[] | ((prev: DataItem[]) => DataItem[])) => void;
}

export interface FormTlgProps {
  dataList: DataItem[];
  setDataList: (data: DataItem[] | ((prev: DataItem[]) => DataItem[])) => void;
}

export interface ListProps<T = any> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
}
