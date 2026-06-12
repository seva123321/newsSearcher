import { Button } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import type { ButtonAllCollapsedProps } from '@/types';

export const ButtonAllCollapsed: React.FC<ButtonAllCollapsedProps> = ({
  allCollapsed,
  onToggleAll,
}) => {
  return (
    <Button
      icon={allCollapsed ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      onClick={() => onToggleAll(!allCollapsed)}
    >
      {allCollapsed ? 'Показать все поля' : 'Скрыть все поля'}
    </Button>
  );
};
