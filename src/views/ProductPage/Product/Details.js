import React from "react";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import SectionCarousel from "views/Common/Ui/Carausal";
import "assets/scss/shop/shop.scss";
import DetailsLayout from '../Common/DetailsLayout'

function Details(props) {
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

  const INSTOCK = (props.product.availablity === "INSTOCK");

  const specification = (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <h5 className="product__title product__word-wrap">
          <label>Name:</label>
          {' '}
          {props.product.name}
        </h5>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <h5 className="product__description product__word-wrap">
          <label>Description:</label>
          {' '}
          <small>{props.product.description}</small>
        </h5>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <h5 className="product__price">
          <label>Price:</label>
          {' '}
          {
            (props.product.price) ?
              <>{props.product.price} Rs</>
            : <>Not available</>
          }
        </h5>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <h5 className={"product__"+props.product.availablity}>
          <label>Availablity:</label>
          {' '}
          {props.product.availablity}
        </h5>
      </GridItem>
    </GridContainer>
  );

  return(
    <DetailsLayout
      ELIGIBLE={INSTOCK}
      images={images}
      specifications={specification}
      disabledMessage={{
        title:'Product Out of stock',
        text: `
          Product is currenlt unavailable,
          try out some other products for now,
          or you can always go to custom build to give us an order
        `
      }}
    />
  );
}

export default Details;
