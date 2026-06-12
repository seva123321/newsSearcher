import React from 'react';
import { Typography, Tag } from 'antd';
import type { HeaderThemeCardProps } from '@/components/ThemeCard/types';
const { Title } = Typography;

export const Header: React.FC<HeaderThemeCardProps> = ({
  theme,
  newsCount,
}) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
      <Title level={3} style={{ margin: 0, color: 'var(--color-text-h)' }}>
        {theme}
      </Title>
      <Tag color="purple" className="text-sm px-3 py-1 rounded-full">
        Новостей:&nbsp;{newsCount}
      </Tag>
    </div>
  );
};
