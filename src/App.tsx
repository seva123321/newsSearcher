import { StyleProvider } from '@ant-design/cssinjs';
import { DatePicker, ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainPage } from '@/pages';

const queryClient = new QueryClient();
const { RangePicker } = DatePicker;

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider>
        <QueryClientProvider client={queryClient}>
          <RangePicker showTime className="border-orange-500 shadow-lg" />
          <div
            style={{
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
            }}
          >
            <MainPage />
            <RangePicker className="!bg-[var(--color-bg)]" />
          </div>
        </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  );
}
export default App;
