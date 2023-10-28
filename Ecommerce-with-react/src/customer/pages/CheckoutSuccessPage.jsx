// import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CheckoutSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center place-items-center flex-col my-10  gap-y-2">
      <CheckCircleOutlineIcon sx={{ fontSize: 150, color: "green" }} />
      <h1 className="text-center  font-extrabold text-4xl text-green-800">
        Thank You !
      </h1>
      <h5 className="text-gray-500 text-xl text-center">
        Your Order has been Confirmed Successfully!
      </h5>
      <Button
        variant="outlined"
        sx={{
          color: "green",
          border: "1px solid green",
          "&:hover": {
            backgroundColor: "green",
            color: "#fff",
          },
          transition: "all 0.3s ease-in-out",
        }}
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default CheckoutSuccessPage;
