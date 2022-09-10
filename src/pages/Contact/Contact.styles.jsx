import styled from "styled-components";
import { colors } from "./../../styles/Variables";
export const ContactContainer = styled.div`
  min-height: 100vh;
  & > div {
    padding: 200px 0 50px 0;
    text-align: center;
    .title {
      font-size: 3rem;
    }
  }
  form {
    /* border: 3px solid red; */
    width: 100%;
    max-width: 700px;
    padding: 1rem;
    text-align: left;
    margin: 0 auto;
    fieldset {
      border: none;
      outline: none;
      border-bottom: 2px solid gray;
      margin-bottom: 1rem;
      background-color: white;
      display: flex;
      align-items: center;
      padding: 0;
      border-radius: 30px;
      padding: 0.8rem 0.8rem;

      &:focus-within {
        box-shadow: 0 5px 10px lightblue;
        border-bottom-width: 4px;
      }
      input,
      textarea {
        flex: 1;
        padding: 0.5rem;
        border: none;
        outline: none;
        &:focus {
          border: none;
          outline: none;
        }
      }
      input {
        margin-left: 0.8rem;
      }
    }
    button {
      width: 100%;
      padding: 0.8rem 0.5rem;
      background-color: ${colors.primary};
      color: ${colors.myWhite};
      font-size: 1rem;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      border-radius: 30px;
    }
  }
`;

export const Divider = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${colors.text};
  margin: 2rem auto;
`;
