import React from "react";
import { mobxify } from 'utils/hoc';

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

import EnquireDetails from './Sections/EnquireDetails';

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
    <>
      <div className="enquire__req-display">
        <CustomInput
          labelText="Enter enquiry number"
          inputProps={{
            type: "text",
            value: store.enquiryNumber,
            onChange: (e) => store.setEnquiryNumber(e.target.value),
          }}
        />
        <Button
          className="enquire__find-btn"
          size="sm"
          color={store.validateEnquireForm ? "success" : "default"}
        >
          Find
        </Button>
      </div>

      <NavPills
        color="info"
        horizontal={{
          tabsGrid: { xs: 3, sm: 3, md: 3 },
          contentGrid: { xs: 10, sm: 8, md: 8 }
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
    </>
  );
}

export default mobxify('EnquireStore')(TrackEnquiry);
