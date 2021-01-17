import { gql } from '@apollo/client';

const ADD_PRODUCT = gql`
  mutation AddCustomProduct(
    $userId: Long!, $max_days: Int!, $min_days: Int!,
    $min_price: Float!, $max_price: Float!, $description: String!, $size: Float!
  ) {
    addCustomProduct(
      userId: $userId
      max_price: $max_price
      min_price: $min_price
      min_days: $min_days
      max_days: $max_days
      description: $description
      size: $size
    ) {
      id
    }
  }
`;

const GET_PRODUCTS = gql`
  query GetCustomProducts($userId: Long!, $page: Long) {
    customProducts(
      userId: $userId,
      page: $page,
    ) {
      id
      description
      size
      max_price
      min_price
      max_days
      min_days
      req_status
      req_text
    }
  }
`;

const GET_PRODUCT = gql`
  query GetCustomProduct($id: Long!) {
    customProduct(
      id: $id
    ) {
      id
      name
      description
      size
      max_price
      min_price
      max_days
      min_days
      req_status
      req_text
    }
  }
`;

export {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT
}
