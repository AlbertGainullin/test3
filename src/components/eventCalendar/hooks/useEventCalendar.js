import { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import { useStore } from "hooks/useStore";

export const useEventCalendar = () => {
  const {
    calendarEventList: { getList, list },
  } = useStore();

  const [selectedDate, setSelectedDate] = useState(() => dayjs());

  useEffect(() => {
    getList();
  }, []);

  const isLoading = list?.state === "pending";

  const getEventsByDay = useCallback(
    (date) => {
      if (!list || list.state !== "fulfilled") return [];
      return list.value.filter(
        (eventItem) => eventItem.date === date.format("YYYY-MM-DD")
      );
    },
    [list]
  );

  return {
    isLoading,
    selectedDate,
    setSelectedDate,
    getEventsByDay,
  };
};
