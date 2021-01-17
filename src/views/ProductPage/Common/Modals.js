import React, {useState} from "react";
import Modal from 'views/Common/Ui/Modal'
import { Redirect } from "react-router-dom";

export default function Modals({
  cartModalOpen, orderModalOpen,
  setCartModalOpen, setOrderModalOpen
}) {
  const [orderRedirectModalOpen, setOrderRedirectModalOpen] = useState(false);
  const [cartRedirectModalOpen, setCartRedirectModalOpen] = useState(false);
  const [redirectToOrder, setRedirectToOrder] = useState(false);
  const [redirectToCart, setRedirectToCart] = useState(false);

  const order = () => {
    setRedirectToOrder(true);
  }

  const addToCart = () => {
    setRedirectToCart(true);
  }

  const OrderModal = <Modal
    defaultText = {`
      Are you sure you want to order the product.
      Click on Order or Close to go back`}
    open={orderModalOpen}
    setOpen={setOrderModalOpen}
    buttonList={[
      {
        text: "Order",
        onClick:order,
        color: 'warning',
        async: true,
        triggerLoading: true,
      },
      {
        text: "Close",
        color: 'info',
        onClick:() => setOrderModalOpen(false),
      }
    ]}
  />

  const CartModal = <Modal
    defaultText = {`
      Are you sure you want to add the product in the cart.
      Click on Add or Close to go back`}
    open={cartModalOpen}
    setOpen={setCartModalOpen}
    buttonList={[
      {
        text: "Add",
        onClick:addToCart,
        color: 'warning',
        async: true
      },
      {
        text: "Close",
        color: 'info',
        onClick:() => setCartModalOpen(false),
      }
    ]}
  />

  const OrderRedirectModalOpen = <Modal
    defaultText = {`
      Thanks for ordering!!
      We are commited to provied the best experience to our customers.
    `}
    open={orderRedirectModalOpen}
    setOpen={setOrderRedirectModalOpen}
    buttonList={[
      {
        text: "Order Page",
        onClick:() => setRedirectToOrder(true),
        color: 'warning',
      },
      {
        text: "Close",
        color: 'info',
        onClick:() => setOrderRedirectModalOpen(false),
      }
    ]}
  />

  const CartRedirectModalOpen = <Modal
    defaultText = {`
      Product is added to cart!!
      We are commited to provied the best experience to our customers.
    `}
    open={cartRedirectModalOpen}
    setOpen={setCartRedirectModalOpen}
    buttonList={[
      {
        text: "Order Page",
        onClick:() => setRedirectToCart(true),
        color: 'warning',
      },
      {
        text: "Close",
        color: 'info',
        onClick:() => setCartRedirectModalOpen(false),
      }
    ]}
  />

  if(redirectToCart) {
    return <Redirect to="/orders/cart" />
  }

  if(redirectToOrder) {
    return <Redirect to="/orders" />
  }

  return (
    <>
      {OrderModal}
      {CartModal}
      {OrderRedirectModalOpen}
      {CartRedirectModalOpen}
    </>
  );
}