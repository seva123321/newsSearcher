import { Card, Divider, Collapse } from 'antd';
import type { CollapseProps } from 'antd';

import { List } from '@/ui';
import { Item } from '@/components/ThemeCard/ui/Item';
import { Header } from '@/components/ThemeCard/ui/Header';
import type { ThemeCardProps } from '@/components/ThemeCard/types';

export const ThemeCard: React.FC<ThemeCardProps> = ({
  theme,
  news,
  defaultCollapsed = false,
  allCollapsed,
  onToggleCollapse,
}) => {
  const displayNews = news;
  const newsCount = news.length;
  const defaultActiveKey = (
    allCollapsed !== undefined ? allCollapsed : defaultCollapsed
  )
    ? []
    : ['1'];

  const handleCollapseChange = (keys: string | string[]) => {
    const newKeys = Array.isArray(keys) ? keys : [keys];
    const isCollapsed = newKeys.length === 0;
    onToggleCollapse?.(isCollapsed);
  };

  const collapseItems: CollapseProps['items'] = [
    {
      key: '1',
      label: <Header theme={theme} newsCount={newsCount} />,
      children: (
        <>
          <Divider style={{ margin: '1rem 0 1rem 0' }} />
          <List
            items={displayNews}
            render={(item, index) => <Item item={item} index={index} />}
          />
        </>
      ),
    },
  ];

  return (
    <Card
      className="mb-1 shadow-md hover:shadow-lg transition-shadow duration-300"
      variant="borderless"
      style={{ borderRadius: '1rem', backgroundColor: 'var(--color-bg)' }}
    >
      <Collapse
        key={allCollapsed ? 'collapsed' : 'expanded'}
        bordered={false}
        size="small"
        defaultActiveKey={defaultActiveKey}
        onChange={handleCollapseChange}
        expandIconPlacement="end"
        ghost
        items={collapseItems}
      />
    </Card>
  );
};
