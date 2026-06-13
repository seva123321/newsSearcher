import {
  CalendarOutlined,
  FileTextOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { formatDateRange } from '@/utils/functions';
import type { PanelInfoProps } from '@/types';
import { ButtonAllCollapsed, PanelInfoItem } from '@/components';

export const PanelInfo: React.FC<PanelInfoProps> = ({
  data,
  allCollapsed,
  onToggleAll,
}) => {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-2 p-2 bg-(--color-bg) rounded-xl border border-(--color-border)">
        {/* Информационная панель */}
        <div className="flex gap-2 ">
          {/* <PanelInfoItem
            title="Период"
            value={formatDateRange(
              data.date_range.start_dt,
              data.date_range.end_dt
            )}
            icon={<CalendarOutlined className="text-(--color-accent)" />}
          /> */}
          <PanelInfoItem
            title="Всего новостей"
            value={data?.total_news || 0}
            icon={<FileTextOutlined className="text-(--color-accent)" />}
          />
          <PanelInfoItem
            title="Групп"
            value={data?.total_groups || 0}
            icon={<TeamOutlined className="text-(--color-accent)" />}
          />
        </div>
        <div>
          <ButtonAllCollapsed
            allCollapsed={allCollapsed}
            onToggleAll={onToggleAll}
          />
        </div>
      </div>
    </>
  );
};
