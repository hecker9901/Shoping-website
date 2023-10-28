import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
// import DeliveryAddressCard from "./DeliveryAddressCard";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, reset } from "../../../../store/orderReducer";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "./../Spinner/Spinner";
const DeliveryAddress = (props) => {
  // For Empty the form
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const postalCodeRef = useRef();
  const mobileNumberRef = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, error, order } = useSelector((state) => state.order);

  const navigateHandler = useCallback(() => {
    // props.onNavigate(3);
    if (order?.data?.order) {
      navigate(`?step=3&order_id=${order?.data?.order?._id}`);
    }
  }, [navigate, order?.data?.order]);
  useEffect(() => {
    if (order) {
      console.log("Effect");
      toast.success("Order Placed Successfully");
      props.onNavigate(1);
      setTimeout(() => navigateHandler(), 2000);
      reset();
    }

    return () => {
      // console.log("unmount");
      toast.dismiss();
    };
  }, [order, navigateHandler]);

  //   console.log("DeliveryAddress");
  let address;
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submitHandler");
    // const formdata = new FormData(e.currentTarget);
    //           FOR GETTING DATA
    // const address = {
    //   firstName: formdata.get("firstName"),
    //   lastName: formdata.get("lastName"),
    //   address: formdata.get("address"),
    //   city: formdata.get("city"),
    //   state: formdata.get("state/province/region"),
    //   zipCode: formdata.get("zipCode"),
    //   mobile: formdata.get("mobile"),
    // };
    // console.log(mobileNumberRef.current.value);

    address = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      address: addressRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.value,
      zipCode: postalCodeRef.current.value,
      mobile: mobileNumberRef.current.value,
    };
    // console.log(address);
    //   If empty
    if (
      firstNameRef.current.value === "" ||
      lastNameRef.current.value === "" ||
      addressRef.current.value === "" ||
      cityRef.current.value === "" ||
      stateRef.current.value === "" ||
      postalCodeRef.current.value === "" ||
      mobileNumberRef.current.value === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    if (
      postalCodeRef.current.value.length !== 5 ||
      isNaN(postalCodeRef.current.value)
    ) {
      toast.error("Postal Code must be 5 digits & only contain Digits");
      return;
    }
    if (
      mobileNumberRef.current.value.length !== 11 ||
      isNaN(mobileNumberRef.current.value)
    ) {
      toast.error("Mobile Number must be 11 digits & only contain Digits");
      return;
    }

    setTimeout(() => dispatch(createOrder({ address })), 1000);

    // Empty the form
    // console.log(firstNameRef.current.value);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    addressRef.current.value = "";
    cityRef.current.value = "";
    stateRef.current.value = "";
    postalCodeRef.current.value = "";
    mobileNumberRef.current.value = "";
  };
  // console.log("Order check", order);
  if (error) {
    // console.log("error", error);
    toast.error(error);
  }

  return (
    <div className="flex gap-5 flex-wrap   p-4 ">
      <ToastContainer position="top-center" autoClose={2000} />
      {/* <div className="h-[30rem] md:basis-[40%] overflow-y-auto shadow-lg p-3 flex flex-col gap-4"> */}
      {/*  Delivery Address Card */}
      {/* {address && <DeliveryAddressCard address={address} />} */}
      {/* </div> */}
      <form
        className=" grow p-5 shadow-lg flex flex-col gap-y-5"
        onSubmit={submitHandler}
      >
        <h3 className="text-xl font-bold text-gray-900">
          Personal Information
        </h3>
        <div className="flex  gap-4">
          <TextField
            required
            id="firstName"
            label="First Name"
            name="firstName"
            fullWidth
            autoComplete="given"
            inputRef={firstNameRef}
          />
          <TextField
            required
            id="lastName"
            label="Last Name"
            name="lastName"
            fullWidth
            autoComplete="given"
            inputRef={lastNameRef}
          />
        </div>
        <TextField
          required
          id="Address"
          label="Address"
          name="address"
          fullWidth
          autoComplete="given"
          multiline
          rows={5}
          inputRef={addressRef}
        />
        <div className="flex  gap-4">
          <TextField
            required
            id="City"
            label="City"
            name="city"
            fullWidth
            autoComplete="given"
            inputRef={cityRef}
          />
          <TextField
            required
            id="state"
            label="State/Province/Region"
            name="state/province/region"
            fullWidth
            autoComplete="given"
            inputRef={stateRef}
          />
        </div>
        <div className="flex  gap-4">
          <TextField
            required
            id="Postal Code"
            label="Postal Code"
            name="zipCode"
            fullWidth
            autoComplete="given"
            inputRef={postalCodeRef}
          />
          <TextField
            required
            id="Mobile Number"
            label="Mobile Number"
            name=" mobile"
            fullWidth
            autoComplete="given"
            inputRef={mobileNumberRef}
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          className="md:w-[30%] px-4 py-3"
          sx={{
            backgroundColor: "##9155FD",
            color: "#fff",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "##9155FD",
            },
          }}
          // onClick={navigateHandler}
        >
          {isLoading && (
            <span className="flex gap-2">
              <Spinner /> Submitting...
            </span>
          )}
          {!isLoading && "Deliver Here"}
        </Button>
      </form>
    </div>
  );
};

export default DeliveryAddress;
