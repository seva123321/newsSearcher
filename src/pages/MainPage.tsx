import { useQuery } from '@tanstack/react-query';
import { Divider, Layout } from 'antd';
import { dataServer } from '@/mockData';

import { NewsList, PanelInfo } from '@/modules';
import { useState } from 'react';
import { PanelActive } from '@/modules';

const { Header, Content } = Layout;

export const MainPage = () => {
  const [allCollapsed, setAllCollapsed] = useState<boolean>(false);
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json()
      ),
  });
  const [newsData, setNewsData] = useState(dataServer);

  const handleSearch = async (params: { start_dt: string; end_dt: string }) => {
    console.log('Поиск с параметрами:', params);

    // Отправка запроса на сервер
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`/api/news?${queryString}`);
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  const handleToggleAll = (collapsed: boolean) => {
    setAllCollapsed(collapsed);
  };

  return (
    <Layout className="rounded-lg overflow-hidden w-full max-w-full shadow-xl">
      <Layout>
        <Header className="text-center h-16 px-4 md:px-12 leading-16 bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white shadow-md transition-all duration-300">
          <span className="text-lg md:text-xl font-semibold tracking-wide">
            Новостной агрегатор
          </span>
        </Header>

        <Content className="p-4 md:p-6 min-h-30 bg-(--color-bg) transition-colors duration-300">
          <div className="flex flex-col gap-4">
            <PanelActive
              dataRange={newsData.info.date_range}
              onSearch={handleSearch}
            />

            <PanelInfo
              data={newsData.info}
              onToggleAll={handleToggleAll}
              allCollapsed={allCollapsed}
            />
          </div>

          <Divider className="my-6" />
          <NewsList data={newsData.data} allCollapsed={allCollapsed} />
        </Content>
      </Layout>
    </Layout>
  );
};
