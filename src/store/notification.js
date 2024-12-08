import { makeAutoObservable } from "mobx";

class NotificationStore {
  type = "";
  message = "";
  description = "";

  constructor() {
    makeAutoObservable(this);
  }

  setNotification = ({ type, message, description }) => {
    this.type = type;
    this.message = message;
    this.description = description;
  };

  clear = () => {
    this.type = "";
    this.message = "";
    this.description = "";
  };
}

export const notificationStore = new NotificationStore();
