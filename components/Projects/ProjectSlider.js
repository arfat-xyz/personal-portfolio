import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import { urlFor } from "../../constants/sanityClient";
import HideComponent from "../ExtraComponent/HideComponent";

const Carousel = ({ images }) => {
  const items2 = images.map((img) => (
    <img
      key={img._key}
      src={urlFor(img.image).width(900).url()}
      alt={img?.alt ? img?.alt : "arfat rahman project image"}
      title="Arfat rahman project"
    />
  ));
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  // src={urlFor(images[0].image).width(400).url()}
  const Wrapper = styled.div`
    width: 100%;

    li.alice-carousel__stage-item {
      padding: 30px;
    }
  `;
  return (
    <>
      <Wrapper>
        <HideComponent />
        <AliceCarousel
          // mouseTracking
          items={items2}
          responsive={responsive}
          autoPlay
          infinite
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          disableButtonsControls={true}
          disableDotsControls={true}
          animationType="fadeout"
        />
      </Wrapper>
    </>
  );
};

export default Carousel;
