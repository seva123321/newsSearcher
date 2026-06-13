// hooks/useAddTgChannel.ts
import { CONFIG, type TgChannel } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { message } from 'antd';

const API_BASE_URL = `${CONFIG.BASE_URL}/tlg/add`;

const addTgChannel = async (channel: { tlg_channel: string; date: string }) => {
  const response = await axios.post<TgChannel>(API_BASE_URL, channel);
  return response.data;
};

export const useAddTgChannel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTgChannel,
    onSuccess: () => {
      // Инвалидируем кеш, чтобы обновить список
      queryClient.invalidateQueries({ queryKey: ['tg_channels'] });
      message.success('Канал успешно добавлен');
    },
    onError: () => {
      message.error('Ошибка при добавлении канала');
    },
  });
};
