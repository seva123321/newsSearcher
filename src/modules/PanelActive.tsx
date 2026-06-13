import { FormModal } from '@/modules';
import type { PanelActiveProps } from '@/types';
import { Button, DatePicker } from 'antd';
import { CalendarOutlined, SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';

const { RangePicker } = DatePicker;

export const PanelActive: React.FC<PanelActiveProps> = ({
  dataRange,
  onSearch,
}) => {
  const [dateRange, setDateRange] = useState<[Dayjs, Dayjs] | null>(
    dataRange?.start_dt && dataRange?.end_dt
      ? [dayjs(dataRange.start_dt), dayjs(dataRange.end_dt)]
      : null
  );

  const handleDateChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (dates && dates[0] && dates[1]) {
      setDateRange([dates[0], dates[1]]);
    } else {
      setDateRange(null);
    }
  };

  const handleSubmit = () => {
    if (!dateRange) {
      console.warn('Даты не выбраны');
      return;
    }
    const startDt = dateRange[0].toISOString();
    const endDt = dateRange[1].toISOString();

    const params = new URLSearchParams({
      start_dt: startDt,
      end_dt: endDt,
    });

    console.log('Отправка запроса:', params.toString());
    console.log('start_dt:', startDt);
    console.log('end_dt:', endDt);

    if (onSearch) {
      onSearch({
        start_dt: startDt,
        end_dt: endDt,
      });
    }
  };

  return (
    <div className="px-4 py-8 bg-(--color-bg) rounded-xl border border-(--color-border) shadow-sm">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <CalendarOutlined className="text-(--color-accent)" />
          <span className="text-sm font-medium text-(--color-text-h)">
            Период:&nbsp;
            <RangePicker
              showTime={{ format: 'HH:mm' }}
              value={dateRange}
              onChange={handleDateChange}
              format="DD.MM.YYYY HH:mm"
              placeholder={['Начало', 'Конец']}
              className="bg-(--color-bg)! text-(--color-text)!"
              style={{ borderRadius: '0.5rem', minWidth: '320px' }}
            />
          </span>
          <Button
            type="text"
            icon={<SearchOutlined />}
            onClick={handleSubmit}
            className="text-(--color-accent)! hover:bg-(--color-accent-bg)!"
          >
            Отправка запроса
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <FormModal />
        </div>
      </div>
    </div>
  );
};
