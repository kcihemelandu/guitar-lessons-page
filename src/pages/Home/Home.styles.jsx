import styled from "styled-components";
import { Homebg } from "../../assets/images";
import { Carousel } from "react-responsive-carousel";

export const HomeContainer = styled.div`
  background-image: url(${Homebg});
  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    & > *:first-child {
      width: 100%;
    }
  }
`;

export const HomeCarousel = styled(Carousel)`
  /* border: 1px solid green; */
  .carousel-slider {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid red;
    width: 300px;
    .slider-wrapper {
      padding: 0 0 0 0;

      // border: 1px solid yellow;
    }
  }
`;
export const HomeTexts = styled.div`
  color: white;
  font-weight: 400;
  text-align: right;
  font-size: 2rem;

  & > * {
    margin-bottom: 1.5rem;
  }
  p:first-child {
    font-weight: 700;
  }
  p:last-child {
    letter-spacing: 2px;
    word-spacing: 5px;
  }
`;
