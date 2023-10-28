const ShopCard = (props) => {
  const { image, title, description } = props;
  return (
    <div className="flex flex-col items-center  w-[13rem] md:w-[15rem]  h-[23rem] border  rounded-lg shadow">
      <div className=" w-[10rem]  md:w-[12rem] h-[15rem]">
        <img src={image} className="w-full h-full object-cover object-top" />
      </div>
      <div className="p-2 self-start ">
        <h4 className="font-bold text-lg text-gray-900">{title}</h4>
        <p className="text-normal text-gray-500 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ShopCard;
