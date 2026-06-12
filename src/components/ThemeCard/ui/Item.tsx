import { Typography, Button, Tooltip } from 'antd';
import {
  SendOutlined,
  CalendarOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { formatDate } from '@/utils/functions';
import type { ItemThemeCardProps } from '@/components/ThemeCard/types';

const { Text, Paragraph } = Typography;

export const Item: React.FC<ItemThemeCardProps> = ({ item, index }) => {
  const bgColorClass =
    index % 2 === 0 ? 'bg-[var(--color-bg)]' : 'bg-[var(--color-bg-alt)]';

  return (
    <div
      className={`
        ${bgColorClass}
        hover:bg-(--color-accent-bg)
        grid grid-cols-1 lg:grid-cols-[auto_1fr_auto]
        gap-4
        rounded-lg transition-all duration-200 
        p-0 md:py-3 md:px-4
      `}
    >
      <div className="min-w-35">
        <div className="flex items-center gap-2 mb-1">
          <SendOutlined className="text-(--color-accent) text-sm shrink-0" />
          <Text strong className="text-(--color-text-h) truncate">
            {item.tlg_channel}
          </Text>
        </div>
        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <CalendarOutlined />
            {formatDate(item.date)}
          </span>
        </div>
      </div>

      <div className="min-w-0">
        <Paragraph
          ellipsis={{ rows: 4, expandable: true, symbol: 'Читать полностью' }}
          className="text-(--color-text) text-sm text-justify mb-0 leading-relaxed"
        >
          {item.text}
        </Paragraph>
      </div>

      <div className="flex items-start justify-end lg:justify-start">
        <Tooltip placement="top" title="Перейти по ссылке">
          <Button
            type="text"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            icon={<LinkOutlined />}
            size="small"
            className="text-(--color-accent)! hover:bg-(--color-accent-bg)!"
          />
        </Tooltip>
      </div>
    </div>
  );
};
