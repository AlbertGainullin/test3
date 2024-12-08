import { useEffect } from "react";
import { useStore } from "hooks/useStore";

export const useEventList = () => {
  const {
    calendarEventList: { getList, list },
    calendarEvent: { deleteEvent },
  } = useStore();

  useEffect(() => {
    getList();
  }, []);

  return {
    list,
    deleteEvent,
  };
};
