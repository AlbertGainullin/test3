import { makeAutoObservable } from "mobx";
import { fromPromise } from "mobx-utils";
import { Api } from "api";

class CalendarEventListStore {
  list;

  constructor() {
    makeAutoObservable(this);
  }

  getList = () => {
    this.list = fromPromise(Api.event.get());
  };
}

export const calendarEventListStore = new CalendarEventListStore();
