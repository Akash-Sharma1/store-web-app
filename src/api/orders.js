import { gql } from '@apollo/client';

const GET_ORDERS = gql`
  query GetOrders($page: Long) {
    orders(page : $page){
      id
      product {
        id
        name
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
    addToCart(
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

export {
  GET_ORDERS,
  GET_ORDER,
  ADD_ORDER,
  ADD_TO_CART,
  REMOVE_ORDER,
  MOVE_TO_ORDER,
};