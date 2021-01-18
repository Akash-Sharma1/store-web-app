import { gql } from '@apollo/client';

const GET_ORDERS = gql`
  query GetOrders($page: Long) {
    orders(page : $page){
      id
      product {
        id
        name
        price
      }
      amount
      status
    }
  }
`;

const GET_CART = gql`
  query GetCarts($page: Long) {
    carts(page : $page){
      id
      product {
        id
        name
        price
      }
      amount
      status
    }
  }
`;

const GET_ORDER = gql`
  query GetOrder($id: Long!) {
    order (id : $id) {
      id
      product {
        id
        name
        description
        price
      }
      amount
      status
      statusDescription
    }
  }
`;

const ADD_TO_CART = gql`
  mutation AddOrder($productId: Long!) {
    addOrder(
      productId: $productId,
    ) {
      id
    }
  }
`;

const ADD_ORDER = gql`
  mutation AddToCart($productId: Long!) {
    addOrder(
      productId: $productId,
    ) {
      id
    }
  }
`;

const REMOVE_ORDER = gql`
  mutation RemoveOrder($id: Long!) {
    addToCart(
      id: $id,
    ) {
      id
    }
  }
`;

const MOVE_TO_ORDER = gql`
  mutation MoveToOrdersfromCart($id: Long!) {
    moveToOrdersfromCart(
      id: $id,
    ) {
      id
    }
  }
`;

const ORDERS_COUNT = gql`
  query OrderCount {
    ordersCount
  }
`;

const CART_COUNT = gql`
  query CartCount {
    cartCount
  }
`;

export {
  ORDERS_COUNT,
  CART_COUNT,
  GET_CART,
  GET_ORDERS,
  GET_ORDER,
  ADD_ORDER,
  ADD_TO_CART,
  REMOVE_ORDER,
  MOVE_TO_ORDER,
};