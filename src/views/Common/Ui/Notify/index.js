import React, { useEffect, useState, useRef } from "react";
import { mobxify } from 'utils/hoc';

import SnackbarContent from "components/common/Snackbar/SnackbarContent.js";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";

import AppBar from "@material-ui/core/AppBar";
function Notify({ AppStore: store }) {

  const closeNotification = () => {
    if(store.notification.onCloseAction){
      store.notification.onCloseAction();
    }
    store.closeNotification();
  }

  const [seconds, setSeconds] = useState(0);
  const countRef = useRef(seconds);
  countRef.current = seconds;

  useEffect(() => {
    let interval;
    if(store.notification.open){

      interval = setInterval(() => {
        setSeconds(countRef.current + 1);
        if(countRef.current >= 5) {
          clearInterval(interval);
          closeNotification();
        }

      }, 1000);
    }

    return () => clearTimeout(interval);
  },[store]);

  let icon = Check;
  if(icon === "warning") {
    icon = Warning;
  }

  if(store.notification.open) {
    return (

    <AppBar>
      <SnackbarContent
        message={
          <span>
            <>
              <b>{store.notification.title}:</b>
              {' '}
              {store.notification.body}
            </>
          </span>
        }
        close
        closeAction={closeNotification}
        color={store.notification.color}
        icon={icon}
      />
    </AppBar>
    );
  } else {
    return null;
  }
}

export default mobxify('AppStore')(Notify);
