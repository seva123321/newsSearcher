import type { ChannelItemProps } from '@/types';
import { formatDateOne } from '@/utils/functions';
import { DeleteOutlined, SendOutlined } from '@ant-design/icons';
import { Button, Tag, Avatar, Tooltip } from 'antd';

export const ChannelItem: React.FC<ChannelItemProps> = ({
  item,
  onDelete,
  loading,
}) => {
  const telegramLink = `https://t.me/${item.tlg_channel.replace('@', '')}`;

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(telegramLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group bg-(--color-bg) border border-(--color-border) rounded-xl hover:border-(--color-accent) transition-all duration-200 mb-3 last:mb-0 hover:shadow-lg">
      <div className="p-1.5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-baseline  gap-3 flex-1">
            <Avatar
              size={20}
              className="shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: '#26A5E4' }}
              icon={<SendOutlined />}
            />

            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-base text-(--color-text-h) cursor-pointer hover:text-(--color-accent) transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  {item.tlg_channel}
                </a>

                <Tag color="processing" className="px-3 py-0 text-xs">
                  парсится c {formatDateOne(item.date)}
                </Tag>
              </div>
            </div>
          </div>

          <Tooltip title="Удалить канал">
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDelete(item.tlg_channel)}
              className="opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50 dark:hover:bg-red-900/20"
              loading={loading}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
