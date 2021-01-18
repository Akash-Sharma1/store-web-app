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

  modal = {
    open: false,
    buttonList: [],
    title: null,
    defaultText: '',
    onCloseAction: null,
  };

  headerColor = 'transparent';

  setModal(value) {
    let temp = this.modal;
    temp.open = value.open ? value.open : false;
    temp.buttonList = value.buttonList ? value.buttonList : [];
    temp.title = value.title ? value.title : null;
    temp.defaultText = value.defaultText ? value.defaultText : '';
    temp.onCloseAction = value.onCloseAction ? value.onCloseAction : null;
    this.modal = value;
  }
  
  setModalItem(item, value) {
    let temp = this.modal;
    temp[item] = value;
    this.modal = temp;
  }

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
      modal: observable,
      notification: observable,
      setModal: action.bound,
      setModalItem: action.bound,
      setNotification: action.bound,
      setNotificationItem: action.bound,
      closeNotification: action.bound,
      setHeaderColor: action.bound,
    });
  }
}

const AppStore = new appStore();

export default AppStore;
