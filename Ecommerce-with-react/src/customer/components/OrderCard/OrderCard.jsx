// import { useNavigate, useLocation } from "react-router-dom";
const OrderCard = (props) => {
  // const location = useLocation();
  // const navigate = useNavigate();

  const { orderItems, orders } = props;
  // console.log(orderItems);
  // console.log(orders);
  // const navigateHandler = () => {
  //   // console.log(location.pathname);
  //   navigate(`${location.pathname}/${1}`);
  // };
  const classes =
    props.className +
    " basis-[75%] flex flex-col space-y-5 gap-5 py-5 md:flex-row justify-between items-center border px-5 shadow-lg hover:pointer";
  return (
    <div className={classes}>
      <div className="flex gap-5 items-center">
        {/*  Image */}
        <div className="w-[210px] h-[210px] overflow-hidden">
          <img
            src={orderItems[0].product[0].imageUrl}
            alt="image"
            className="h-full w-full object-cover object-top-left"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-lg font-semibold">Total Quantity:</h5>
          <p className="text-xl text-gray-500 font-semibold">
            {orders.totalItems}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-lg font-semibold">Price :</h5>
        <p className="text-xl text-gray-500 font-semibold">
          Rs {orders.totalPrice - orders.totalDiscountPrice}
        </p>
      </div>

      <div className="flex flex-col gap-2 place-items-center">
        <h5 className="text-lg font-semibold">Status :</h5>
        {
          <span
            className={`${
              orders.orderStatus === "Pending"
                ? "border-red-500 text-red-500"
                : "border-green-500 text-green-500"
            } rounded-3xl px-5 py-3  border-solid border-[1px]`}
          >
            {orders.orderStatus}
          </span>
        }
      </div>
    </div>
  );
};

export default OrderCard;
