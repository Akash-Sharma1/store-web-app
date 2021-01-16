import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import Button from "components/common/CustomButtons/Button.js";
import SectionCarousel from "views/Common/Ui/Carausal";

import "assets/scss/shop/shop.scss";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
const useStyles = makeStyles(styles);

function Details(props) {
  const classes = useStyles();

  let images = null;
  if(props.product.images) {
    images = <SectionCarousel images={props.product.images} />
  } else {
    images = (
      <h2 className="product__title product__word-wrap">
        <small>
          Loading...
        </small>
      </h2>
    );
  }
  return(
    <div>
      <GridContainer className="listing">
        <GridItem xs={12} sm={6} md={6}>
          {images}
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h2 className="product__title product__word-wrap">
                {props.product.name}
              </h2>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <h3 className="product__description product__word-wrap">
                {props.product.description}
              </h3>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <h5 className="product__price">
                {props.product.price} Rs
              </h5>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <h5 className={"product__"+props.product.availablity}>
                {props.product.availablity}
              </h5>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Button
                color="info"
              >
                Add to cart
              </Button>
              {'  '}
              <Button
                color="success"
              >
                Order now
              </Button>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <h6>
                <small>
                  Want to know more?
                  <a
                    href="/contact-us"
                    className={classes.navLink + " " + classes.navLinkActive}
                    color="transparent"
                  >
                    Contact us for this product
                  </a>
                  </small>
              </h6>
            </GridItem>

          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Details;
