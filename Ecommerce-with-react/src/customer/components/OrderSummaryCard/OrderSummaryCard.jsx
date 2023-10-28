import img1 from "../../../assets/menskurta/img1.jpeg";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderSummaryCard = (props) => {
  const classes =
    props.className +
    " basis-[75%] flex flex-col space-y-5 gap-5 py-5 md:flex-row justify-between items-center border px-5 shadow-lg";
  return (
    <div className={classes}>
      <div className="flex gap-5 items-center">
        {/*  Image */}
        <div className="w-[150px] h-[150px] overflow-hidden">
          <img
            src={img1}
            alt="image"
            className="h-full w-full object-cover object-top-left"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="text-lg font-bold">Men slim mid rise black pent</h5>
          <div className="flex gap-5">
            <p className="text-sm text-gray-500">Size: M</p>
            <p className="text-sm text-gray-500">Color: Blue</p>
          </div>
          <p className="text-gray-900">Seller: Syed Moazam Ali</p>
          <p>Rs 1099</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-md  text-purple-600 flex gap-3  items-center">
          <StarBorderIcon />
          <span>Rate & Review the Product</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
