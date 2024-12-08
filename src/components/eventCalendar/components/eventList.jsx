import { Button, Badge } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";
import styles from "../eventCalendar.module.css";
import { useStore } from "hooks/useStore";

export const EventList = observer(({ list, date, selectedDay }) => {
  const {
    calendarEvent: { toggleOpenModal },
  } = useStore();

  return (
    <div className={styles.events_wrapper}>
      {list.length > 0 && (
        <ul className={styles.events}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <Badge className={styles.badge} status={"success"} text={name} />
            </li>
          ))}
        </ul>
      )}

      {dayjs(date).isSame(selectedDay) && (
        <Button
          type="primary"
          block
          className={styles.plus_button}
          onClick={toggleOpenModal}
          size="small"
        >
          <PlusOutlined />
        </Button>
      )}
    </div>
  );
});
