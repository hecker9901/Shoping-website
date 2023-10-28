import "./ProductCard.css";

const ProductListCard = (props) => {
  const { image, price, discountPrice, discount, title, description } = props;

  // Not of grid

  return (
    <div className="w-full flex flex-row  gap-2rem border">
      <div className="w-[300px]  h-[180px] sm:w-[180px]">
        <img
          className="object-cover object-left-top w-full h-full"
          src={image}
          alt={title}
        />
      </div>
      <div className="textPart bg-white p-3">
        <h4 className="font-bold text-lg text-gray-900">{title}</h4>
        <p className="text-normal text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4  mt-2">
          <p className="font-semibold ">{price - discountPrice}</p>
          <p className="opacity-50 line-through">{price}</p>
          <p className="font-bold text-green-600 ">{discount}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
