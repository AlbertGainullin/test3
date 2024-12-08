import { calendarEventListStore } from "./calendarEventList";
import { calendarEventStore } from "./calendarEvent";
import { notificationStore } from "./notification";

export class RootStore {
  calendarEventList = calendarEventListStore;
  calendarEvent = calendarEventStore;
  notification = notificationStore;
}
