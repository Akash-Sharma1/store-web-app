import React, { useEffect } from "react";
import { mobxify } from 'utils/hoc';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Warning from "@material-ui/icons/Warning";

import "assets/scss/shop/shop.scss";
import MainBanner from 'views/Common/Ui/Banners/MainBanner';
import Listing from './Listing';

import styles from "assets/jss/material-kit-react/views/landingPage";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles(styles);

function OrdersPage({ OrderStore: store, match, AppStore }) {
  const classes = useStyles();
  const OrderType = match.params.type;

  const getOrders = (page = null) => {
    if(OrderType === 'cart') {
      store.getCart(page).then()
      .catch(err => {
        store.setLoadingError(err);
        AppStore.setNotification({
          color: "danger",
          title: "Failed",
          body: "Something went wrong",
          icon: Warning,
        });
        store.setIsLoading(false);
      })
    } else {
      store.getOrders(page).then()
      .catch(err => {
        store.setLoadingError(err);
        AppStore.setNotification({
          color: "danger",
          title: "Failed",
          body: "Something went wrong",
          icon: Warning,
        });
        store.setIsLoading(false);
      })
    }
  }

  useEffect(() => {
    getOrders();
  },[]);

  if (OrderType && OrderType !== "cart") {
    return <Redirect to="/404" />;
  }

  let content = null;
  if (store.isLoading) {
    content = <div
      className="shop__align-c"
    >
      <h1><small>Loading...</small></h1>
    </div>
  }
  return(
    <div>
      <MainBanner
        small
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        title = 'My Orders'
        noButton
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <br/>
            <br/>
            {content}
            {
              !store.isLoading && 
              <Listing
                orders={store.orders}
                getOrders={getOrders}
                maxxPage={store.maxxPage}
                activeTab={store.currPage}
                setActiveTab={store.setCurrPage}
              />
            }
        </div>
        </div>
      </div>
    </div>
  );
}

export default mobxify('OrderStore', 'AppStore')(OrdersPage);