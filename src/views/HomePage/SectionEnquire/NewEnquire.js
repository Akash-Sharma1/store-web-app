import React from "react";
import { mobxify } from 'utils/hoc';

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import Button from "components/common/CustomButtons/Button.js";
import NavPills from "components/common/NavPills/NavPills.js";

import EnquireDetails from './Sections/EnquireDetails';
import EnquireSliders from './Sections/EnquireSliders';
import EnquireUserDetails from './Sections/EnquireUserDetails';
import RequirementInput from './Sections/RequirementInput';

function NewEnquire({ EnquireStore: store }) {
  const tabsContent = [
    {
      tabButton: "Requirements",
      tabIcon: Dashboard,
      tabContent: (
        <RequirementInput />
      )
    },
    {
      tabButton: "Budget / Time",
      tabIcon: Schedule,
      tabContent: (
        <EnquireSliders />
      )
    },
    {
      tabButton: "Your details",
      tabIcon: List,
      tabContent: (
        <EnquireUserDetails />
      )
    },
    {
      tabButton: "Review / Submit request",
      tabIcon: Dashboard,
      tabContent: (
        <span>
          <h3>Review and submit request</h3>
          <EnquireDetails />
          <br/><br/>
          <Button
            size="lg"
            color={store.validateEnquireForm ? "success" : "default"}
            disabled={!store.validateEnquireForm}
          >
            Submit request
          </Button>
        </span>
      )
    },
  ];

  return (
    <NavPills
      color="info"
      horizontal={{
        tabsGrid: { xs: 3, sm: 3, md: 3 },
        contentGrid: { xs: 10, sm: 8, md: 8 }
      }}
      tabs={tabsContent}
    />
  );
}

export default mobxify('EnquireStore')(NewEnquire);
