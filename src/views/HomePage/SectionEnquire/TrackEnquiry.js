import React from "react";
import { mobxify } from 'utils/hoc';

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

import EnquireDetails from './Sections/EnquireDetails';

import GridItem from "components/common/Grid/GridItem.js";
import GridContainer from "components/common/Grid/GridContainer.js";
import CustomInput from "components/common/CustomInput/CustomInput.js";
import Button from "components/common/CustomButtons/Button.js";
import StatusDetails from "./Sections/StatusDetails";
import NavPills from "components/common/NavPills/NavPills.js";

function TrackEnquiry({ EnquireStore: store }) {
  function nothingUi() {
    return (
      <div className="enquire__no-show">
        <h2>Nothing to show</h2>
      </div>
    );
  }

  function enquireDetailsUi() {
    if(store.enquiryExists) {
      return (
        <EnquireDetails />
      );
    } else {
      return nothingUi();
    }
  }

  function statusDetailsUi() {
    if(store.enquiryExists) {
      return (
        <StatusDetails />
      );
    } else {
      return nothingUi();
    }
  }
  return (
    <GridContainer>
      <GridItem xs={8} sm={8} md={8}>
        <CustomInput
          labelText="Enquiry number"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            value: store.enquiryNumber,
            onChange: (e) => store.setEnquiryNumber(e.target.value),
          }}
        />
      </GridItem>
      <GridItem xs={4} sm={4} md={4}>
        <div className="enquire__track-find-btn">
          <Button
            size="sm"
            color={store.validateEnquireForm ? "success" : "default"}
          >
            Find
          </Button>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <NavPills
          color="info"
          horizontal={{
            tabsGrid: { xs: 12, sm: 3, md: 3 },
            contentGrid: { xs: 12, sm: 9, md: 9 }
          }}
          tabs={[
            {
              tabButton: "Requirements",
              tabIcon: Dashboard,
              tabContent: enquireDetailsUi()
            },
            {
              tabButton: "Status",
              tabIcon: Schedule,
              tabContent: statusDetailsUi()
            }
          ]}
        />
      </GridItem>
    </GridContainer>
  );
}

export default mobxify('EnquireStore')(TrackEnquiry);
