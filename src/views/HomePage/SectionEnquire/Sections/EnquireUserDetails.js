import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

import CustomInput from "components/common/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function EnquireUserDetails({ EnquireStore: store }) {
  const classes = useStyles();

  return (
    <span>
      <h3>How we can contact you</h3>
      <h6><small>(at least one of them is required)</small></h6>
      <CustomInput
        labelText="Phone number..."
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "number",
          endAdornment: (
            <InputAdornment position="end">
              <People className={classes.inputIconsColor} />
            </InputAdornment>
          ),
          value: store.userDetails.phoneNumber,
          onChange: (e) => store.setUserDetails('phoneNumber', e.target.value),
        }}
      />
      <CustomInput
        labelText="Email..."
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          type: "email",
          endAdornment: (
            <InputAdornment position="end">
              <Email className={classes.inputIconsColor} />
            </InputAdornment>
          ),
          value: store.userDetails.email,
          onChange: (e) => store.setUserDetails('email', e.target.value),
        }}
      />
    </span>
  );
}

export default mobxify('EnquireStore')(EnquireUserDetails);
