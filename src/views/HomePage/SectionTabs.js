import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import CustomTabs from "components/common/CustomTabs/CustomTabs.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import SectionCarousel from "./SectionCarouselModifed";

const tabsDetails = [
  {
    title: "All",
    images: [
      {
        image: require("assets/img/moorti/pexels-artem-beliaikin-1485630-flippped.jpg"),
        description: "image 1",
      },
      {
        image: require("assets/img/moorti/pexels-artem-beliaikin-1485630.jpg"),
        description: "image 1",
      }
    ],
    description: `
      I think that’s a responsibility that I have, to push
      possibilities, to show people, this is the level that
      things could be at. So when you get something that has
      the name Kanye West on it, it’s supposed to be pushing
      the furthest possibilities. I will be the leader of a
      company that ends up being worth billions of dollars,
      because I got the answers. I understand culture. I am
      the nucleus.
    `
  },
  {
    title: "Faces",
    images: [
      {
        image: require("assets/img/moorti/pexels-niko-cezar-3731615.jpg"),
        description: "image 1",
      },
      {
        image: require("assets/img/moorti/Ganpati-murti_white-colour.jpg"),
        description: "image 1",
      }
    ],
    description: `
      I think that’s a responsibility that I have, to push
      possibilities, to show people, this is the level that
      things could be at. So when you get something that has
      the name Kanye West on it, it’s supposed to be pushing
      the furthest possibilities. I will be the leader of a
      company that ends up being worth billions of dollars,
      because I got the answers. I understand culture. I am
      the nucleus.
    `
  },
  {
    title: "Marble",
    images: [
      {
        image: require("assets/img/moorti/beautiful-radha-krishna-images.jpg"),
        description: "image 1",
      },
      {
        image: require("assets/img/moorti/pexels-sonika-agarwal-5621872.jpg"),
        description: "image 1",
      }
    ],
    description: `
      I think that’s a responsibility that I have, to push
      possibilities, to show people, this is the level that
      things could be at. So when you get something that has
      the name Kanye West on it, it’s supposed to be pushing
      the furthest possibilities. I will be the leader of a
      company that ends up being worth billions of dollars,
      because I got the answers. I understand culture. I am
      the nucleus.
    `
  },
  {
    title: "Painting",
    images: [
      {
        image: require("assets/img/moorti/yogesh-pedamkar-lmeBk-i3_PI-unsplash.jpg"),
        description: "image 1",
      },
      {
        image: require("assets/img/moorti/yogesh-pedamkar-x_oOzJMRUd4-unsplash.jpg"),
        description: "image 1",
      }
    ],
    description: `
      I think that’s a responsibility that I have, to push
      possibilities, to show people, this is the level that
      things could be at. So when you get something that has
      the name Kanye West on it, it’s supposed to be pushing
      the furthest possibilities. I will be the leader of a
      company that ends up being worth billions of dollars,
      because I got the answers. I understand culture. I am
      the nucleus.
    `
  },
]
const useStyles = makeStyles(styles);



export default function SectionTabs() {
  const classes = useStyles();
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
          <h3 className="landing-page__heading">Featured Products</h3>
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
