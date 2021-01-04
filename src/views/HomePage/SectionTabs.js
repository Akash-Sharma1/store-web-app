import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CustomTabs from "components/common/CustomTabs/CustomTabs.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import SectionCarousel from "./SectionCarousel";
import { mobxify } from "utils/hoc";

const useStyles = makeStyles(styles);

function SectionTabs({ HomePageStore : store }) {
  const classes = useStyles();

  const tagDescription = {
    All: "Description of all tag",
    Faces: "Description of faces tag",
    Marble: "Description of marble tag",
    Painting: "Description of painting tag",
  };

  const tabsDetails = store.ImageTags.map(tag => {
    return {
      images: store.filterImagesByTag(tag),
      description: tagDescription[tag],
      title: tag,
    };
  });

  const tabsContent = tabsDetails.map(tab => {
    return (
      {
        tabName: tab.title,
        tabContent: (
          <div className="landing-page__tabs">
            <div>
              <SectionCarousel content={tab.images} />
            </div>
            <p>
              {tab.description}
            </p>
            <br/><br/>
          </div>
        )
      }
    );
  });

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <div className={classes.title}>
            <div className="landing-page__heading"> 
              Featured Products
            </div>
          </div>
          <div>
            <CustomTabs
              headerColor="primary"
              tabs={tabsContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default mobxify('HomePageStore')(SectionTabs)
