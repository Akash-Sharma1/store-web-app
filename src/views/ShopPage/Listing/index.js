import React from "react";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";

import "assets/scss/shop/shop.scss";

function Listing() {
  return(
    <div>
      <GridContainer>
        <GridItem xs={0} sm={3} md={3}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className="shop__align-c">
                <h6 className="shop__text-c">Material</h6>
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={9} md={9}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div className="shop__align-c">
                <h6 className="shop__text-c">Material</h6>
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Listing;
