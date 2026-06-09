import ThemeCard from '@/components/ThemeCard';
import { useQuery } from '@tanstack/react-query';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import { Layout } from 'antd';
import { useState } from 'react';

const { Header, Footer, Content } = Layout;

export const MainPage = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
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
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
  };

  const layoutStyle: React.CSSProperties = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
  };
  console.log(data);

  const dataNews = {
    theme: 'БПЛА в Москве',
    news: [
      {
        tlg_chanel: '@baza2',
        date: '2026-06-10T09:15:12.155Z',
        link: 'https://t.baza2/6567326523',
        text: 'БПЛА сегодня летали в Москве',
      },
      {
        tlg_chanel: '@baza2',
        date: '2026-06-10T09:15:12.155Z',
        link: 'https://t.baza2/6567326523',
        text: 'БПЛА сегодня летали в Москве',
      },
      {
        tlg_chanel: '@baza2',
        date: '2026-06-10T09:15:12.155Z',
        link: 'https://t.baza2/6567326523',
        text: 'БПЛА сегодня летали в Москве',
      },
      {
        tlg_chanel: '@baza2',
        date: '2026-06-10T09:15:12.155Z',
        link: 'https://t.baza2/6567326523',
        text: 'БПЛА сегодня летали в Москве',
      },
    ],
  };

  return (
    <Layout style={layoutStyle}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          {/* <RangePicker showTime className="border-orange-500 shadow-lg" /> */}
          <RangePicker showTime className="!bg-[var(--color-bg)]" />
          <ThemeCard
            theme={dataNews.theme}
            news={dataNews.news}
            onToggleCollapse={(newCollapsed) => setCollapsed(newCollapsed)}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
