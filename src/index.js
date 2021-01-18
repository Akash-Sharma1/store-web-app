import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
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
import ProductPage from "views/ProductPage/Product";
import OrdersPage from "views/OrdersPage";
import OrderPage from "views/OrdersPage/OrderPage";
import CustomProductPage from "views/ProductPage/CustomProductPage";
import client from "utils/graphql"
import { ApolloProvider } from '@apollo/client';
import NotFound404 from "404";


var hist = createBrowserHistory();

// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider {...stores}>
      <HeaderFixed/>
      <Router history={hist}>
        <Switch>
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/components" component={Components} />
          <Route exact path="/shop/custom-product/:id" component={CustomProductPage} />
          <Route exact path="/shop/custom-products" component={CustomProductBuildPage} />
          <Route exact path="/shop/product/:id" component={ProductPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/orders/:type" component={OrdersPage} />
          <Route exact path="/order/:id" component={OrderPage} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/404" component={NotFound404} />
          <Redirect to="/404" />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
