export interface DateRange {
  start_dt: string;
  end_dt: string;
}

export interface Info {
  date_range: DateRange;
  total_news: number;
  total_groups: number;
}

export interface NewsItem {
  tlg_channel: string;
  date: string;
  link: string;
  text: string;
}

export interface NewsTheme {
  theme: string;
  news: NewsItem[];
}

export interface NewsListProps {
  data: NewsTheme[];
  allCollapsed: boolean;
}

export interface NewsData {
  info: Info;
  data: NewsTheme[];
}
