import { useQuery } from '@tanstack/react-query';
import { Layout } from 'antd';
import { dataServer } from '@/mockData';

import { NewsList, PanelInfo } from '@/modules';

const { Header, Footer, Content } = Layout;

export const MainPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json()
      ),
  });

  return (
    <Layout className="rounded-lg overflow-hidden w-full max-w-full shadow-xl">
      <Layout>
        <Header className="text-center h-16 px-4 md:px-12 leading-16 bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white shadow-md transition-all duration-300">
          <span className="text-lg md:text-xl font-semibold tracking-wide">
            Новостной агрегатор
          </span>
        </Header>
        <Content className="p-4 md:p-6 min-h-30 bg-(--color-bg) transition-colors duration-300">
          <PanelInfo data={dataServer.info} />
          <NewsList data={dataServer.data} />
        </Content>
      </Layout>
    </Layout>
  );
};
