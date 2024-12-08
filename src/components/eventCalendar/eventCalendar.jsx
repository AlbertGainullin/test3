import { useCallback } from "react";
import { Calendar, Flex } from "antd";
import { observer } from "mobx-react-lite";
import { LoadingIndicator, EventModal } from "components";
import { EventList } from "./components";
import { useEventCalendar } from "./hooks/useEventCalendar";
import styles from "./eventCalendar.module.css";

export const EventCalendar = observer(() => {
  const { isLoading, selectedDate, setSelectedDate, getEventsByDay } =
    useEventCalendar();

  const cellRender = useCallback(
    (date, info) => {
      if (info.type === "date") {
        const eventsByDay = getEventsByDay(date);

        return (
          <EventList
            list={eventsByDay}
            selectedDay={selectedDate}
            date={date}
          />
        );
      }
      return info.originNode;
    },
    [getEventsByDay, selectedDate]
  );

  return (
    <div className={styles.event_calendar_wrapper}>
      <div>
        <Flex align="center" justify="center">
          <LoadingIndicator isLoading={isLoading} />
        </Flex>
      </div>

      <Calendar
        value={selectedDate}
        onSelect={setSelectedDate}
        cellRender={cellRender}
      />
      <EventModal selectedDate={selectedDate} />
    </div>
  );
});
