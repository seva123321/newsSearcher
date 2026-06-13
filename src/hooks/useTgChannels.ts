// hooks/useTgChannels.ts
import { CONFIG, type TgChannel } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_BASE_URL = `${CONFIG.BASE_URL}/tlg`;

const getTgChannels = async (): Promise<TgChannel[]> => {
  const response = await axios.get<TgChannel[]>(API_BASE_URL);
  return response.data;
};

export const useTgChannels = () => {
  const { data, isLoading, isSuccess, isFetching, isError, refetch } = useQuery(
    {
      queryKey: ['tg_channels'],
      queryFn: getTgChannels,
      enabled: false,
    }
  );

  return {
    tgChannels: data,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    refetch,
  };
};
