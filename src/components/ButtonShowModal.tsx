import type { ButtonShowModalProps } from '@/types';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

export const ButtonShowModal: React.FC<ButtonShowModalProps> = ({
  onClick,
  isLoading,
}) => {
  return (
    <Tooltip title="Добавление Telegram каналов">
      <Button
        className="h-auto"
        icon={<PlusOutlined />}
        onClick={onClick}
        loading={isLoading}
      >
        Добавление TLG
      </Button>
    </Tooltip>
  );
};

// import type { ButtonShowModalProps, TgChannel } from '@/types';
// import { PlusOutlined } from '@ant-design/icons';
// import { Button, Tooltip } from 'antd';
// import { dataTG } from '@/mockData';
// import { useCallback } from 'react';

// export const ButtonShowModal: React.FC<ButtonShowModalProps> = ({
//   setIsModalOpen,
//   setDataList,
// }) => {
//   // Загрузка данных при открытии модалки
//   const fetchData = useCallback(async () => {
//     const mockData: TgChannel[] = dataTG.data;
//     setDataList(mockData);
//   }, []);

//   // Загружаем данные при открытии модалки
//   const handleShowModal = () => {
//     setIsModalOpen(true);
//     //@TODO Отправка на сервер
//     // GET /tlg

//     fetchData();
//   };

//   return (
//     <Tooltip title="Добавление Telegram каналов">
//       <Button
//         className="h-auto"
//         icon={<PlusOutlined />}
//         onClick={handleShowModal}
//       >
//         Добавление TLG
//       </Button>
//     </Tooltip>
//   );
// };
