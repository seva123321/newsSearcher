import { ChannelItem } from '@/components';
import type { DataItem, TlgListProps } from '@/types';
import { List } from '@/ui';
import { message } from 'antd';

export const TlgList: React.FC<TlgListProps> = ({ dataList, setDataList }) => {
  const handleDelete = (tlg_channel: string) => {
    //@TODO отправка на сервер
    // DELETE   /tlg/delete?tlg_chanel=@baza2

    setDataList(
      dataList.filter((item: DataItem) => item.tlg_channel !== tlg_channel)
    );
    message.success('Удалено');
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">
        Доступные каналы ({dataList.length})
      </h3>
      <List
        items={dataList}
        render={(item) => <ChannelItem item={item} onDelete={handleDelete} />}
      />
    </div>
  );
};
