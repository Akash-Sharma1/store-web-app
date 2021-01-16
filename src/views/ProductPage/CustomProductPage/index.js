import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { mobxify } from 'utils/hoc';
import { useQuery } from '@apollo/client';

import "assets/scss/shop/shop.scss";
import MainBanner  from "views/Common/Ui/Banners/MainBanner";
import StaticBanner from 'views/Common/Ui/Banners/StaticBanner';
import Details from "./Details";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

function ProductPage({ ProductStore: store, match }) {
  const classes = useStyles();
  const id = match.params.id;

  const { loading, error, data } = useQuery(store.GET_PRODUCT, {
    variables: { id },
  });

  if(loading) {
    return (
      <div  className="shop__align-c">
        <h1><small>Loading..</small></h1>
      </div>
    );
  } else {
    store.setProduct(data.product);
  }
  if(error) {
    alert(error);
    return <h1><small>Failed to load, reload..</small></h1>
  }

  let bannerTitle = store.product.name;
  if(bannerTitle && bannerTitle.length > 30) {
    bannerTitle = `${bannerTitle.substring(0,30)}..`
  }

  return(
    <div>
      <MainBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg")}
        buttonText = "Order now"
        buttonRoute = "/orders"
        title = {bannerTitle}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Details product = {store.product}/>
      </div>
      <StaticBanner
        image = {require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg").default}
        buttonText = "Explore now"
        buttonRoute = "/shop/custom-product"
        title = "Build custom products."
      />
    </div>
  );
}

export default mobxify('ProductStore')(ProductPage);