import styled from "styled-components";
import { Lessonbg } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "./../../styles/Variables";
export const AboutContainer = styled.div`
  min-height: 100vh;
`;

export const Lessons = styled.section`
  min-height: 100vh;
  background-image: url(${Lessonbg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  & > div {
    padding-top: 170px;
    padding-bottom: 70px;
  }
`;

export const LessonTexts = styled.div`
  font-size: 3rem;
  color: white;
`;
export const LessonsTitle = styled.h6``;
export const LessonText = styled.p`
  font-size: 3rem;
  letter-spacing: 4px;
  font-weight: 100;
`;
export const LessonCourses = styled.ul`
  list-style-type: none;
  /* background-color: black; */
  color: white;
  padding: 0 0 0 2rem;
  li:last-child {
    height: fit-content;
  }
`;
export const LessonCourse = styled.li`
  position: relative;
  height: 150px;
  padding: 1rem;
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;
export const LessonIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: -30px;
  font-size: 2em;
  margin: 0.7rem 0;
`;
export const LessonLine = styled.div`
  height: 100px;
  width: 2px;
  background-color: white;
  position: absolute;
  left: -17px;
  top: 70px;
`;

export const ServicesSection = styled.section`
  min-height: 100vh;
  position: relative;
  background-color: white;
`;
export const ServicesPointer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin: 0 auto;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin-top: -30px;
    font-size: 2rem;
    cursor: pointer;
  }
  /* z-index: 998; */
`;

export const ServicesTitle = styled.div`
  font-size: 2rem;
  /* border: 1px solid grey; */
  text-align: center;
  padding-top: 90px;
`;

export const Underline = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${({ theme }) => theme.text};
  margin: 2rem auto;
`;

export const ServicesText = styled.p`
  padding: 0 0.5rem;
  margin-bottom: 1rem;
`;

export const ServicesContainer = styled.div`
  padding-top: 50px;
`;

export const ServicesList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  & > li {
    flex: 1;
  }
`;

export const ServiceItem = styled.li`
  min-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 50%;
  margin-bottom: 2rem;
  width: 170px;
  height: 170px;
  font-size: 3rem;
  color: ${colors.text};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    background-color: ${colors.text};
    color: ${colors.myWhite};
  }
`;
export const ServiceTitle = styled.h3`
  text-transform: uppercase;
  color: ${colors.primary};
  font-size: 1rem;
`;
