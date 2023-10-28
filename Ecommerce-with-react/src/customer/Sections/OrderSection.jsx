import { useNavigate } from "react-router-dom";
import CheckoutCard from "../components/CheckoutCard/CheckoutCard";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/cartReducer";
import Loading from "./../components/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import StripeCheckoutButton from "../components/StripeCheckoutButton/StripeCheckoutButton";
const OrderSection = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const { cart, isLoading, error } = useSelector((state) => state.cart);

  const searchParams = new URLSearchParams(window.location.search);
  const orderId = searchParams.get("order_id");

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

  //    FOR REACT STRIPE CHECKOUT YOU CNA CHECK THIS ONE
  // const paymentHandler = async (token) => {
  //   try {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     const orderId = searchParams.get("order_id");
  //     // console.log(token);

  //     const session = await api.post(`/api/v1/payments/${orderId}`, token);
  //     // console.log(session);
  //     const successUrl = session.data.session.success_url;
  //     if (successUrl) {
  //       navigate("/account/order");
  //     }
  //     // window.location.assign(successUrl);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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

        {/* <StripeCheckout
          stripeKey={import.meta.env.VITE_REACT_APP_STRIPE_PUBLICKEY}
          token={paymentHandler}
          name="Al Syed Ecommerce"
        >
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
          >
            Order Payment
          </Button>
        </StripeCheckout> */}

        <StripeCheckoutButton id={orderId} />
      </div>
    </section>
  );
};

export default OrderSection;
