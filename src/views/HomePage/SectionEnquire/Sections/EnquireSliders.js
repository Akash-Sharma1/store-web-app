import React, { useEffect } from "react";

import { mobxify } from 'utils/hoc';
import Slider from "nouislider";

function EnquireSliders({ EnquireStore: store }) {
  useEffect(() => {
    const sliderBudget = document.getElementById("budgetSlider");
    const sliderTime = document.getElementById("timeSlider");

    if (
      !sliderBudget.classList.contains("noUi-target")
      && !sliderTime.classList.contains("noUi-target")
    ) {
      Slider.create(sliderBudget, {
        start: store.sliders.budget,
        connect: [false, true, false],
        step: 1000,
        range: { min: 0, max: 100000 }
      });
      
      Slider.create(sliderTime, {
        start: store.sliders.time,
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 60 }
      });

      sliderBudget.noUiSlider.on('update', function (values) {
        store.setSliders('budget', values);
      });
    
      sliderTime.noUiSlider.on('update', function (values) {
        store.setSliders('time', values);
      });
    }
  },[store]);

  return (
    <span>
      <h3>Budget / Time Constraints</h3>
      <br/>
      <label>Expected Price</label>
      <div id="budgetSlider" className="slider-primary enquire__slider" />
      <label>Expected Completion Time</label>
      <div id="timeSlider" className="slider-info enquire__slider" />
      <br/>
      <p>
        <li>Expected Price is from
          {' '}
          <b>{parseInt(store.sliders.budget[0])}</b> to <b>{parseInt(store.sliders.budget[1])}</b> INR.
        </li>
        <li>Expected waiting time is in between
          {' '}
          <b>{parseInt(store.sliders.time[0])}</b> to <b>{parseInt(store.sliders.time[1])}</b> days.
        </li>
      </p>
    </span>
  );
}

export default mobxify('EnquireStore')(EnquireSliders);
