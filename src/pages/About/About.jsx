import React from "react";
import {
  AboutContainer,
  LessonCourse,
  LessonCourses,
  LessonIcon,
  LessonLine,
  Lessons,
  LessonsTitle,
  LessonText,
  LessonTexts,
  ServicesContainer,
  ServicesList,
  ServicesPointer,
  ServicesSection,
  ServicesText,
  ServicesTitle,
  ServiceItem,
  Underline,
  ServiceIcon,
  ServiceTitle,
} from "./About.styles";
import { Container } from "../../styles/GlobalComponents";
import {
  faBox,
  faAnglesDown,
  faFile,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Tada from "react-reveal/Tada";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <AboutContainer>
      <Helmet>
        <title>Guitar Lessons | About</title>
      </Helmet>
      <Lessons>
        <Container>
          <LessonTexts>
            <LessonsTitle>OUR LESSONS</LessonsTitle>
            <LessonText>ARE EASY</LessonText>
          </LessonTexts>
          <LessonCourses>
            <LessonCourse>
              <LessonIcon icon={faBox} />
              <h3>GUITAR BASICS,</h3>
              <h3>WITH THE PROFESSIONALS THEMSELVES</h3>
              <LessonLine />
            </LessonCourse>
            <LessonCourse>
              <LessonIcon icon={faBox} />
              <h3>GUITAR ADVANCED</h3>
              <h3>LEARN SOME ADVANCED GUITAR CONCEPTS</h3>
              <LessonLine />
            </LessonCourse>
            <LessonCourse>
              <LessonIcon icon={faBox} />
              <h3>OTHER MUSICAL INSTRUMENTS</h3>
              <h3>LEARN ABOUT SOME OTHER MUSICAL INSTRUMENTS LIKE THE PIANO</h3>
            </LessonCourse>
          </LessonCourses>
        </Container>
      </Lessons>
      <ServicesSection>
        <Container>
          <ServicesPointer>
            <FontAwesomeIcon icon={faAnglesDown} />
          </ServicesPointer>
          <ServicesTitle>SERVICES</ServicesTitle>
          <Underline />
          <ServicesText>
            <Fade>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              temporibus ullam alias atque non ab aperiam quibusdam deserunt
              doloremque. Ex deleniti saepe, illo quibusdam porro placeat ipsum
              eos laboriosam distinctio.
            </Fade>
          </ServicesText>
          <ServicesText>
            <Fade>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              temporibus ullam alias atque non ab aperiam quibusdam deserunt
              doloremque. Ex deleniti saepe, illo quibusdam porro placeat ipsum
              eos laboriosam distinctio.
            </Fade>
          </ServicesText>
          <ServicesContainer>
            <ServicesList>
              <ServiceItem>
                <ServiceIcon>
                  <Bounce>
                    <FontAwesomeIcon icon={faFile} />
                  </Bounce>
                </ServiceIcon>
                <ServiceTitle>Get A Certificate</ServiceTitle>
                <Underline />
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon>
                  <Tada>
                    <FontAwesomeIcon icon={faSkype} />
                  </Tada>
                </ServiceIcon>
                <ServiceTitle>Lessons Via Skype</ServiceTitle>
                <Underline />
              </ServiceItem>
              <ServiceItem>
                <ServiceIcon>
                  <FontAwesomeIcon icon={faVideo} />
                </ServiceIcon>
                <ServiceTitle>Recording Services</ServiceTitle>
                <Underline />
              </ServiceItem>
            </ServicesList>
          </ServicesContainer>
        </Container>
      </ServicesSection>
    </AboutContainer>
  );
};

export default About;
