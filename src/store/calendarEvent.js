import { runInAction, makeAutoObservable } from "mobx";
import { Api } from "api";
import { calendarEventListStore } from "./calendarEventList";
import { notificationStore } from "./notification";

class CalendarEventStore {
  name = "Новая задача";
  start = "08:00";
  end = "17:00";
  reminderTime = 15;
  date = "";
  isOpen = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setName = (inputValue) => {
    this.name = inputValue.target.value;
  };

  setStart = (start) => {
    if (!start) return;
    this.start = start.format("HH:mm");
  };

  setEnd = (end) => {
    if (!end) return;
    this.end = end.format("HH:mm");
  };

  setReminderTime = (reminderTime) => {
    this.reminderTime = reminderTime;
  };

  setDate = (date) => {
    if (!date) return;
    this.date = date.format("YYYY-MM-DD");
  };

  init = () => {
    this.name = "Новая задача";
    this.start = "08:00";
    this.end = "17:00";
    this.reminderTime = 15;
  };

  toggleOpenModal = () => {
    this.init();
    this.isOpen = !this.isOpen;
  };

  create = async () => {
    const newEvent = {
      name: this.name,
      start: this.start,
      end: this.end,
      reminderTime: this.reminderTime,
      date: this.date,
    };

    if (!newEvent.name) {
      notificationStore.setNotification({
        type: "error",
        message: "Error: event is invalid",
      });
      throw new Error("Error: event is invalid");
    }

    try {
      this.isLoading = true;
      const result = await Api.event.create(newEvent);
      if (result) {
        runInAction(() => {
          calendarEventListStore.getList();

          this.toggleOpenModal();
          this.isLoading = false;

          notificationStore.setNotification({
            type: "success",
            message: "Событие добавленно!",
          });
        });
      }
    } catch (e) {
      this.isLoading = false;
      notificationStore.setNotification({
        type: "error",
        message: e,
      });
    }
  };

  deleteEvent = async (eventId) => {
    try {
      this.isLoading = true;
      const result = await Api.event.delete(eventId);
      if (result) {
        runInAction(() => {
          calendarEventListStore.getList();
          this.isLoading = false;

          notificationStore.setNotification({
            type: "success",
            message: "Событие удаленно!",
          });
        });
      }
    } catch (e) {
      this.isLoading = false;
      notificationStore.setNotification({
        type: "error",
        message: e,
      });
    }
  };
}

export const calendarEventStore = new CalendarEventStore();
