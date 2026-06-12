import type { DateRange, Info } from '@/types/typesNews';
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

export interface ListProps<T = any> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
}

export interface ButtonAllCollapsedProps {
  onToggleAll: (toggle: boolean) => void;
  allCollapsed: boolean;
}
