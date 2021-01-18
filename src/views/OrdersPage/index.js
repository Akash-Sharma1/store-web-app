import React, {useEffect} from "react";
import { mobxify } from 'utils/hoc';
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import "assets/scss/shop/shop.scss";
import MainBanner from 'views/Common/Ui/Banners/MainBanner';
import Details from "./Details";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles(styles);

function OrdersPage({ OrderStore: store, match }) {
  const classes = useStyles();
  
  const id = match.params.id;

  useEffect(() => {
    if(id){
      store.getOrder(id)
      .catch(err => store.setLoadingError(err))
      store.setIsLoading(false);
    }
  }, [id, store]);

  if (store.loadingError) {
    return <Redirect to="/404" />;
  }

  return(
    <div>
      <MainBanner
        small
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        title = 'My Order'
        noButton
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {
          store.isLoading && <>
            <div className="shop__align-c">
              <h1><small>Loading...</small></h1>
            </div>
          </>
        }
        {
          !store.isLoading && <>
            <Details order = {store.Order}/>
          </>
        }
      </div>
    </div>
  );
}

export default mobxify('OrderStore')(OrdersPage);
