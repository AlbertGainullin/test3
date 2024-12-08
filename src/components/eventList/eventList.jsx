import { List, Flex } from "antd";
import { observer } from "mobx-react-lite";
import { LoadingIndicator } from "components";
import { useEventList } from "./hooks/useEventList";

export const EventList = observer(() => {
  const { list, deleteEvent } = useEventList();

  if (!list) return <div>Мероприятий нет</div>;

  return list.case({
    pending: () => (
      <Flex align="center" justify="center">
        <LoadingIndicator isLoading={true} />
      </Flex>
    ),
    rejected: () => <div>Error</div>,
    fulfilled: (value) => (
      <List
        itemLayout="horizontal"
        dataSource={value}
        renderItem={({ id, name, start, end }) => (
          <List.Item
            actions={[
              <a key="list-delete" onClick={() => deleteEvent(id)}>
                Удалить
              </a>,
            ]}
          >
            <List.Item.Meta title={name} description={`${start} - ${end}`} />
          </List.Item>
        )}
      />
    ),
  });
});
