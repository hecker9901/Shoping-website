import { Component } from "react";
import Slider from "react-slick";
import { mainData } from "./mainData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class MainCorousel extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2500,
    };
    return (
      <div className="pt-11 border-t border-gray-200 -z-10">
        <Slider {...settings}>
          {mainData.map((item, i) => {
            return (
              <div key={i} className="w-[90%] md:w-[100%]">
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
