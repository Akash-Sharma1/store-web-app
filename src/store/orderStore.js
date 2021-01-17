import {
  action, makeObservable, observable, flow, computed
} from 'mobx';

import {
  GET_ORDERS,
  GET_ORDER,
  ADD_ORDER,
  ADD_TO_CART,
  REMOVE_ORDER,
  MOVE_TO_ORDER
} from "api/orders"
import client from 'utils/graphql'

class orderStore {

  orders = [];

  order = {};

  isLoading = false;

  setIsLoading = false;

  setOrder(value) {
    this.order = value;
  }

  setOrders(value) {
    this.orders = value;
  }

  getOrder = flow(function * (productId) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: GET_ORDER,
      variables:{ productId },
    });
    this.isLoading = false;
    return res;
  })

  getOrders = flow(function * (page = null) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.query({
      query: GET_ORDERS,
      variables:{ page },
    });
    this.isLoading = false;
    return res;
  })

  addOrder = flow(function * (productId) {
    this.isLoading = true;
    this.loadingError = null;
    var res = yield client.mutate({
      mutation: ADD_ORDER,
      variables: { productId }
    })
    this.isLoading = false;
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
    return res;
  })

  constructor() {
    makeObservable(this, {
      order: observable,
      orders: observable,
      setOrder: action.bound,
      setOrders: action.bound
    });
  }
}

const OrderStore = new orderStore();

export default OrderStore;

