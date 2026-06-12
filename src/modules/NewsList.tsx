import { useState } from 'react';
import { List } from '@/ui';
import { ThemeCard } from '@/components';
import type { NewsListProps } from '@/types';

export const NewsList: React.FC<NewsListProps> = ({ data }) => {
  // 💡 TS автоматически выведет, что item имеет тип NewsTheme
  const [collapsed, setCollapsed] = useState<boolean>(true);

  return (
    <div className="space-y-4">
      <List
        items={data}
        render={(item, index) => (
          <ThemeCard
            key={index}
            theme={item.theme}
            news={item.news}
            maxNews={5}
            onToggleCollapse={(newCollapsed) => setCollapsed(newCollapsed)}
          />
        )}
      />
    </div>
  );
};
