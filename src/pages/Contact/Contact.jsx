import React from "react";
import { Container } from "../../styles/GlobalComponents";
import { ContactContainer, Divider } from "./Contact.styles";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <ContactContainer>
      <Helmet>
        <title>Guitar Lessons | Contact</title>
      </Helmet>
      <Container>
        <h3 className="title">CONTACT US</h3>
        <Divider />
        <form action="">
          <Fade bottom>
            <fieldset>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                id="name"
              />
            </fieldset>
          </Fade>
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
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                style={{ resize: "none" }}
              />
            </fieldset>
          </Fade>
          <Fade>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Send Message
            </button>
          </Fade>
        </form>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
