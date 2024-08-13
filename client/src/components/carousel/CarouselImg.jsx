import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../assets/data/data";
import H3Component from "../ui/text/H3component";

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
        <section key={dataCity.city_id} className="carousel-section">
          <img
            className="carousel-img"
            src={dataCity.image_url}
            alt={dataCity.city_name}
          />
          <H3Component subtitle3={dataCity.city_name} />
        </section>
      ))}
    </Carousel>
  );
}
export default CarouselImg;
