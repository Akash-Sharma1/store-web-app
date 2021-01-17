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

function ProductPage({ CustomProductStore: store, match, AppStore }) {
  const classes = useStyles();
  
  const id = match.params.id;
  useEffect(() => {
    store.getProduct(id)
    .then(res => {
      store.setProduct(res.data.customProduct);
      store.setLoadingError(null);
    })
    .catch(err => store.setLoadingError(err))
    store.setIsLoading(false);
  }, [id, store, AppStore]);

  let bannerTitle = store.product.name;
  if(bannerTitle && bannerTitle.length > 30) {
    bannerTitle = `${bannerTitle.substring(0,30)}..`
  }

  if (store.loadingError) {
    return <Redirect to="/404" />;
  }

  let content = null;
  if (store.isLoading) {
    content = <div
      className="shop__align-c"
    >
      <h1><small>Loading...</small></h1>
    </div>
  } else {
    content = <Details product = {store.product}/>
  }

  return(
    <div>
      <MainBanner
        small
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        title = {bannerTitle}
        noButton
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        {content}
      </div>
    </div>
  );
}

export default mobxify('CustomProductStore', 'AppStore')(ProductPage);