import { useEffect } from "react";
import { useStore } from "hooks/useStore";

export const useEventModal = (selectedDate) => {
  const {
    calendarEvent: {
      isOpen,
      toggleOpenModal,
      name,
      create,
      isLoading,
      setDate,
      setName,
      start,
      setStart,
      end,
      setEnd,
      reminderTime,
      setReminderTime,
    },
  } = useStore();

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  return {
    isOpen,
    handleOk: create,
    handleCancel: toggleOpenModal,
    isConfirmLoading: isLoading,
    eventName: name,
    setDate,
    setName,
    start,
    setStart,
    end,
    setEnd,
    reminderTime,
    setReminderTime,
  };
};
