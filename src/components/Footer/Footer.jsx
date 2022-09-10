import React from "react";
import { Container } from "../../styles/GlobalComponents";
import {
  ContactInfo,
  // ContactInfoList,
  ContactInfoListItem,
  ContactTitle,
  FooterAbout,
  FooterContact,
  FooterContent,
  FooterDivider,
  FooterNews,
  NewsTitle,
  News,
  NewsHeader,
  NewsTime,
  NewsText,
  FooterAppreciation,
  AppreciationText,
} from "./Footer.styles";
import { WhiteLogo } from "./../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <FooterContent>
      <Container>
        <FooterAbout>
          <figure>
            <img src={WhiteLogo} alt="" />
          </figure>
          {/* <FooterDivider /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            eveniet impedit eaque modi dicta temporibus non obcaecati hic
            dolores sapiente.
          </p>
          {/* <FooterDivider /> */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            molestias!
          </p>
        </FooterAbout>
        <FooterContact>
          <ContactTitle>Contact Us</ContactTitle>

          <FooterDivider />

          <ContactInfo>
            <ContactInfoListItem href="mailto:kingsleyiheme@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <small>info@guitarlessons.com</small>
            </ContactInfoListItem>
            <ContactInfoListItem href="tel:+2349035810428">
              <FontAwesomeIcon icon={faPhone} />
              <small>090 358 104 28</small>
            </ContactInfoListItem>
            <ContactInfoListItem href="mailto:kingsleyiheme@gmail.com">
              <FontAwesomeIcon icon={faPhone} />
              <small>090 358 104 28</small>
            </ContactInfoListItem>
            <ContactInfoListItem href="mailto:kingsleyiheme@gmail.com">
              <FontAwesomeIcon icon={faPhone} />
              <small>090 358 104 28</small>
            </ContactInfoListItem>
          </ContactInfo>
        </FooterContact>
        <FooterNews>
          <NewsHeader>Latest News</NewsHeader>
          <FooterDivider />
          <News>
            <NewsTime>02.08.2020</NewsTime>
            <NewsTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </NewsTitle>
            <NewsText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              placeat.
            </NewsText>
          </News>
          <News>
            <NewsTime>02.08.2020</NewsTime>
            <NewsTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </NewsTitle>
            <NewsText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              placeat.
            </NewsText>
          </News>
        </FooterNews>
      </Container>
      <FooterAppreciation>
        <AppreciationText>
          <Fade right>My Appreciation Goes to ❤❤❤ My family and friends</Fade>
        </AppreciationText>
      </FooterAppreciation>
    </FooterContent>
  );
};

export default Footer;
