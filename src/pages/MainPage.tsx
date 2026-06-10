import ThemeCard from '@/components/ThemeCard';
import { useQuery } from '@tanstack/react-query';
import FormModal from '@/components/FormModal';
import {
  Button,
  DatePicker,
  Flex,
  Space,
  Tag,
  Statistic,
  Row,
  Col,
} from 'antd';
import {
  CalendarOutlined,
  FileTextOutlined,
  TeamOutlined,
} from '@ant-design/icons';
const { RangePicker } = DatePicker;
import { Layout } from 'antd';
import { useState } from 'react';

const { Header, Footer, Content } = Layout;

export const MainPage = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json()
      ),
  });

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
  };

  const contentStyle: React.CSSProperties = {
    padding: '24px',
    minHeight: 120,
    backgroundColor: 'var(--color-bg)',
  };

  const layoutStyle: React.CSSProperties = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
  };

  const dataServere = {
    info: {
      date_range: {
        start_dt: '2026-06-10T09:15:12.155Z',
        end_dt: '2026-06-10T09:15:12.155Z',
      },
      total_news: 30,
      total_groups: 10,
    },
    data: [
      {
        theme: 'БПЛА в Москве',
        news: [
          {
            tlg_chanel: '@baza2',
            date: '2026-06-10T09:15:12.155Z',
            link: 'https://t.me/baza2/6567326523',
            text: 'БПЛА сегодня летали в Москве. По предварительным данным, нарушений нет.',
          },
        ],
      },
      {
        theme: 'СВО',
        news: [
          {
            tlg_chanel: '@baza2',
            date: '2026-06-10T09:15:12.155Z',
            link: 'https://t.me/baza2/6567326523',
            text: 'БПЛА сегодня летали в Москве',
          },
          {
            tlg_chanel: '@baza2',
            date: '2026-06-10T09:15:12.155Z',
            link: 'https://t.me/baza2/6567326523',
            text: 'БПЛА сегодня летали в Москве',
          },
          {
            tlg_chanel: '@baza2',
            date: '2026-06-10T09:15:12.155Z',
            link: 'https://t.me/baza2/6567326523',
            text: 'БПЛА сегодня летали в Москве',
          },
          {
            tlg_chanel: '@baza2',
            date: '2026-06-10T09:15:12.155Z',
            link: 'https://t.me/baza2/6567326523',
            text: 'БПЛА сегодня летали в Москве',
          },
        ],
      },
    ],
  };

  // Обработчик успешной отправки формы
  const handleFormSuccess = (values: any) => {
    console.log('Форма успешно отправлена:', values);
    // Здесь можно обновить список данных на странице
    // refetch() или обновить состояние
  };

  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return `${startDate.toLocaleDateString('ru-RU', options)} - ${endDate.toLocaleDateString('ru-RU', options)}`;
  };

  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Header style={headerStyle}>Новостной агрегатор</Header>
        <Content style={contentStyle}>
          {/* Блок фильтров */}
          <div className="mb-6 flex justify-between items-center flex-wrap gap-4 p-4 bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)]">
            <RangePicker
              showTime
              className="!bg-[var(--color-bg)] !text-[var(--color-text)]"
              style={{ borderRadius: '0.5rem' }}
            />

            {/* Информационная панель */}
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-2 bg-[var(--color-accent-bg)] rounded-lg">
                <CalendarOutlined className="text-[var(--color-accent)]" />
                <span className="text-sm text-[var(--color-text)]">
                  {formatDateRange(
                    dataServere.info.date_range.start_dt,
                    dataServere.info.date_range.end_dt
                  )}
                </span>
              </div>
              {/* Вариант 1: Стандартная кнопка */}
              <FormModal onSuccess={handleFormSuccess} />

              {/* Вариант 2: Кастомная кнопка-триггер */}
              {/* <FormModal 
                    onSuccess={handleFormSuccess}
                    triggerButton={
                      <Button type="primary" style={{ marginLeft: 16 }}>
                        Создать новость
                      </Button>
                    }
                  /> */}

              <div className="flex items-center gap-2 px-3 py-2 bg-[var(--color-accent-bg)] rounded-lg">
                <FileTextOutlined className="text-[var(--color-accent)]" />
                <span className="text-sm font-medium text-[var(--color-text-h)]">
                  Всего новостей:{' '}
                  <span className="text-[var(--color-accent)] font-bold">
                    {dataServere.info.total_news}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-[var(--color-accent-bg)] rounded-lg">
                <TeamOutlined className="text-[var(--color-accent)]" />
                <span className="text-sm font-medium text-[var(--color-text-h)]">
                  Групп:{' '}
                  <span className="text-[var(--color-accent)] font-bold">
                    {dataServere.info.total_groups}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Карточки новостей */}
          <div className="space-y-4">
            {dataServere.data.map((item, index) => (
              <ThemeCard
                key={index}
                theme={item.theme}
                news={item.news}
                maxNews={5}
                onToggleCollapse={(newCollapsed) => setCollapsed(newCollapsed)}
              />
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
