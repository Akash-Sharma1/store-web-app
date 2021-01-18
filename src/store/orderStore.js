import {
  action, makeObservable, observable, flow, computed
} from 'mobx';

import {
  GET_ORDERS,
  GET_CART,
  GET_ORDER,
  ADD_ORDER,
  ADD_TO_CART,
  REMOVE_ORDER,
  MOVE_TO_ORDER,
  ORDERS_COUNT,
  CART_COUNT
} from "api/orders"
import client from 'utils/graphql'

class orderStore {

  orders = [];

  order = {};

  currPage = 1;

  maxxPage = 1;

  isLoading = false;

  loadingError = null;

  setCurrPage(value) {
    this.currPage = value;
  }

  setIsLoading(value) {
    this.isLoading = value;
  }
  
  setLoadingError(value) {
    this.loadingError = value;
  }

  setOrder(value) {
    this.order = value;
  }

  setOrders(value) {
    this.orders = value;
  }

  cartCount = 0;

  ordersCount = 0;

  getOrderCount = flow(function * (fetchPolicy='cache-first') {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: ORDERS_COUNT,
      fetchPolicy
    });
    this.maxxPage = Math.max(1, Math.ceil(res.data.ordersCount/6));
    this.ordersCount = res.data.ordersCount;
    this.currPage = Math.min(this.maxxPage, this.currPage);
    this.isLoading = false;
    this.loadingError = null;
    return res;
  })

  getCartCount = flow(function * (fetchPolicy='cache-first') {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: CART_COUNT,
      fetchPolicy
    });
    console.log(Math.ceil(res.data.cartCount/6));
    this.maxxPage = Math.max(1, Math.ceil(res.data.cartCount/6));
    this.cartCount = res.data.cartCount;
    this.currPage = Math.min(this.maxxPage, this.currPage);
    this.isLoading = false;
    this.loadingError = null;
    return res;
  })
  
  getOrder = flow(function * (productId, fetchPolicy='cache-first') {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: GET_ORDER,
      variables:{ productId },
      fetchPolicy
    });
    this.setOrder(res.data.order);
    this.isLoading = false;
    this.loadingError = null;
    return res;
  })

  getCart = flow(function * (fetchPolicy='cache-first') {
    yield this.getCartCount(fetchPolicy);
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: GET_CART,
      variables: {
        variables:{ page: this.currpage },
      },
      fetchPolicy
    });
    this.setOrders(res.data.carts);
    this.isLoading = false;
    this.loadingError = null;
    return res;
  })

  getOrders = flow(function * (fetchPolicy='cache-first') {
    yield this.getOrderCount(fetchPolicy);
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: GET_ORDERS,
      variables:{ page: this.currpage },
      fetchPolicy
    });
    this.setOrders(res.data.orders);
    this.isLoading = false;
    this.loadingError = null;
    return res;
  })

  addOrder = flow(function * (productId) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.mutate({
      mutation: ADD_ORDER,
      variables: { productId }
    })
    this.setOrders(res.data.orders);
    this.isLoading = false;
    this.loadingError = null;
    return res;
  })

  removeOrder = flow(function * (id) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.mutate({
      mutation: REMOVE_ORDER,
      variables: { id }
    })
    this.isLoading = false;
    yield this.getOrders('network-only');
    yield this.getCart('network-only');
    this.loadingError = null;
    return res;
  })

  moveToOrder = flow(function * (id) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.mutate({
      mutation: MOVE_TO_ORDER,
      variables: { id }
    })
    this.isLoading = false;
    yield this.getOrders('network-only');
    yield this.getCart('network-only');
    this.loadingError = null;
    return res;
  })

  addToCart = flow(function * (productId) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.mutate({
      mutation: ADD_TO_CART,
      variables: { productId }
    })
    this.isLoading = false;
    this.loadingError = null;
    return res;
  })

  constructor() {
    makeObservable(this, {
      maxxPage: observable,
      currPage: observable,
      cartCount: observable,
      ordersCount: observable,
      order: observable,
      orders: observable,
      isLoading: observable,
      loadingError: observable,
      setOrder: action.bound,
      setOrders: action.bound,
      setIsLoading: action.bound,
      setLoadingError: action.bound,
      setCurrPage: action.bound,
    });
  }
}

const OrderStore = new orderStore();

export default OrderStore;

