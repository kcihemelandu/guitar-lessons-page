import styled from "styled-components";
import { colors } from "./../../styles/Variables";
export const FooterContent = styled.footer`
  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    & > * {
      flex: 1;
      min-width: 300px;
      margin-bottom: 2rem;
    }
  }
  background-color: ${colors.primary};
  padding: 3rem 1rem;
  color: white;
`;

export const FooterDivider = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${colors.activeLink};
  margin: 1rem 0;
`;
export const FooterAbout = styled.section`
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  font-size: 0.9rem;
  line-height: 20px;
  padding: 0 1.5rem;

  img {
    width: 123px;
  }
  color: white;
  & > * {
    margin-bottom: 1rem;
  }
`;
export const FooterContact = styled.section`
  /* flex: 1; */
  padding: 0 1.5rem;
`;
export const ContactTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 100;
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContactInfoList = styled.ul`
  list-style-type: none;
`;
export const ContactInfoListItem = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  small {
    margin-left: 0.7rem;
    font-size: 1em;
  }
`;
export const FooterNews = styled.section`
  /* flex: 1; */
  padding: 0 1.5rem;
`;
export const NewsHeader = styled.h2`
  font-weight: 100;
  text-transform: uppercase;
`;
export const News = styled.article`
  /* display: flex;
  flex-direction */
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin-bottom: 1.5rem;
`;
export const NewsTime = styled.span`
  color: ${colors.activeLink};
  display: block;
  margin-bottom: 0.1rem;
`;
export const NewsTitle = styled.h3`
  font-weight: 100;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-bottom: 0.1rem;
`;

export const FooterAppreciation = styled.div`
  border-top: 2px solid ${colors.activeLink};
  height: 70px;
`;

export const AppreciationText = styled.p`
  margin: auto auto;
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NewsText = styled.p``;
