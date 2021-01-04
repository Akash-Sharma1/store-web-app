import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';

import "assets/scss/enquire/enquire.scss";

import CustomTabs from "components/common/CustomTabs/CustomTabs.js";
import NewEnquire from "./NewEnquire";
import TrackEnquiry from "./TrackEnquiry";


import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function SectionEnquire({ EnquireStore: store }) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Custom product dashboard</h3>
          </div>
          <div>
            <h4>
              <small>
                Can't find what your'e looking for - We can build it for you
              </small>
            </h4>
          </div>
          <div>
            <CustomTabs
              plainTabs
              headerColor="warning"
              tabs={[
                {
                  tabName: "Enquire",
                  tabContent: (
                    <div className="enquire__container">
                      <NewEnquire />
                    </div>
                  )
                },
                {
                  tabName: "Track",
                  tabContent: (
                    <div className="enquire__container">
                      <TrackEnquiry />
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default mobxify('EnquireStore')(SectionEnquire);
