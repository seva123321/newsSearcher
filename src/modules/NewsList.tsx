import { List } from '@/ui';
import { ThemeCard } from '@/components';
import type { NewsListProps } from '@/types';

export const NewsList: React.FC<NewsListProps> = ({ data, allCollapsed }) => {
  return (
    <div className="space-y-4">
      <List
        items={data}
        render={(item) => (
          <ThemeCard
            key={item.theme}
            theme={item.theme}
            news={item.news}
            allCollapsed={allCollapsed}
          />
        )}
      />
    </div>
  );
};
