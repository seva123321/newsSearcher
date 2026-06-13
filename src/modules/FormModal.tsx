import { useState } from 'react';
import { Modal, Divider } from 'antd';
import type { TgChannel } from '@/types';
import { Form, TlgList, ButtonShowModal } from '@/components';
import { useTgChannels } from '@/hooks/useTgChannels';

export const FormModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, isError, refetch, isFetching } = useTgChannels();
  const [dataList, setDataList] = useState<TgChannel[]>([]);

  const handleOpenModal = async () => {
    setIsModalOpen(true);
    const { data } = await refetch();
    if (data) {
      setDataList(data);
    }
  };

  return (
    <>
      <ButtonShowModal onClick={handleOpenModal} isLoading={isFetching} />

      <Modal
        title="Добавление Telegram каналов"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={650}
        destroyOnHidden
      >
        <div className="mb-6">
          <Form dataList={dataList} setDataList={setDataList} />
        </div>

        <Divider />

        <TlgList
          dataList={dataList}
          setDataList={setDataList}
          isLoading={isLoading}
          isError={isError}
        />
      </Modal>
    </>
  );
};

// import { useState } from 'react';
// import { Modal, Divider } from 'antd';
// import type { TgChannel } from '@/types';
// import { Form, TlgList, ButtonShowModal } from '@/components';

// export const FormModal: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [dataList, setDataList] = useState<TgChannel[]>([]);

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <ButtonShowModal
//         setIsModalOpen={setIsModalOpen}
//         setDataList={setDataList}
//       />

//       <Modal
//         title="Добавление Telegram каналов"
//         open={isModalOpen}
//         onCancel={handleCancel}
//         footer={null}
//         width={650}
//         destroyOnHidden
//       >
//         <div className="mb-6">
//           <Form dataList={dataList} setDataList={setDataList} />
//         </div>

//         <Divider />

//         <TlgList dataList={dataList} setDataList={setDataList} />
//       </Modal>
//     </>
//   );
// };
