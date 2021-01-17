import {
  action, makeObservable, observable, flow, computed
} from 'mobx';
import { gql } from '@apollo/client';

import client from 'utils/graphql'

class orderStore {

  GET_ORDERS = gql`
    query GetProduct($page: Long) {
      orders {
        id
        status
        message
        product {
          id
          name
          description
          price
        }
      }
    }
  `;

  GET_ORDER = gql`
    query GetProduct($id: Long!) {
      order (id : $id) {
        id
        status
        message
        product {
          id
          name
          description
          price
        }
      }
    }
  `;

  isLoading = false;

  loadingError = null;
  
  orders = [];

  order = {};

  setIsLoading(value) {
    this.isLoading = value;
  }

  setLoadingError(value) {
    this.loadingError = value;
  }

  constructor() {
    makeObservable(this, {
    });
  }
}

const OrderStore = new orderStore();

export default OrderStore;
