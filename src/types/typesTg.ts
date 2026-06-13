// import type { Dayjs } from 'dayjs';

export interface DataItem {
  tlg_channel: string;
  date: string;
}

export interface FormValues {
  data: DataItem[];
}
