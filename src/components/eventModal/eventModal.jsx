import { Modal, Input, TimePicker, Space, InputNumber } from "antd";
import { observer } from "mobx-react-lite";
import dayjs from "dayjs";
import { useEventModal } from "./hooks/useEventModal";
import { MIN_REMINDER_MINUTES, MAX_REMINDER_MINUTES } from "./const";

// TODO: add Form from antd, add validation
export const EventModal = observer(({ selectedDate }) => {
  const {
    isOpen,
    handleOk,
    handleCancel,
    isConfirmLoading,
    eventName,
    setName,
    start,
    setStart,
    end,
    setEnd,
    reminderTime,
    setReminderTime,
  } = useEventModal(selectedDate);

  return (
    <Modal
      title="Создать мероприятие"
      open={isOpen}
      onOk={handleOk}
      confirmLoading={isConfirmLoading}
      onCancel={handleCancel}
    >
      <Space direction="vertical">
        {name}
        <Input value={eventName} onChange={setName} />

        <TimePicker
          onChange={setStart}
          format="HH:mm"
          value={dayjs(start, "HH:mm")}
        />

        <TimePicker
          onChange={setEnd}
          format="HH:mm"
          value={dayjs(end, "HH:mm")}
        />

        <InputNumber
          min={MIN_REMINDER_MINUTES}
          max={MAX_REMINDER_MINUTES}
          value={reminderTime}
          onChange={setReminderTime}
        />
      </Space>
    </Modal>
  );
});
