import React from "react";
import { mobxify } from 'utils/hoc';

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";


import GridItem from "components/common/Grid/GridItem.js";
import GridContainer from "components/common/Grid/GridContainer.js";
import NavPills from "components/common/NavPills/NavPills.js";

function TrackEnquiry({ CustomProductStore: store }) {
  function nothingUi() {
    return (
      <div className="custom-p__no-show">
        <h2>Nothing to show</h2>
      </div>
    );
  }

  function enquireDetailsUi() {
    return nothingUi();
  }

  function statusDetailsUi() {
    return nothingUi();
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <NavPills
          color="info"
          horizontal={{
            tabsGrid: { xs: 12, sm: 3, md: 3 },
            contentGrid: { xs: 12, sm: 9, md: 9 }
          }}
          tabs={[
            {
              tabButton: "Product",
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

export default mobxify('CustomProductStore')(TrackEnquiry);
