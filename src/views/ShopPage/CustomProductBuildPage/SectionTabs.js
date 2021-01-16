import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';

import "assets/scss/custom-products/custom-products.scss";

import CustomTabs from "components/common/CustomTabs/CustomTabs.js";
import NewProduct from "./NewProduct/index";
import TrackCustomProducts from "./PastOrders";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function SectionTabs({ CustomProductStore: store }) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const switchToTrack = () => setActiveTab(1);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <div className="landing-page__heading">
              Building Custom Products
            </div>
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
              forcedValue={activeTab}
              setForcedValue={setActiveTab}
              plainTabs
              headerColor="warning"
              tabs={[
                {
                  tabName: "Enquire",
                  tabContent: (
                    <div className="custom-p__container">
                      <NewProduct switchTab={switchToTrack}/>
                    </div>
                  )
                },
                {
                  tabName: "Past Enquiries",
                  tabContent: (
                    <div className="custom-p__container">
                      <TrackCustomProducts />
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

export default mobxify('CustomProductStore')(SectionTabs);
