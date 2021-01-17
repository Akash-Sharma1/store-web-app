import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProduct($page: Long) {
    products(page : $page){
      id
      name
      price
      availablity
    }
  }
`;

const GET_PRODUCT = gql`
  query GetProduct($id: Long!) {
    product (id : $id) {
      id
      name
      price
      description
      availablity
    }
  }
`;


export {
  GET_PRODUCTS,
  GET_PRODUCT
};