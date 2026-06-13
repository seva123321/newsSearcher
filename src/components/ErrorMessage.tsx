import { ReloadOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Text } = Typography;

export interface ErrorStateProps {
  title?: string;
  subtitle?: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorStateProps> = ({
  title = 'Ошибка получения данных',
  subtitle = 'Не удалось загрузить данные. Проверьте подключение к интернету и попробуйте снова.',
  onRetry,
}) => {
  return (
    <div className="text-center p-4">
      <Result
        status="error"
        icon={null}
        title={title}
        subTitle={
          <div className="mt-2">
            <Text type="secondary" className="block mb-2">
              {subtitle}
            </Text>
            <Text type="secondary" className="text-sm">
              Возможно, сервер временно недоступен.
            </Text>
          </div>
        }
        extra={
          onRetry && (
            <Button
              type="primary"
              icon={<ReloadOutlined />}
              onClick={onRetry}
              className="mt-4"
            >
              Повторить попытку
            </Button>
          )
        }
      />
    </div>
  );
};
