import { v4 as uuid } from "uuid";
import { INITIAL_EVENT_DATA } from "./mock/data";

export class EventApi {
  data = [];

  constructor() {
    const savedLocalData = localStorage.getItem("eventData");
    this.data = savedLocalData
      ? JSON.parse(savedLocalData)
      : INITIAL_EVENT_DATA;
  }

  get = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    }).then(() => this.data);
  };

  create = async (event) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    }).then(() => {
      if (event) {
        const eventWithId = { id: uuid(), ...event };
        this.data.push(eventWithId);
        this.updateLocalStorage();
        return eventWithId;
      }

      throw new Error("Error: create calendar event");
    });
  };

  update = async (event) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 200);
    }).then(() => {
      const updatedEventIndex = this.data.findIndex(
        ({ id }) => id === event.id
      );

      if (updatedEventIndex > -1) {
        this.data[updatedEventIndex] = event;
        this.updateLocalStorage();
        return true;
      }

      return false;
    });
  };

  delete = async (eventId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 200);
    }).then(() => {
      const deletedEventIndex = this.data.findIndex(({ id }) => id !== eventId);

      if (deletedEventIndex > -1) {
        this.data.splice(deletedEventIndex, 1);
        this.updateLocalStorage();
        return true;
      }

      throw new Error("Error: delete calendar event");
    });
  };

  updateLocalStorage = () => {
    localStorage.setItem("eventData", JSON.stringify(this.data));
  };
}
