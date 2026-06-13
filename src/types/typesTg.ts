export interface TgChannel {
  tlg_channel: string;
  date: string;
}

export interface TgChannelsResponse {
  data: TgChannel[];
}
