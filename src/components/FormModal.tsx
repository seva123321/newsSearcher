import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
  Space,
  message,
  List,
  Tag,
  Divider,
} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import type { Dayjs } from 'dayjs';

interface DataItem {
  id: string;
  title: string;
  description?: string;
  date: string;
}

interface FormValues {
  title: string;
  date: Dayjs;
}

const FormModalWithList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState<DataItem[]>([]);

  // Загрузка данных при открытии модалки
  const fetchData = useCallback(async () => {
    // Имитация загрузки данных
    const mockData: DataItem[] = [
      {
        id: '1',
        title: '@baza2',
        description: 'Ночная атака...',
        date: '2026-06-10',
      },
      {
        id: '2',
        title: '@mash',
        description: 'Ситуация на фронтах...',
        date: '2026-06-09',
      },
    ];
    setDataList(mockData);
  }, []);

  // Загружаем данные при первом открытии модалки
  const handleShowModal = () => {
    setIsModalOpen(true);
    fetchData(); // Выносим вызов за пределы useEffect
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const newItem: DataItem = {
        id: Date.now().toString(),
        title: values.title,
        date: values.date.format('YYYY-MM-DD'),
      };
      // Отправка на сервер
      console.log('Новый элемент:', newItem);
      setDataList([newItem, ...dataList]);
      message.success('Данные добавлены!');
      form.resetFields();
    } catch {
      message.error('Ошибка при добавлении');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    setDataList(dataList.filter((item) => item.id !== id));
    message.success('Удалено');
  };

  // Валидация: значение должно начинаться с @
  const validateStartsWithAt = (_: unknown, value: string) => {
    if (!value) {
      return Promise.reject(new Error('Пожалуйста, введите название канала'));
    }
    if (!value.startsWith('@')) {
      return Promise.reject(
        new Error('Название должно начинаться с символа @')
      );
    }
    if (value.length < 2) {
      return Promise.reject(
        new Error('После @ должен быть хотя бы один символ')
      );
    }
    // Дополнительная валидация: только буквы, цифры и нижнее подчеркивание
    const regex = /^@[a-zA-Z0-9_]+$/;
    if (!regex.test(value)) {
      return Promise.reject(new Error('Допустимы только буквы, цифры и _'));
    }
    return Promise.resolve();
  };

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={handleShowModal}>
        Добавление TLG
      </Button>

      <Modal
        title="Добавление Telegram каналов"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={700}
        destroyOnClose
      >
        {/* Форма добавления - все поля в одной строке */}
        <div className="mb-6">
          <Form
            form={form}
            layout="inline"
            onFinish={handleSubmit}
            style={{ gap: '16px', flexWrap: 'wrap' }}
          >
            <Form.Item
              name="title"
              rules={[{ validator: validateStartsWithAt }]}
              style={{ flex: 2, minWidth: '200px' }}
            >
              <Input placeholder="Введите название канала (например, @baza2)" />
            </Form.Item>

            <Form.Item
              name="date"
              rules={[{ required: true, message: 'Выберите дату' }]}
              style={{ flex: 1, minWidth: '150px' }}
            >
              <DatePicker
                style={{ width: '100%' }}
                format="DD.MM.YYYY"
                placeholder="Выберите дату"
              />
            </Form.Item>

            <Form.Item style={{ flex: 0 }}>
              <Button type="primary" htmlType="submit" loading={loading}>
                Добавить
              </Button>
            </Form.Item>
          </Form>
        </div>

        <Divider />

        {/* Список существующих данных */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Существующие записи ({dataList.length})
          </h3>
          <List
            dataSource={dataList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    key="delete"
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(item.id)}
                  />,
                ]}
              >
                <List.Item.Meta
                  title={
                    <Space>
                      <span>{item.title}</span>
                      <Tag>{item.date}</Tag>
                    </Space>
                  }
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </div>
      </Modal>
    </>
  );
};

export default FormModalWithList;
