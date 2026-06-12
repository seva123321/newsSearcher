import type { NewsItem, NewsTheme } from '@/types';

export interface ThemeCardProps extends NewsTheme {
  maxNews?: number;
  defaultCollapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
}

export interface HeaderThemeCardProps {
  theme: string;
  newsCount: number;
}

export interface ItemThemeCardProps {
  item: NewsItem;
  index: number;
}
