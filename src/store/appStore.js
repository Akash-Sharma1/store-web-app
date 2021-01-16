import {
  action, makeObservable, observable
} from 'mobx';
import { gql } from '@apollo/client';

class appStore {
  notification = {
    open: false,
    color: 'success',
    title: 'Sucess',
    body: 'Successfully created',
    icon: '',
    onCloseAction: null,
  };

  headerColor = 'transparent';

  setHeaderColor(value) {
    this.headerColor = value;
  }

  closeNotification() {
    this.headerColor = 'white';
    this.notification.open = false;
  }

  setNotification(value) {
    let temp = {
      open: false,
      color: 'success',
      title: 'Sucess',
      body: 'Successfully created',
      icon: '',
      onCloseAction: null,
    };
    temp.open = value.open ? value.open : true;
    temp.color = value.color ? value.color : 'success';
    temp.title = value.title ? value.title : 'Sucess';
    temp.body = value.body ? value.body : 'Successfully created';
    temp.icon = value.icon ? value.icon : '';
    temp.onCloseAction = value.onCloseAction ? value.onCloseAction : null;
    this.notification = temp;
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
