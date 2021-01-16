import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "mobx-react";

import "assets/scss/material-kit-react.scss?v=1.9.0";

//store
import stores from "store";

// pages for this product
import HeaderFixed from "views/Common/Ui/Header/HeaderFixed.js";
import Footer from "components/common/Footer/Footer.js";
import Components from "views/Components/Components.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/HomePage";
import ShopPage from "views/ShopPage";
import CustomProductBuildPage from "views/ShopPage/CustomProductBuildPage";
import ProductPage from "views/ProductPage";
import CustomProductPage from "views/ProductPage/CustomProductPage";
import client from "utils/graphql"
import { ApolloProvider } from '@apollo/client';


var hist = createBrowserHistory();

// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider {...stores}>
      <HeaderFixed/>
      <Router history={hist}>
        <Switch>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/components" component={Components} />
          <Route path="/shop/custom-product/:id" component={CustomProductPage} />
          <Route path="/shop/custom-product" component={CustomProductBuildPage} />
          <Route path="/shop/product/:id" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
