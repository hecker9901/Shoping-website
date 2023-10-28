import { Button } from "@mui/material";
import { api } from "../config/config";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
const StripeCheckoutButton = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const paymentHandler = () => {
    setIsLoading(true);
    api
      .post("/api/v1/checkout-payment", {
        id: props.id,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err));
    console.log(isLoading);
    setIsLoading(false);
  };

  return (
    <>
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
        onClick={paymentHandler}
      >
        {isLoading && (
          <span className="flex gap-2">
            <Spinner /> Submitting...
          </span>
        )}
        {!isLoading && "Pay Now"}
      </Button>
    </>
  );
};

export default StripeCheckoutButton;
