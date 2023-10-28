import DeliveryAddressCard from "./../DeliveryAddress/DeliveryAddressCard";
import OrderSection from "./../../Sections/OrderSection";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { getOrderById } from "../../../../store/orderReducer";

const OrderSummary = () => {
  const { order, isLoading, error } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const decodeQuery = decodeURIComponent(window.location.search);
  const params = new URLSearchParams(decodeQuery);
  const orderId = params.get("order_id");
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [dispatch, orderId]);

  // console.log("Order Coming", order);

  if (error) {
    console.log("error", error);
    toast.error(error);
  }

  // console.log(order);
  if (isLoading) {
    return (
      <div className="flex justify-center align-center h-[90vh]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      {order && !isLoading && (
        <DeliveryAddressCard
          classNameBtn="md:w-[25%] px-4 py-3"
          firstName={order?.data?.order?.shippingAddress[0].firstName}
          lastName={order?.data?.order?.shippingAddress[0].lastName}
          mobile={order?.data?.order?.shippingAddress[0].mobile}
          address={order?.data?.order?.shippingAddress[0].address}
          city={order?.data?.order?.shippingAddress[0].city}
          state={order?.data?.order?.shippingAddress[0].state}
          zipCode={order?.data?.order?.shippingAddress[0].zipCode}
          key={order?._id}
        />
      )}
      <OrderSection />
    </>
  );
};

export default OrderSummary;
