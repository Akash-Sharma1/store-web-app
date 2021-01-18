import React, {useState} from "react";
import Modal from 'views/Common/Ui/Modal'
import { Redirect } from "react-router-dom";
import { mobxify } from 'utils/hoc';
import Warning from "@material-ui/icons/Warning";

function Modals({
  OrderStore: store, productId, AppStore,
  cartModalOpen, orderModalOpen,
  setCartModalOpen, setOrderModalOpen
}) {
  const [orderRedirectModalOpen, setOrderRedirectModalOpen] = useState(false);
  const [cartRedirectModalOpen, setCartRedirectModalOpen] = useState(false);
  const [redirectToOrder, setRedirectToOrder] = useState(false);
  const [redirectToCart, setRedirectToCart] = useState(false);

  if(!productId) {
    return <>
    Loading
    </>
  }

  const order = async() => {
    store.addOrder(productId)
    .then(res => {
      setOrderRedirectModalOpen(true);
    })
    .catch(err => {
      AppStore.setNotification({
        color: "danger",
        title: "Submission Failed",
        body: "Something failed try again!",
        icon: Warning,
      });
    })
  }

  const addToCart = async() => {
    store.addToCart(productId)
    .then(res => {
      setCartRedirectModalOpen(true);
    })
    .catch(err => {
      AppStore.setNotification({
        color: "danger",
        title: "Submission Failed",
        body: err.toString(),
        icon: Warning,
      });
    })
  }

  const OrderModal = <Modal
    defaultText = {
      <span>
        Are you sure you want to order the product.<br/>
        Click on <b>Order</b> or <b>Close</b> to cancel.
      </span>
    }
    open={orderModalOpen}
    setOpen={setOrderModalOpen}
    buttonList={[
      {
        text: "Close",
        color: 'info',
        onClick:() => setOrderModalOpen(false),
      },
      {
        text: "Order",
        onClick:order,
        color: 'warning',
        async: true,
        triggerLoading: true,
      }
    ]}
  />

  const CartModal = <Modal
    defaultText = {
      <span>
        Are you sure you want to add the product in the cart.<br/>
        Click on <b>Add</b> or <b>Close</b> to cancel.
      </span>
    }
    open={cartModalOpen}
    setOpen={setCartModalOpen}
    buttonList={[
      {
        text: "Close",
        color: 'info',
        onClick:() => setCartModalOpen(false),
      },
      {
        text: "Add To Cart",
        onClick:addToCart,
        color: 'warning',
        async: true
      }
    ]}
  />

  const OrderRedirectModalOpen = <Modal
    title='Procedd to order page?'
    defaultText = {
      <span>
        Thanks for ordering!!<br />
        We are commited to provied the best experience to our customers.<br />
        Click on <b>Order Page</b> to go to orders page.
      </span>
    }
    open={orderRedirectModalOpen}
    setOpen={setOrderRedirectModalOpen}
    buttonList={[
      {
        text: "Close",
        color: 'info',
        onClick:() => setOrderRedirectModalOpen(false),
      },
      {
        text: "Order Page",
        onClick:() => setRedirectToOrder(true),
        color: 'warning',
      }
    ]}
  />

  const CartRedirectModalOpen = <Modal
    title='Procedd to order page?'
    defaultText = {
      <span>
        Product is added to cart!!<br />
        We are commited to provied the best experience to our customers.<br />
        Click on <b>Order Page</b> to go to orders page.
      </span>
    }
    open={cartRedirectModalOpen}
    setOpen={setCartRedirectModalOpen}
    buttonList={[
      {
        text: "Close",
        color: 'info',
        onClick:() => setCartRedirectModalOpen(false),
      },
      {
        text: "Order Page",
        onClick:() => setRedirectToCart(true),
        color: 'warning',
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

export default mobxify('OrderStore', 'AppStore')(Modals);
