import { ChannelItem, ErrorMessage } from '@/components';
import type { TgChannel, TlgListProps } from '@/types';
import { List } from '@/ui';
import { useDeleteTgChannel } from '@/hooks/useDeleteTgChannel';
import { Spin } from 'antd';

export const TlgList: React.FC<TlgListProps> = ({
  dataList,
  setDataList,
  isLoading,
  isError,
}) => {
  const { mutate: deleteChannel, isPending } = useDeleteTgChannel();

  const handleDelete = (tlg_channel: string) => {
    deleteChannel(tlg_channel, {
      onSuccess: () => {
        setDataList(
          dataList.filter((item: TgChannel) => item.tlg_channel !== tlg_channel)
        );
      },
    });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">
        Доступные каналы ({dataList.length})
      </h3>

      {isLoading ? (
        <div className="text-center py-8">
          <Spin size="medium" description="Загрузка Telegram каналов..." />
        </div>
      ) : !isError ? (
        <List
          items={dataList}
          render={(item) => (
            <ChannelItem
              item={item}
              onDelete={handleDelete}
              loading={isPending}
            />
          )}
        />
      ) : (
        <ErrorMessage
          title="Ошибка получения данных"
          subtitle="Не удалось получить данные о телеграмм каналах."
        />
      )}
    </div>
  );
};
// import { ChannelItem, ErrorMessage } from '@/components';
// import type { TgChannel, TlgListProps } from '@/types';
// import { List } from '@/ui';
// import { useDeleteTgChannel } from '@/hooks/useDeleteTgChannel';
// import { useTgChannels } from '@/hooks/useTgChannels';
// import { Spin } from 'antd';

// export const TlgList: React.FC<TlgListProps> = ({ dataList, setDataList }) => {
//   const { mutate: deleteChannel, isPending } = useDeleteTgChannel();
//   const { isLoading, isError } = useTgChannels();

//   const handleDelete = (tlg_channel: string) => {
//     deleteChannel(tlg_channel, {
//       onSuccess: () => {
//         setDataList(
//           dataList.filter((item: TgChannel) => item.tlg_channel !== tlg_channel)
//         );
//       },
//     });
//   };

//   return (
//     <div>
//       <h3 className="text-lg font-semibold mb-3">
//         Доступные каналы ({dataList.length})
//       </h3>

//       {isLoading ? (
//         <div className="text-center py-8">
//           <Spin size="medium" description="Загрузка Telegram каналов..." />
//         </div>
//       ) : !isError ? (
//         <List
//           items={dataList}
//           render={(item) => (
//             <ChannelItem
//               item={item}
//               onDelete={handleDelete}
//               loading={isPending}
//             />
//           )}
//         />
//       ) : (
//         <ErrorMessage
//           title="Ошибка получения данных"
//           subtitle="Не удалось получить данные о телеграмм каналах."
//         />
//       )}
//     </div>
//   );
// };
