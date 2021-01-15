import React from "react";
import { mobxify } from "utils/hoc";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import CustomTabs from "components/common/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import SectionCarousel from "views/Common/Ui/Carausal";


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
          <GridContainer justify="center">
            <GridItem xs={12} sm={8} md={6}>
              <SectionCarousel images={tab.images} />
            </GridItem>
            <GridItem xs={12} sm={4} md={6}>
              <p className="landing-page__image-description">
                {tab.description}
              </p>
            </GridItem>
          </GridContainer>
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
