import type { ReactNode } from 'react';

export interface ListProps<T = any> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
}
