import React from "react";

import { mobxify } from 'utils/hoc';
import GridItem from "components/common/Grid/GridItem.js";
import GridContainer from "components/common/Grid/GridContainer.js";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function EnquireDetails({ EnquireStore: store }) {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <label>Requirements:</label>
        </GridItem>
        <GridItem xs={10} sm={7} md={7}>
          <TextareaAutosize
            defaultValue = {store.requirements.description}
            disabled
            className="enquire__textarea enquire__truncate"
            placeholder="No description provided.."
          />
        </GridItem>
        <GridItem xs={10} sm={3} md={3}>
          <img
            className="enquire__req-image"
            src={require("assets/img/moorti/Ganpati-murti_white-colour.jpg").default}
            alt="req img"
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>Size: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {store.requirements.size}
          {' '}
          <label>inches</label>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>Budget range: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {parseInt(store.sliders.budget[0])} to {parseInt(store.sliders.budget[1])} INR.
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>Expected completion time: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {parseInt(store.sliders.time[0])} to {parseInt(store.sliders.time[1])} days.
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>Provided phone number: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {store.userDetails.phoneNumber || "---------none----------"}
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <label>email: </label>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          {store.userDetails.email || "---------none----------"}
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default mobxify('EnquireStore')(EnquireDetails);
