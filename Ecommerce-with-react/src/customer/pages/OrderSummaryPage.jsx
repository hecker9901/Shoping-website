import DeliveryAddressCard from "../components/DeliveryAddress/DeliveryAddressCard";
import { Stepper, StepLabel, Step } from "@mui/material";
import OrderSummaryCard from "../components/OrderSummaryCard/OrderSummaryCard";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];
const OrderSummaryPage = () => {
  return (
    <div className="w-[90%] mx-auto my-[50px]">
      <DeliveryAddressCard />
      {/*   Stepper */}
      <div
        className="shadow-lg  my-[30px] py-5 px-3 hidden  md:block"
        // style={{
        //   "@media (max-width: 768px)": { display: "none" },
        // }}
      >
        <Stepper
          activeStep={3}
          alternativeLabel
          className="flex flex-wrap gap-[20px] md:gap-[10px] "
        >
          {steps.map((label, i) => (
            <Step key={i}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {/*   For Mobile  */}
      <div className="shadow-lg  my-[30px] py-5 px-3  md:hidden ">
        <Stepper activeStep={3} orientation="vertical">
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <OrderSummaryCard />
    </div>
  );
};

export default OrderSummaryPage;
