import { useCallback, useEffect } from "react";
import { notification } from "antd";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";

export const Notification = observer(() => {
  const [api, contextHolder] = notification.useNotification();
  const {
    notification: { type, message, description, clear },
  } = useStore();

  const showNotification = useCallback(() => {
    if (!type || !message) return;

    api[type]({
      message,
      description,
      onClose: clear,
    });
  }, [type, message, description]);

  useEffect(() => {
    showNotification();
  }, [showNotification]);

  if (!type || !message) return null;

  return <>{contextHolder}</>;
});
