import React, {useState} from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';

import "assets/scss/custom-products/custom-products.scss";

import CustomTabs from "components/common/CustomTabs/CustomTabsControllable.js";
import NewProduct from "./NewProduct/index";
import TrackEnquiry from "./TrackEnquiry";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function SectionTabs({ CustomProductStore: store }) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);

  const switchTab = () => {
    setActiveTab((activeTab+1)%2);
  }

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
              value = {activeTab}
              setValue = {setActiveTab}
              plainTabs
              headerColor="warning"
              tabs={[
                {
                  tabName: "Enquire",
                  tabContent: (
                    <div className="custom-p__container">
                      <NewProduct switchTab={switchTab}/>
                    </div>
                  )
                },
                {
                  tabName: "Track",
                  tabContent: (
                    <div className="custom-p__container">
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

export default mobxify('CustomProductStore')(SectionTabs);
