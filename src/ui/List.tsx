import type { ListProps } from '@/types';

export const List = <T = any,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item, index)}</li>
      ))}
    </ul>
  );
};
