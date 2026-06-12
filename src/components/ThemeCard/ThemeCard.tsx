import React from 'react';
import { Card, Divider, Collapse } from 'antd';

import { List } from '@/ui';
import { Item } from '@/components/ThemeCard/ui/Item';
import { Header } from '@/components/ThemeCard/ui/Header';
import type { ThemeCardProps } from '@/components/ThemeCard/types';

const { Panel } = Collapse;

export const ThemeCard: React.FC<ThemeCardProps> = ({
  theme,
  news,
  defaultCollapsed = false,
  onToggleCollapse,
}) => {
  const displayNews = news;
  const newsCount = news.length;

  const handleCollapseChange = (keys: string | string[]) => {
    const isCollapsed = keys.length === 0;
    onToggleCollapse?.(isCollapsed);
  };

  return (
    <Card
      className="mb-1 shadow-md hover:shadow-lg transition-shadow duration-300"
      variant="borderless"
      style={{ borderRadius: '1rem', backgroundColor: 'var(--color-bg)' }}
    >
      <Collapse
        bordered={false}
        size="small"
        defaultActiveKey={defaultCollapsed ? [] : ['1']}
        onChange={handleCollapseChange}
        expandIconPlacement="end"
        ghost
      >
        <Panel key="1" header={<Header theme={theme} newsCount={newsCount} />}>
          <Divider style={{ margin: '1rem 0 1rem 0' }} />
          <List
            items={displayNews}
            render={(item, index) => <Item item={item} index={index} />}
          />
        </Panel>
      </Collapse>
    </Card>
  );
};
