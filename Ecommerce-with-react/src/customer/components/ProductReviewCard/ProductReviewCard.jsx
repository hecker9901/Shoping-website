import { Avatar, Rating } from "@mui/material";
const ProductReviewCard = () => {
  return (
    <div className="flex flex-row gap-4 items-center ">
      <div className="">
        <Avatar
          sx={{
            width: 50,
            height: 50,
            backgroundColor: "#9333EA",
          }}
        >
          M
        </Avatar>
      </div>
      {/*  description and ratings */}
      <div>
        <h5 className="font-semibold text-lg text-gray-900">Moazam</h5>
        <p className="opacity-60 text-gray-900">April 20,2023</p>
        <Rating readOnly value={4} />
        <p className="font-normal text-gray-900">Nice Product , I love it</p>
      </div>
    </div>
  );
};

export default ProductReviewCard;
