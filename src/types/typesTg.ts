import type { Dayjs } from 'dayjs';

export interface DataItem {
  id: string;
  title: string;
  description?: string;
  date: string;
}

export interface FormValues {
  title: string;
  date: Dayjs;
}
