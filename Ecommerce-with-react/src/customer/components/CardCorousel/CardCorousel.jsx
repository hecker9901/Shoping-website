import { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ".././../../App.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ShopCard from "../ShopCard/ShopCard";

//  Customized arrows
function NextIcon(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] right-[-30px]  border rounded-lg shadow bg-white p-2 cursor-pointer"
    >
      <ChevronRightIcon fontSize="large" />
    </div>
  );
}

function PrevIcon(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] left-[-30px] border rounded-lg shadow bg-white p-2 cursor-pointer"
    >
      <ChevronLeftIcon fontSize="large" />
    </div>
  );
}

const CardCorousel = (props) => {
  const { data, section } = props;
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // Arrow can also be used in properties
    nextArrow: (
      <NextIcon
        onClick={() => {
          sliderRef.current;
          return sliderRef.current?.slickNext();
        }}
      />
    ),
    prevArrow: <PrevIcon onClick={() => sliderRef.current?.slickPrev()} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  // console.log(sliderRef);
  return (
    <div className="border w-[95%]  mx-auto px-3 py-3 relative ">
      <h1 className="text-2xl font-bold text-gray-900 mb-5">{section}</h1>
      <Slider
        {...settings}
        data-aos="fade-up"
        ref={sliderRef}
        className="h-full  flex gap-2"
      >
        {data.map((item, index) => {
          return (
            <ShopCard
              key={index}
              image={item.imageLink}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CardCorousel;
