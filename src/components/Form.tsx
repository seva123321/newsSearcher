import type { Dayjs } from 'dayjs';
import { Button, Form, Input, DatePicker, message } from 'antd';
import { validateStartsWithAt } from '@/utils/functions';
import type { TgChannel, FormTlgProps } from '@/types';
import dayjs from 'dayjs';
import { useAddTgChannel } from '@/hooks/useAddTgChannel';

export const FormTlg: React.FC<FormTlgProps> = ({ dataList, setDataList }) => {
  const [form] = Form.useForm();
  const { mutate: addChannel, isPending } = useAddTgChannel();

  const handleSubmit = async (values: { title: string; date: Dayjs }) => {
    const newItem: TgChannel = {
      tlg_channel: values.title,
      date: values.date.format('YYYY-MM-DD'),
    };

    addChannel(newItem, {
      onSuccess: () => {
        // Обновляем локальное состояние
        setDataList([newItem, ...dataList]);
        form.resetFields();
        form.setFieldsValue({
          date: dayjs(),
        });
      },
    });
  };

  return (
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
        <Input placeholder="Введите название (начиная с @)" />
      </Form.Item>

      <Form.Item
        name="date"
        rules={[{ required: true, message: 'Выберите дату' }]}
        style={{ flex: 1, minWidth: '150px' }}
        initialValue={dayjs()}
      >
        <DatePicker
          style={{ width: '100%' }}
          format="DD.MM.YYYY"
          placeholder="Выберите дату"
        />
      </Form.Item>

      <Form.Item style={{ flex: 0 }}>
        <Button type="primary" htmlType="submit" loading={isPending}>
          Добавить
        </Button>
      </Form.Item>
    </Form>
  );
};

// import { useState } from 'react';
// import type { Dayjs } from 'dayjs';
// import { Button, Form, Input, DatePicker, message } from 'antd';
// import { validateStartsWithAt } from '@/utils/functions';
// import type { TgChannel, FormTlgProps } from '@/types';
// import dayjs from 'dayjs';

// export const FormTlg: React.FC<FormTlgProps> = ({ dataList, setDataList }) => {
//   const [loading, setLoading] = useState(false);
//   const [form] = Form.useForm();

//   const handleSubmit = async (values: { title: string; date: Dayjs }) => {
//     setLoading(true);
//     try {
//       const newItem: TgChannel = {
//         tlg_channel: values.title,
//         date: values.date.format('YYYY-MM-DD'),
//       };
//       //@TODO Отправка на сервер
//       // **POST** /tlg/add
//       //    {
//       //         tlg_channel: "@baza2",
//       //         date: "2026-06-02"
//       //     }
//       console.log('Новый элемент:', newItem);
//       setDataList([newItem, ...dataList]);
//       message.success('Данные добавлены!');
//       form.resetFields();
//       // После сброса снова устанавливаем текущую дату
//       form.setFieldsValue({
//         date: dayjs(),
//       });
//     } catch {
//       message.error('Ошибка при добавлении');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Form
//       form={form}
//       layout="inline"
//       onFinish={handleSubmit}
//       style={{ gap: '16px', flexWrap: 'wrap' }}
//     >
//       <Form.Item
//         name="title"
//         rules={[{ validator: validateStartsWithAt }]}
//         style={{ flex: 2, minWidth: '200px' }}
//       >
//         <Input placeholder="Введите название (начиная с @)" />
//       </Form.Item>

//       <Form.Item
//         name="date"
//         rules={[{ required: true, message: 'Выберите дату' }]}
//         style={{ flex: 1, minWidth: '150px' }}
//         initialValue={dayjs()}
//       >
//         <DatePicker
//           style={{ width: '100%' }}
//           format="DD.MM.YYYY"
//           placeholder="Выберите дату"
//         />
//       </Form.Item>

//       <Form.Item style={{ flex: 0 }}>
//         <Button type="primary" htmlType="submit" loading={loading}>
//           Добавить
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };
