// hooks/useDeleteTgChannel.ts
import { CONFIG } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { message } from 'antd';

const API_BASE_URL = `${CONFIG.BASE_URL}/tlg/delete`;

const deleteTgChannel = async (tlg_channel: string) => {
  const response = await axios.delete(
    `${API_BASE_URL}?tlg_channel=${tlg_channel}`
  );
  return response.data;
};

export const useDeleteTgChannel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTgChannel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tg_channels'] });
      message.success('Канал удален');
    },
    onError: () => {
      message.error('Ошибка при удалении канала');
    },
  });
};
