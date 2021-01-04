import React from "react";

import { mobxify } from 'utils/hoc';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

function EnquireDetails({ EnquireStore: store }) {
  return (
    <div>
      <label>Requirements:</label>
      <br/>
      <div className="enquire__req-display">
        <TextareaAutosize
          defaultValue = {store.requirements.description}
          disabled
          className="enquire__textarea enquire__truncate"
          placeholder="No description provided.."
        />
        <img
          className="enquire__req-image"
          src={require("assets/img/moorti/Ganpati-murti_white-colour.jpg").default}
          alt="req img"
        />
      </div>
      <br/>
      <label>Size: </label>
      {store.requirements.size}
      {' '}
      <label>inches</label>
      <br/>

      <label>Budget range: </label>
      {parseInt(store.sliders.budget[0])} to {parseInt(store.sliders.budget[1])} INR.
      <br/>
      <label>Expected completion time: </label>
      {parseInt(store.sliders.time[0])} to {parseInt(store.sliders.time[1])} days.
      <br/>
      <label>Provided phone number: </label>
      {store.userDetails.phoneNumber || "---------none----------"}
      <br/>
      <label>email: </label>
      {store.userDetails.email || "---------none----------"}
    </div>
  );
}

export default mobxify('EnquireStore')(EnquireDetails);
