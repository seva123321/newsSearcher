import type { DateRange, Info, TgChannel } from '@/types';
import type { ReactNode } from 'react';

export interface PanelActiveProps {
  dataRange: DateRange | undefined;
  onSearch?: (params: { start_dt: string; end_dt: string }) => void;
}

export interface PanelInfoProps {
  data: Info | undefined;
  onToggleAll: (toggle: boolean) => void;
  allCollapsed: boolean;
}

export interface PanelInfoItemProps {
  title?: string;
  value: string | number;

  icon: ReactNode;
}

export interface ChannelItemProps {
  item: TgChannel;
  onDelete: (tlg_channel: string) => void;
  loading?: boolean;
}

export interface ButtonAllCollapsedProps {
  onToggleAll: (toggle: boolean) => void;
  allCollapsed: boolean;
}

export interface ButtonShowModalProps {
  onClick: () => void;
  isLoading?: boolean;
}

export interface TlgListProps {
  dataList: TgChannel[];
  setDataList: (
    data: TgChannel[] | ((prev: TgChannel[]) => TgChannel[])
  ) => void;
  isLoading: boolean;
  isError: boolean;
}

export interface FormTlgProps {
  dataList: TgChannel[];
  setDataList: (
    data: TgChannel[] | ((prev: TgChannel[]) => TgChannel[])
  ) => void;
}

export interface ListProps<T = any> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
}
