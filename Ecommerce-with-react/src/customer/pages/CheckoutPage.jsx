import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddress from "../components/DeliveryAddress/DeliveryAddress";
import OrderSummary from "../components/OrderSummary/OrderSummary";

const steps = ["Login", "Delivery Addresss", "Order Summary", " Payment"];

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  // Query of step
  const step = parseInt(searchParams.get("step"));
  const [activeStep, setActiveStep] = React.useState(step - 1);

  const handleBack = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // searchParams.set("step", step - 1);
    // const query = searchParams.toString();
    // navigate({ search: `?${query}` });
    navigate(-1);
  };

  const navigateStepHandler = (step) => {
    // console.log(stepCheck);
    //  for  increasing step
    setActiveStep(step + 1);
  };

  return (
    <div className="md:w-[90%] mx-auto my-4">
      {" "}
      <Box
        sx={{
          width: {
            xs: "90%",
            md: "100%",
          },
        }}
      >
        {/*  It will take from URL which variable is step */}
        <Stepper
          activeStep={activeStep}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "Wrap",
            gap: {
              xs: "20px",
              md: "10px",
            },
          }}
        >
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} /> */}
        {/* <Button onClick={handleReset}>Reset</Button> */}
        {/* </Box>
          </React.Fragment> */}
        {/* ):  */}
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            {/* <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
          </Box>
          {/*   Content to be Shown  */}
          {step == 2 && <DeliveryAddress onNavigate={navigateStepHandler} />}
          {step == 3 && <OrderSummary />}
        </React.Fragment>
      </Box>
    </div>
  );
}
