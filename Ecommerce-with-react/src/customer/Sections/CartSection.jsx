import { useNavigate } from "react-router-dom";
import CheckoutCard from "../components/CheckoutCard/CheckoutCard";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/cartReducer";
import Loading from "./../components/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import EmptyCart from "../components/EmptyCart/EmptyCart";

const CartSection = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const history = useHistory();
  const { cart, isLoading, error } = useSelector((state) => state.cart);

  // console.log(cart);
  //  fetching data
  useEffect(() => {
    setTimeout(() => {
      dispatch(getCart());
    }, 500);

    return () => {
      clearTimeout();
    };
  }, [dispatch]);

  let navigateTo = "/checkout?step=2";

  const navigateHandler = () => {
    if (cart?.cart?.cartItems?.length !== 0) {
      navigate(navigateTo);
    }
    toast.error("Cart is empty!");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center align-center h-[90vh]">
        <Loading />
      </div>
    );
  }
  if (error) {
    toast.error(error);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 w-[95%] mx-auto  gap-5">
      <div className=" col-span-1 lg:col-span-2 flex flex-col gap-4">
        <ToastContainer position="top-center" autoClose={2000} />
        {cart?.cart?.cartItems?.length === 0 && (
          // <div className="flex ">
          //   <h1 className="text-2xl text-gray-900 font-bold">Cart is empty!</h1>
          // </div>

          <EmptyCart />
        )}
        {cart?.cart?.cartItems?.map((item) => (
          <CheckoutCard item={item} key={item._id} />
        ))}
      </div>
      {/*   Checkout Form Card */}
      <div className="col-span-1 flex flex-col gap-3 border px-4 py-3 max-h-[280px] shadow">
        <h5 className="text-lg font-semibold opacity-60 ">Price Details</h5>
        <div className="flex justify-between">
          <h5 className="text-lg font-bold">Price</h5>
          <h5 className="text-lg font-bold">Rs {cart?.cart?.totalPrice}</h5>
        </div>
        <div className="flex justify-between">
          <p className="text-lg ">Discount</p>
          <p className="text-lg text-green-500 font-semibold">
            -Rs {cart?.cart?.totalDiscountPrice}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg ">Delivery Charges</p>
          <p className="text-lg text-green-500 font-semibold ">Free</p>
        </div>
        <div className="flex justify-between">
          <h5 className="text-lg font-bold">Total Amount</h5>
          <h5 className="text-lg font-bold">
            Rs
            {/* {console.log(typeof cart?.cart?.totalDiscountPrice, "From Cart")} */}
            {typeof cart?.cart?.totalDiscountPrice === "number" &&
              typeof cart?.cart?.totalPrice === "number" &&
              cart?.cart?.totalPrice - cart?.cart?.totalDiscountPrice}
            {typeof cart?.cart?.totalDiscountPrice !== "number" &&
              typeof cart?.cart?.totalPrice !== "number" &&
              0}
          </h5>
        </div>
        {!props.navigate && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#9155FD",
              color: "#fff",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#9155FE",
              },
            }}
            onClick={navigateHandler}
          >
            Checkout
          </Button>
        )}
      </div>
    </section>
  );
};

export default CartSection;
