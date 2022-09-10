import React from "react";
import { Container } from "../../styles/GlobalComponents";
import { HomeContainer, HomeTexts, HomeCarousel } from "./Home.styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LatestNews from "../../components/News/LatestNews";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <HomeContainer
        style={{
          backgroundPosition: "center",
          height: "calc(100vh - 90px)",
          marginTop: "calc(90px)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Helmet>
          <title>Guitar Lessons</title>
        </Helmet>
        <Container>
          <HomeCarousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
          >
            <HomeTexts>
              <p>GET PREMIUM LESSONS</p>
              <p>LEARN FROM PROFESSIONAL MUSICIANS</p>
            </HomeTexts>
            <HomeTexts>
              <p>CHECK ABOUT OUR HISTORY</p>
              <p>LEARNING THE BASICS WEEKS</p>
            </HomeTexts>
            <HomeTexts>
              <p>GET A GIG</p>
              <p>GET TO PLAY PROFESSIONALLY AFTER THE COURSE</p>
            </HomeTexts>
          </HomeCarousel>
        </Container>
      </HomeContainer>
      <LatestNews />
    </>
  );
};

export default Home;
