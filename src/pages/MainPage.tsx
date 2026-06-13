import { Divider, Layout, Spin } from 'antd';
import { NewsList, PanelInfo } from '@/modules';
import { useState } from 'react';
import { PanelActive } from '@/modules';
import { useNews } from '@/hooks/useNews';
import type { DateRange } from '@/types';
import { ErrorMessage } from '@/components';

const { Header, Content } = Layout;

export const MainPage = () => {
  const [allCollapsed, setAllCollapsed] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<Partial<DateRange>>({});

  const { news, isLoading, isError, refetch } = useNews(
    searchParams.start_dt,
    searchParams.end_dt
  );

  const handleSearch = (params: DateRange) => {
    console.log('Поиск с параметрами:', params);
    setSearchParams(params);
  };

  const handleToggleAll = (collapsed: boolean) => {
    setAllCollapsed(collapsed);
  };

  const handleRetry = () => {
    refetch();
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
              dataRange={news?.info?.date_range}
              onSearch={handleSearch}
            />

            <PanelInfo
              data={news?.info}
              onToggleAll={handleToggleAll}
              allCollapsed={allCollapsed}
            />
          </div>

          <Divider className="my-6" />

          {isLoading ? (
            <div className="text-center py-8">
              <Spin size="medium" description="Загрузка новостей..." />
            </div>
          ) : !isError ? (
            <NewsList data={news?.data || []} allCollapsed={allCollapsed} />
          ) : (
            <ErrorMessage onRetry={handleRetry} />
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

// import { useQuery } from '@tanstack/react-query';
// import { Divider, Layout } from 'antd';
// import { dataServer } from '@/mockData';

// import { NewsList, PanelInfo } from '@/modules';
// import { useState } from 'react';
// import { PanelActive } from '@/modules';
// import { useNews } from '@/hooks/useNews';

// const { Header, Content } = Layout;

// export const MainPage = () => {
//   const [allCollapsed, setAllCollapsed] = useState<boolean>(false);
//   //@TODO Отправка на сервер (первичный запрос)
//   const { news } = useNews();

//   const [newsData, setNewsData] = useState(news);
//   // const [newsData, setNewsData] = useState(dataServer);

//   const handleSearch = async (params: { start_dt: string; end_dt: string }) => {
//     console.log('Поиск с параметрами:', params);
//     //@TODO Отправка на сервер
//     // **GET** **GET** /?start_dt=2026-06-09T08:15:12.155Z &end_dt=2026-06-10T09:15:12.155Z
//     //Формат даты-new Date().toISOString()
//     try {
//       const { news } = useNews({ start_dt, end_dt });
//       setNewsData(news);
//     } catch (error) {
//       console.error('Ошибка при загрузке данных:', error);
//     }
//   };

//   const handleToggleAll = (collapsed: boolean) => {
//     setAllCollapsed(collapsed);
//   };

//   return (
//     <Layout className="rounded-lg overflow-hidden w-full max-w-full shadow-xl">
//       <Layout>
//         <Header className="text-center h-16 px-4 md:px-12 leading-16 bg-linear-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white shadow-md transition-all duration-300">
//           <span className="text-lg md:text-xl font-semibold tracking-wide">
//             Новостной агрегатор
//           </span>
//         </Header>

//         <Content className="p-4 md:p-6 min-h-30 bg-(--color-bg) transition-colors duration-300">
//           <div className="flex flex-col gap-4">
//             <PanelActive
//               dataRange={newsData.info.date_range}
//               onSearch={handleSearch}
//             />

//             <PanelInfo
//               data={newsData.info}
//               onToggleAll={handleToggleAll}
//               allCollapsed={allCollapsed}
//             />
//           </div>

//           <Divider className="my-6" />
//           <NewsList data={newsData.data} allCollapsed={allCollapsed} />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };
