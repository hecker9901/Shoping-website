import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
  getCart,
} from "../../../../store/cartReducer";

const CheckoutCard = (item) => {
  const [removeButtonClick, setRemoveButtonClick] = useState(false);

  const dispatch = useDispatch();

  // const location = useLocation();
  const handleUpdateHandler = (num) => {
    let sign;
    if (num === 1) {
      sign = "+";
    } else {
      sign = "-";
    }
    const reqData = {
      data: { quantity: item.item.quantity + num, sign },
      cartItemId: item?.item?._id,
    };

    // console.log(reqData);
    dispatch(updateCartItem(reqData));
    // setUpdateButtonClick(true);
    setTimeout(() => {
      dispatch(getCart());
    }, 1000);
  };

  useEffect(() => {
    if (removeButtonClick) {
      dispatch(removeCartItem(item?.item?._id));
      setTimeout(() => {
        dispatch(getCart());
      }, 1000);
    }
  }, [removeButtonClick, dispatch, item?.item?._id]);

  const classDescription = "text-gray-500 text-lg font-semibold opacity-60";
  return (
    <div className="shadow-lg flex gap-3 flex-col   border px-6 py-4">
      <div className="flex flex-col  sm:flex-row gap-6 flex-wrap">
        {/*  Image */}
        <div className="w-[10rem] h-[10rem] self-center">
          <img
            src={item?.item?.products[0].imageUrl}
            alt={item?.item?.products[0].title}
            className="object-cover h-full w-full object-top-left"
          />
        </div>
        <div className="flex gap-3 flex-col">
          <h4 className="text-lg font-bold text-gray-900 ">
            {item?.item?.products[0].title}
          </h4>
          <p className={classDescription}>
            Size:{item?.item?.size[0].toUpperCase() + item?.item?.size.slice(1)}
          </p>
          <p className={classDescription}>
            Seller :{" "}
            {item?.item?.userId[0].firstName[0].toUpperCase() +
              item?.item?.userId[0].firstName.slice(1)}{" "}
            {item?.item?.userId[0].lastName[0].toUpperCase() +
              item?.item?.userId[0].lastName.slice(1)}
          </p>

          {/*  Price */}
          <div className="flex items-center gap-4 ">
            <p className="font-semibold ">
              Rs{" "}
              {item?.item?.products[0].price -
                item?.item?.products[0].discountPrice}
            </p>
            <p className="opacity-50 line-through">
              Rs {item?.item?.products[0].price}
            </p>
            <p className="font-bold text-green-600 ">
              {item?.item?.products[0].discountPercent}% off
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-7">
        <div className="flex items-center gap-3 my-2">
          <RemoveCircleOutlineIcon
            className="text-2xl text-gray-500 cursor-pointer "
            disabled={item.item.quantity <= 0}
            onClick={() => handleUpdateHandler(-1)}
          />
          <span className="border px-5 py-1">{item.item.quantity}</span>
          <AddCircleOutlineIcon
            className="text-2xl text-purple-500 cursor-pointer"
            onClick={() => handleUpdateHandler(1)}
          />
        </div>
        <Button
          className=" mt-15  text-purple-500"
          onClick={() => setRemoveButtonClick(true)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CheckoutCard;
