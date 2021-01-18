import React from "react";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";

import "assets/scss/shop/shop.scss";

function ProductTile(props) {
  return(
    <div>
      <GridContainer>
        <GridItem
          xs={12} sm={12} md={12}
        >
          <div
            className="listing__image"
            style={{
              backgroundImage: (
                "url(" +
                // props.product.image
                require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg").default
                + ")"
              )
              ,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <div className="listing__title">
            <h4
              className="listing__title--text"
            >{props.product.name}</h4>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <div className="listing__price">
            <h6
              style={{
                marginTop: 0,
              }}
            >{props.product.price} Rs</h6>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <div className={"listing__"+(props.product.availablity || props.product.status)}>
            <h6
              style={{
                marginTop: 0,
              }}
            >{props.product.availablity || props.product.status}</h6>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default ProductTile;
