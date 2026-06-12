import type { PanelInfoItemProps } from '@/types';

export const PanelInfoItem: React.FC<PanelInfoItemProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-(--color-accent-bg) rounded-lg">
      {icon}
      <span className="text-sm font-medium text-(--color-text-h)">
        {title && `${title}:`}&nbsp;
        <span className="text-(--color-accent) font-bold">{value}</span>
      </span>
    </div>
  );
};
