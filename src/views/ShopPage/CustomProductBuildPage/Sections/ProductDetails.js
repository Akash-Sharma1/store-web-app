import React from "react";

import { mobxify } from 'utils/hoc';
import GridItem from "components/common/Grid/GridItem.js";
import GridContainer from "components/common/Grid/GridContainer.js";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function ProductDetails({ CustomProductStore: store }) {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <label>Requirements:</label>
        </GridItem>
        <GridItem xs={10} sm={7} md={7}>
          <TextareaAutosize
            defaultValue = {store.product.description}
            disabled
            className="custom-p__textarea custom-p__truncate"
            placeholder="No description provided.."
          />
        </GridItem>
        <GridItem xs={10} sm={3} md={3}>
          <img
            className="custom-p__req-image"
            src={require("assets/img/moorti/Ganpati-murti_white-colour.jpg").default}
            alt="req img"
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>Size: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {store.product.size}
          {' '}
          <label>inches</label>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>Budget range: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {parseInt(store.product.budget[0])} to {parseInt(store.product.budget[1])} INR.
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>Expected completion time: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {parseInt(store.product.days[0])} to {parseInt(store.product.days[1])} days.
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default mobxify('CustomProductStore')(ProductDetails);
