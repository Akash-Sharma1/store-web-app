import React from "react";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import SectionCarousel from "views/Common/Ui/Carausal";
import "assets/scss/shop/shop.scss";
import DetailsLayout from './Common/DetailsLayout'

function Details(props) {
  let images = null;
  // if(props.order.product.images) {
  //   images = <SectionCarousel images={props.product.images} />
  // } else {
  //   images = (
  //     <h2 className="product__title product__word-wrap">
  //       <small>
  //         Loading...
  //       </small>
  //     </h2>
  //   );
  // }

  const PENDING = (props.order.status === "PENDING");

  const specification = (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <h5 className={"product__req-status"}>
          <label>Status:</label>
          {' '}
          {props.order.status}
        </h5>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <h5 className="product__description product__word-wrap">
          <label>Our messages:</label>
          {' '}
          <small>
            {
              (props.order.statusDescription) ?
                <>{props.order.statusDescription} Rs</>
              : <>Not available</>
            }
          </small>
        </h5>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <h5 className="product__price">
          <label>Amount:</label>
          {' '}
          {
            (props.order.amount) ?
              <>{props.order.amount} Rs</>
            : <>Not available</>
          }
        </h5>
      </GridItem>
    </GridContainer>
  );

  return(
    <DetailsLayout
      NOTPENDING={!PENDING}
      order={props.order}
      images={images}
      specifications={specification}
      disabledMessage={{
        title:'Can\'t cancel',
        text: `
          The order is not cancellable in ${props.order.status} state
        `
      }}
    />
  );
}

export default Details;
