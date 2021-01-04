import React from "react";
import { mobxify } from 'utils/hoc';

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CustomInput from "components/common/CustomInput/CustomInput.js";

function RequirementInput({ EnquireStore: store }) {
  return (
    <span>
      <h3>Gathering requirements</h3>
      <br/>
      <div id="requirementUploadedPhoto" style={{padding:"0 0 1rem 0"}}>
        <label>Upload the photograph that you wish to order / know about.</label>
        <br/>
        <input
          type="file"
        />
      </div>
      <p>OR</p>
      <div style={{padding:"0 0 1rem 0"}}>
        <label>Description</label>
        <br/>
        <TextareaAutosize
          defaultValue = {store.requirements.description}
          onChange = {e => store.setRequirements('description', e.target.value)}
          className="enquire__textarea"
          placeholder="Details of the required product / anything you want to highlight"
        />
        <br/>
        <br/>
        <CustomInput
          labelText="Size"
          inputProps={{
            type: "number",
            value: store.requirements.size,
            onChange: (e) => store.setRequirements('size', e.target.value),
            endAdornment: (
              <label>
                inches
              </label>
            ),
          }}
        />
      </div>
    </span>
  );
}

export default mobxify('EnquireStore')(RequirementInput);
