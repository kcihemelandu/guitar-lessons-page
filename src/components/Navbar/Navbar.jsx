import React, { useEffect, useState } from "react";
import {
  NavBottom,
  NavBottomLink,
  NavLogo,
  NavTop,
  NavTopIcons,
  NavTopLink,
  NavTopLinks,
} from "./Navbar.styles";
import { BlueLogo, WhiteLogo } from "./../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkype,
  faFacebookF,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "@material-ui/icons";
import { Container } from "../../styles/GlobalComponents";

const Navbar = () => {
  const [hide, setHide] = useState(true);
  const [hideNav, setHideNav] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  window.addEventListener("resize", () => {
    window.innerWidth < 800 ? setHideNav(true) : setHideNav(false);
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
      setHide(true);
    } else {
      setHide(false);
    }
  });
  useEffect(() => {
    window.innerWidth < 800 ? setHideNav(true) : setHideNav(false);
    if (window.scrollY < 50) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, []);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: "999",
      }}
    >
      <NavTop style={!hide ? { display: "none" } : {}}>
        <Container>
          <NavLogo>
            <a href="/">
              <img src={`${BlueLogo}`} alt="Logo" />
            </a>
          </NavLogo>
          <NavTopLinks style={hideNav ? { display: "none" } : {}}>
            <NavTopLink href="https://www.skype.com/guitarlessons">
              <FontAwesomeIcon icon={faSkype} />
              <span>guitarlessons</span>
            </NavTopLink>
            <NavTopLink href="tel:+2349035810428">
              <FontAwesomeIcon icon={faPhone} />
              <span>090 358 104 28</span>
            </NavTopLink>
            <NavTopIcons>
              <NavTopLink href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebookF} />
              </NavTopLink>
              <NavTopLink href="https://www.facebook.com">
                <FontAwesomeIcon icon={faTwitter} />
              </NavTopLink>
              <NavTopLink href="https://www.facebook.com">
                <FontAwesomeIcon icon={faGooglePlus} />
              </NavTopLink>
            </NavTopIcons>
          </NavTopLinks>
        </Container>
      </NavTop>
      <NavBottom>
        <Container>
          {!hideNav ? (
            <>
              <NavLogo style={hide ? { display: "none" } : {}}>
                <a href="/">
                  <img src={`${WhiteLogo}`} alt="Logo" />
                </a>
              </NavLogo>
              <NavBottomLink
                onClick={() => {
                  scrollToTop();
                  setNavOpen(false);
                }}
                to={"/"}
              >
                HOME
              </NavBottomLink>
              <NavBottomLink
                onClick={() => {
                  scrollToTop();
                  setNavOpen(false);
                }}
                to={"/about"}
              >
                ABOUT
              </NavBottomLink>
              <NavBottomLink
                onClick={() => {
                  scrollToTop();
                  setNavOpen(false);
                }}
                to={"/contact"}
              >
                CONTACT
              </NavBottomLink>
              <NavBottomLink
                onClick={() => {
                  scrollToTop();
                  setNavOpen(false);
                }}
                to={"/signup"}
              >
                SIGNUP
              </NavBottomLink>
            </>
          ) : (
            <>
              <NavLogo style={hide ? { display: "none" } : {}}>
                <a href="/">
                  <img src={`${WhiteLogo}`} alt="Logo" />
                </a>
              </NavLogo>
              <div className={`links ${!navOpen ? "closed" : "open"}`}>
                <NavBottomLink
                  onClick={() => {
                    scrollToTop();
                    setNavOpen(false);
                  }}
                  to={"/"}
                >
                  HOME
                </NavBottomLink>
                <NavBottomLink
                  onClick={() => {
                    scrollToTop();
                    setNavOpen(false);
                  }}
                  to={"/about"}
                >
                  ABOUT
                </NavBottomLink>
                <NavBottomLink
                  onClick={() => {
                    scrollToTop();
                    setNavOpen(false);
                  }}
                  to={"/contact"}
                >
                  CONTACT
                </NavBottomLink>
                <NavBottomLink
                  onClick={() => {
                    scrollToTop();
                    setNavOpen(false);
                  }}
                  to={"/signup"}
                >
                  SIGNUP
                </NavBottomLink>
              </div>
              <div className="hamburger">
                <Menu
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                />
              </div>
            </>
          )}
        </Container>
      </NavBottom>
    </nav>
  );
};

export default Navbar;
