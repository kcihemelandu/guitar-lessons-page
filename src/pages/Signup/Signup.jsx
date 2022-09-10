import React, { useState } from "react";
import { Container } from "../../styles/GlobalComponents";
import { Divider } from "../Contact/Contact.styles";
import { SignupContainer } from "./Signup.styles";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const Sigunp = () => {
  const [isPassword, setIsPassword] = useState(false);
  return (
    <SignupContainer>
      <Helmet>
        <title>Guitar Lessons | Signup</title>
      </Helmet>
      <Container>
        <h3 className="title">Sign Up</h3>
        <Divider />
        <form action="">
          <Fade bottom>
            <fieldset>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </fieldset>
          </Fade>
          <Fade bottom>
            <fieldset>
              <label htmlFor="password">Password</label>
              <input
                type={isPassword ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <span
                className="eye_icon"
                onClick={() => {
                  setIsPassword(!isPassword);
                }}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={isPassword ? faEye : faEyeSlash} />
              </span>
            </fieldset>
          </Fade>
          <Fade>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign In
            </button>
          </Fade>
        </form>
      </Container>
    </SignupContainer>
  );
};

export default Sigunp;
