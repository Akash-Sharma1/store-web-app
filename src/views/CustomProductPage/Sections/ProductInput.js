import React from "react";
import { mobxify } from 'utils/hoc';

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CustomInput from "components/common/CustomInput/CustomInput.js";

function ProductInput({ CustomProductStore: store }) {
  return (
    <span>
      <h3>Gathering requirements</h3>
      <br/>
      <div style={{padding:"0 0 1rem 0"}}>
        <label>Upload the photograph that you wish to order / know about.</label>
        <br/>
        <input
          type="file"
        />
      </div>
      <div style={{padding:"0 0 1rem 0"}}>
        <br/>
        <TextareaAutosize
          defaultValue = {store.product.description}
          onChange = {e => store.setProductItem('description', e.target.value)}
          className="custom-p__textarea"
          placeholder="Details of the required product / anything you want to highlight"
        />
        <br/>
        <CustomInput
          labelText="Size"
          inputProps={{
            type: "number",
            value: store.product.size,
            onChange: (e) => store.setProductItem('size', e.target.value),
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

export default mobxify('CustomProductStore')(ProductInput);
