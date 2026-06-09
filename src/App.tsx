import { StyleProvider } from '@ant-design/cssinjs';
import { DatePicker, ConfigProvider } from 'antd';

const { RangePicker } = DatePicker;

function App() {
  return (
    <StyleProvider layer>
      <ConfigProvider>
        <RangePicker showTime className="border-orange-500 shadow-lg" />
        <div
          style={{
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
          }}
        >
          <RangePicker className="!bg-[var(--color-bg)]" />
        </div>
      </ConfigProvider>
    </StyleProvider>
  );
}
export default App;
