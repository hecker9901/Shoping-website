import OrderCard from "../components/OrderCard/OrderCard";
import { getOrderHistory } from "../../../store/orderReducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./../components/Loading/Loading";
const OrderHistoryPage = () => {
  const dispatch = useDispatch();

  const { orders, error, isLoading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch]);

  // console.log(orders);

  if (error) {
    toast.error(error);
  }
  if (isLoading) {
    return (
      <div className="flex justify-center align-center h-[90vh]">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col  gap-10  w-[90%] mx-auto my-[20px] ">
      <ToastContainer position="top-center" autoClose={2000} />
      <h1 className="text-gray-900 text-4xl font-bold text-center">
        Order History
      </h1>
      <div className="flex flex-col gap-5 basis-[75%]">
        {orders?.map((item) => (
          <OrderCard
            className="border hover:shadow-2xl"
            key={item._id}
            orderItems={item.orderItems}
            orders={item}
          />
        ))}
        {orders?.length === 0 && (
          <h1 className="text-gray-500 text-2xl font-bold text-center">
            No Orders Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
