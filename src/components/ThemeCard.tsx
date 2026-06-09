import React from 'react';
import {
  Card,
  List,
  Avatar,
  Typography,
  Tag,
  Button,
  Space,
  Divider,
  Collapse,
} from 'antd';
import { SendOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

export interface NewsItem {
  tlg_chanel: string;
  date: string;
  link: string;
  text: string;
}

export interface ThemeCardProps {
  theme: string;
  news: NewsItem[];
  maxNews?: number;
  defaultCollapsed?: boolean; // начальное состояние (свёрнута/развёрнута)
  onToggleCollapse?: (collapsed: boolean) => void;
}

const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

const ThemeCard: React.FC<ThemeCardProps> = ({
  theme,
  news,
  maxNews,
  defaultCollapsed = false,
  onToggleCollapse,
}) => {
  const displayNews = maxNews ? news.slice(0, maxNews) : news;
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
        defaultActiveKey={defaultCollapsed ? [] : ['1']}
        onChange={handleCollapseChange}
        expandIconPlacement="end"
        ghost
      >
        <Panel
          key="1"
          header={
            <div className="flex justify-between items-center flex-wrap gap-2">
              <Title
                level={3}
                style={{ margin: 0, color: 'var(--color-text-h)' }}
              >
                {theme}
              </Title>
              <Tag color="purple" className="text-sm px-3 py-1 rounded-full">
                {newsCount} новостей
              </Tag>
            </div>
          }
        >
          <Divider style={{ margin: '1rem 0 1rem 0' }} />
          <List
            itemLayout="vertical"
            dataSource={displayNews}
            renderItem={(item, index) => (
              <List.Item
                key={index}
                className="hover:bg-[var(--color-accent-bg)] rounded-lg transition-colors px-4 py-2 -mx-4"
              >
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <Space size="middle">
                      <Avatar
                        icon={<SendOutlined />}
                        style={{ backgroundColor: '#26A5E4' }}
                      />
                      <Text strong className="text-[var(--color-text-h)]">
                        {item.tlg_chanel}
                      </Text>
                    </Space>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <CalendarOutlined />
                      <span>{formatDate(item.date)}</span>
                    </div>
                  </div>

                  <Paragraph
                    ellipsis={{ rows: 3, expandable: true, symbol: 'ещё' }}
                    className="text-[var(--color-text)]"
                    style={{ marginBottom: '0.5rem' }}
                  >
                    {item.text}
                  </Paragraph>

                  <Button
                    type="link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<SendOutlined />}
                    className="!p-0 !h-auto !text-[var(--color-accent)] hover:!opacity-80"
                  >
                    Читать в Telegram
                  </Button>
                </div>
              </List.Item>
            )}
          />
          {maxNews && news.length > maxNews && (
            <div className="text-center mt-4">
              <Text type="secondary">
                Показаны {maxNews} из {news.length} новостей
              </Text>
            </div>
          )}
        </Panel>
      </Collapse>
    </Card>
  );
};

export default ThemeCard;
