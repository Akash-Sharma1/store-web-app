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

  const ELIGIBLE = (props.product.req_status === "REVIEW_COMPLETED");

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
            : <>Not reviewed Yet</>
          }
        </h5>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <h5 className={"product__req-status"}>
          <label>Request Status:</label>
          {' '}
          {props.product.req_status}
        </h5>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <h6 className="product__description product__word-wrap">
          <label>Our Message:</label>
          {' '}
          {props.product.req_text}
        </h6>
      </GridItem>
    </GridContainer>
  );

  return(
    <DetailsLayout
      ELIGIBLE={ELIGIBLE}
      productId={props.product.id}
      images={images}
      specifications={specification}
      disabledMessage={{
        title:'Product is currently under review',
        text: `
          We are reviewing your product requirements,
          we are avaiable 24 x 7 for you,
          feel free contacting us
        `
      }}
    />
  );
}

export default Details;
