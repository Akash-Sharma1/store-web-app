import React from "react";
import { mobxify } from 'utils/hoc';

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

import Button from "components/common/CustomButtons/Button.js";
import NavPills from "components/common/NavPills/NavPills.js";

import ProductDetails from '../Sections/ProductDetails';
import BudgetAndDaysSliders from '../Sections/BudgetAndDaysSliders';
import ProductInput from '../Sections/ProductInput';
import ConfirmModal from "./confirmModal";

import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";

import Notify from "views/Common/Ui/Notify"

function NewProduct({ CustomProductStore: store, switchTab, AppStore }) {
  const [classicModal, setClassicModal] = React.useState(false);

  const tabsContent = [
    {
      tabButton: "Requirements",
      tabIcon: Dashboard,
      tabContent: (
        <ProductInput />
      )
    },
    {
      tabButton: "Budget / Time",
      tabIcon: Schedule,
      tabContent: (
        <BudgetAndDaysSliders />
      )
    },
    {
      tabButton: "Review / Submit request",
      tabIcon: Dashboard,
      tabContent: (
        <span>
          <h3>Review and submit request</h3>
          <ProductDetails />
          <br/><br/>
          <Button
            color="warning"
            onClick={() => setClassicModal(true)}
          >
            Submit request
          </Button>
        </span>
      )
    },
  ];

  const addProduct = () => {
    AppStore.setNotificationItem("open", false);
    store.addProduct().then(res => {
      AppStore.setNotification({
        title: "Submitted",
        body: "Product, successfully created",
        icon: Check,
        onCloseAction: switchTab,
      });
      store.clearProduct();
    }).catch(err => {
      AppStore.setNotification({
        color: "danger",
        title: "Submission Failed",
        body: "Something failed try again!",
        icon: Warning,
      });
    })
  }

  return (
    <>
      <ConfirmModal 
        classicModal = {classicModal}
        setClassicModal = {setClassicModal}
        submitAction={addProduct}
      />
      <NavPills
        color="info"
        horizontal={{
          tabsGrid: { xs: 12, sm: 3, md: 3 },
          contentGrid: { xs: 12, sm: 9, md: 9 }
        }}
        tabs={tabsContent}
      />
      <Notify />
    </>
  );
}

export default mobxify('CustomProductStore', 'AppStore')(NewProduct);
