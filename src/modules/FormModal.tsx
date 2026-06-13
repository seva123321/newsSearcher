import { useState } from 'react';
import { Modal, Divider } from 'antd';
import type { DataItem } from '@/types';
import { Form, TlgList, ButtonShowModal } from '@/components';

export const FormModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataList, setDataList] = useState<DataItem[]>([]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonShowModal
        setIsModalOpen={setIsModalOpen}
        setDataList={setDataList}
      />

      <Modal
        title="Добавление Telegram каналов"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={650}
        destroyOnHidden
      >
        <div className="mb-6">
          <Form dataList={dataList} setDataList={setDataList} />
        </div>

        <Divider />

        <TlgList dataList={dataList} setDataList={setDataList} />
      </Modal>
    </>
  );
};
