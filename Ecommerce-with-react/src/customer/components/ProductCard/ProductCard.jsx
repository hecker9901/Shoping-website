import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  const navigate = useNavigate();
  const { image, price, discountPrice, discount, title, description, id } =
    props;

  const navigateHandler = () => {
    navigate(`/product/${id}`);
  };

  // Not of grid

  return (
    <div
      className="productCard w-[15rem]  transition-all    cursor-pointer "
      onClick={navigateHandler}
    >
      <div className="h-[20rem]">
        <img
          className="object-cover object-left-top w-full h-full"
          src={image}
          alt={title}
        />
      </div>
      <div className="textPart bg-white p-3">
        <h4 className="font-bold text-lg text-gray-900">{title}</h4>
        <p className="text-normal text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 ">
          <p className="font-semibold ">{price - discountPrice}</p>
          <p className="opacity-50 line-through">{price}</p>
          <p className="font-bold text-green-600 ">{discount}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
