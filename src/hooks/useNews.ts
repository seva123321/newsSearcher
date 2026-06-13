import { CONFIG, type NewsData } from '@/types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { DateRange } from '@/types';

const API_BASE_URL = CONFIG.BASE_URL;

const getNews = async (params?: Partial<DateRange>) => {
  const searchParams = new URLSearchParams();

  if (params?.start_dt) {
    searchParams.append('start_dt', params.start_dt);
  }
  if (params?.end_dt) {
    searchParams.append('end_dt', params.end_dt);
  }

  const queryString = searchParams.toString();
  const url = queryString ? `${API_BASE_URL}?${queryString}` : API_BASE_URL;

  return await axios.get<NewsData>(url);
};

export const useNews = (start_dt?: string, end_dt?: string) => {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery({
    queryKey: ['news', { start_dt, end_dt }],
    select: (data) => data.data,
    queryFn: () => getNews({ start_dt, end_dt }),
    enabled: true,
  });

  return {
    news: data,
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
};
