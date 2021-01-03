import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { mobxify } from 'utils/hoc';

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

import Slider from "nouislider";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import CustomInput from "components/common/CustomInput/CustomInput.js";
import NavPills from "components/common/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);

function SectionMakeByPhoto({ HomePageStore: store }) {

  useEffect(() => {
    const timer = setInterval(() => {
      const sliderBudget = document.getElementById("budgetSlider");
      const sliderTime = document.getElementById("timeSlider");

      if(!sliderBudget && !sliderTime) {
        return;
      }
      if (
        !sliderBudget.classList.contains("noUi-target")
        && !sliderTime.classList.contains("noUi-target")
      ) {
        Slider.create(sliderBudget, {
          start: store.budgetSlider,
          connect: [false, true, false],
          step: 1000,
          range: { min: 100, max: 100000 }
        });
        
        Slider.create(sliderTime, {
          start: store.timeSlider,
          connect: [false, true, false],
          step: 1,
          range: { min: 1, max: 60 }
        });

        sliderBudget.noUiSlider.on('update', function (values) {
          store.setBudgetSlider(values);
        });
      
        sliderTime.noUiSlider.on('update', function (values) {
          store.setTimeSlider(values);
        });
      }
      console.log(timer);
      clearInterval(timer);
    }, 100);

    if(document.getElementById("budgetSlider") && document.getElementById("timeSlider")) {
      clearInterval(timer);
    }
  },[store]);

  const classes = useStyles();

  const tabsContent = [
    {
      tabButton: "Requirements",
      tabIcon: Dashboard,
      tabContent: (
        <span>
          <h3>Gathering requirements</h3>
          <br/>
          <div id="requirementUploadedPhoto" style={{padding:"0 0 1rem 0"}}>
            <label>Upload the photograph that you wish to order / know about.</label>
            <br/>
            <input
              type="file"
            />
          </div>
          <p>OR</p>
          <div style={{padding:"0 0 1rem 0"}}>
            <label>Description</label>
            <br/>
            <TextareaAutosize
              defaultValue = {store.requirementsDescription}
              onChange = {e => {
                store.setRequirementDescription(e.target.value)
                console.log(store.requirementsDescription);
              }}
              className="landing-page__textarea"
              placeholder="Details of the required product / anything you want to highlight"
            />
          </div>
        </span>
      )
    },
    {
      tabButton: "Budget / Time",
      tabIcon: Schedule,
      tabContent: (
        <span>
          <h3>Budget / Time Constraints</h3>
          <br/>
          <label>Expected Price</label>
          <div id="budgetSlider" className="slider-primary landing-page__slider" />
          <label>Expected Completion Time</label>
          <div id="timeSlider" className="slider-info landing-page__slider" />
          <br/>
          <p>
            <li>Expected Price is from
              {' '}
              <b>{parseInt(store.budgetSlider[0])}</b> to <b>{parseInt(store.budgetSlider[1])}</b> INR.
            </li>
            <li>Expected waiting time is in between
              {' '}
              <b>{parseInt(store.timeSlider[0])}</b> to <b>{parseInt(store.timeSlider[1])}</b> days.
            </li>
          </p>
        </span>
      )
    },
    {
      tabButton: "Your details",
      tabIcon: List,
      tabContent: (
        <span>
        </span>
      )
    },
    {
      tabButton: "Track details",
      tabIcon: Dashboard,
      tabContent: (
        <span>
        </span>
      )
    },
  ];

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Can't find what your'e looking for - <b>Lets ideate together</b></h3>
          </div>
          <div>
            <h3>
              <small>
                Transform your imagination into reality
              </small>
            </h3>
          </div>
          <div>
            <NavPills
              color="rose"
              horizontal={{
                tabsGrid: { xs: 3, sm: 3, md: 3 },
                contentGrid: { xs: 10, sm: 8, md: 8 }
              }}
              tabs={tabsContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default mobxify('HomePageStore')(SectionMakeByPhoto);
