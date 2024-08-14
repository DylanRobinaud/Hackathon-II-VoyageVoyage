import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../assets/data/data";
import ParagraphComponent from "../ui/text/ParagraphComponent";

import "./CarouselImg.css";

function CarouselImg() {
  const responsive = {
    mobile: {
      breakpoint: { max: 391, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {data.map((dataCity) => (
        <Link
          to={`/ville-details/${dataCity.city_id - 1}`}
          key={dataCity.city_id}
          className="carousel-section"
        >
          <img
            className="carousel-img"
            src={dataCity.image_url}
            alt={dataCity.city_name}
          />
          <ParagraphComponent text={dataCity.city_name} />
        </Link>
      ))}
    </Carousel>
  );
}
export default CarouselImg;
