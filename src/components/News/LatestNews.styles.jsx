import styled from "styled-components";
import { colors } from "../../styles/Variables";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
export const NewsSection = styled.section`
  padding: 3rem 0 3rem 0;
  background-color: ${colors.bg};
  & > div {
    display: flex;
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
`;

export const NewsDivider = styled.div`
  height: 2px;
  max-width: 30px;
  margin: 2rem auto;
  background: currentColor;
`;
export const NewsTitle = styled.h2`
  text-align: center;
`;

export const NewsIntroText = styled.p`
  letter-spacing: 3px;
`;

export const NewsPosts = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* border: 2px solid black; */
  /* justify-content: stretch; */
  & > * {
    height: 600px;
    margin: 1rem;
  }
  & > .react-reveal {
    flex: 1;
    min-width: 400px;
  }
`;
export const NewsVertPost = styled.figure`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  img {
    height: 40%;
  }
`;
export const VertContentFade = styled(Fade)``;
export const NewsHorizPosts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 350px;
  width: 500px;
  /* height: 600px; */
  /* border: 1px solid black; */
  .react-reveal {
    height: 120px;
    width: 100%;
    /* border: 3px solid red; */
  }
`;
export const NewsHorizPost = styled.figure`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  img {
    width: 30%;
    height: 100%;
  }
  figcaption {
    height: 100%;
  }
`;
export const NewsPostText = styled.figcaption`
  flex: 1;
  padding: 0.3rem;
  /* border: 1px solid gray; */
  span:first-child {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    span {
      margin-left: 0.5rem;
    }
  }
`;

export const NewsPostDivider = styled.div`
  width: 150px;
  height: 2px;
  background-color: currentColor;
  margin: 1.5rem 0;
`;

export const HorizContentFade = styled(Fade)``;
export const AllContainer = styled.div`
  height: 70px;
  /* border: 2px solid gray; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
export const AllArticlesBtn = styled(Link)`
  color: ${colors.activeLink};
  display: inline-block;
  border: 2px solid ${colors.activeLink};
  margin: auto auto;
  padding: 1rem;
  text-transform: uppercase;
  transition: all 0.35s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${colors.primary};
    border: none;
    color: white;
  }
`;
