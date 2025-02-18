import React from "react";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

import GridContainer from "components/common/Grid/GridContainer.js";
import GridItem from "components/common/Grid/GridItem.js";
import NavPills from "components/common/NavPills/NavPills.js";


import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { mobxify } from "utils/hoc";

const useStyles = makeStyles(styles);

function SectionProductDisplay({ HomePageStore : store }) {
  const classes = useStyles();
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <div>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div
                style={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  paddingTop:"5rem"
                }}
              >
                <div className={classes.name}>
                  <h3 className={classes.title}>Manufacturing Process</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate
              feel with a solid groove structure.{" "}
            </p>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Crafting",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio2}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={studio5}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio4}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Modeling",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work2}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work3}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work5}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Painting",
                    tabIcon: Favorite,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work4}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio3}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <img
                            alt="..."
                            src={work2}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={work1}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={studio1}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default mobxify('HomePageStore')(SectionProductDisplay)
