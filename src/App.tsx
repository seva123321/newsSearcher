import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainPage } from '@/pages';

const queryClient = new QueryClient();

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <MainPage />
        </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  );
}
export default App;
