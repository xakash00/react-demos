import React, { useState } from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/swiper-bundle.css";
import { Card } from "../../styles/index";
import styled from "styled-components";

const SwiperCarousel = ({ items, children }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    console.log("click");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <div>
        <Swiper
          spaceBetween={29}
          modules={[Autoplay, Pagination]}
          loopFillGroupWithBlank={true}
          slidesPerView={3}
          speed={3000}
          grabCursor={true}
          keyboardControl={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false
          }}
          // pagination={{ type: "fraction" }}
          loop={true}
          scrollbar={false}
          className="swiper-container swiper-container-free-mode"
        >
          {[...new Array(10)].map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <Card>Slide - {index}</Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <StyledButton disabled={loading} onClick={handleClick}>
          {loading === true ? "Loading..." : "Sample"}
        </StyledButton>
      </div>
    </div>
  );
};

export default SwiperCarousel;

const StyledButton = styled.button`
  border: none;
  padding: 5px 15px 5px;
  background-color: #f77233;
  font-size: 13px;
  color: #fff;
  border-radius: 5px;
  :disabled {
    background-color: #f5a37d;
  }
`;
