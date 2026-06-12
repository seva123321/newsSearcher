import { FormModal } from '@/components';
import { DatePicker } from 'antd';
import {
  CalendarOutlined,
  FileTextOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { formatDateRange } from '@/utils/functions';
import type { Info } from '@/types';
import { PanelInfoItem } from '@/components';

interface PanelInfoProps {
  data: Info;
}

const { RangePicker } = DatePicker;

export const PanelInfo: React.FC<PanelInfoProps> = ({ data }) => {
  return (
    <>
      {/* Блок фильтров */}
      <div className="mb-4 flex justify-between items-center flex-wrap gap-2 p-4 bg-(--color-bg) rounded-xl border border-(--color-border)">
        <RangePicker
          showTime
          className="bg-(--color-bg)! text-(--color-text)!"
          style={{ borderRadius: '0.5rem' }}
        />

        {/* Информационная панель */}
        <div className="flex gap-4 flex-wrap">
          <PanelInfoItem
            value={formatDateRange(
              data.date_range.start_dt,
              data.date_range.end_dt
            )}
            icon={<CalendarOutlined className="text-(--color-accent)" />}
          />
          <PanelInfoItem
            title="Всего новостей"
            value={data.total_news}
            icon={<FileTextOutlined className="text-(--color-accent)" />}
          />
          <PanelInfoItem
            title="Групп"
            value={data.total_groups}
            icon={<TeamOutlined className="text-(--color-accent)" />}
          />
          <FormModal />
        </div>
      </div>
    </>
  );
};
