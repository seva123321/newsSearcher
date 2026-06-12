import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainPage } from '@/pages';
import locale from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');
const queryClient = new QueryClient();

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider locale={locale}>
        <QueryClientProvider client={queryClient}>
          <MainPage />
        </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  );
}
export default App;
