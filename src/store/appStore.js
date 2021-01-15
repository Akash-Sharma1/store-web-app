import {
  action, makeObservable, observable
} from 'mobx';
import { gql } from '@apollo/client';

class appStore {
  notification = {
    open: false,
    color: "success",
    title: "Sucess",
    body: "Successfully created",
    icon: "",
    onCloseAction: null,
  };

  headerColor = "transparent";

  setHeaderColor(value) {
    this.headerColor = value;
  }

  closeNotification() {
    this.headerColor = "white";
    this.notification.open = false;
  }

  setNotification(value) {
    this.notification = value;
  }

  setNotificationItem(item, value) {
    let temp = this.notification;
    temp[item] = value;
    this.notification = temp;
  }

  constructor() {
    makeObservable(this, {
      notification: observable,
      setNotification: action.bound,
      setNotificationItem: action.bound,
      closeNotification: action.bound,
      setHeaderColor: action.bound,
    });
  }
}

const AppStore = new appStore();

export default AppStore;
