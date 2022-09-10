import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../styles/Variables";

export const NavTop = styled.div`
  background-color: ${({ theme }) => theme.bgTertiary};
  height: 90px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const NavTopLinks = styled.nav`
  display: flex;
  align-items: center;
  & > * {
    border-right: 1px solid currentColor;
    padding: 0 0.5rem;
  }
  & > *:first-child {
    border-left: 1px solid currentColor;
  }
`;
export const NavTopLink = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.link};
  text-decoration: none;
  span {
    margin-left: 0.3rem;
  }
`;
export const NavTopIcons = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.3rem;
  }
`;

export const NavLogo = styled.figure`
  width: 153px;
  height: 50px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 123px;
      height: 47.86px;
    }
  }
`;

export const NavBottom = styled.div`
  height: 80px;
  background-color: ${colors.primary};
  position: relative;
  left: -1px;
  /* border: 1px solid red; */
  & > div {
    border-left: 1px solid white;
    border-right: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > * {
      flex: 1;
      height: 100%;
    }
  }
  .links {
    position: absolute;
    width: 100vw;
    display: flex;
    border-top: 1px solid white;
    background: ${colors.primary};
    height: 50vh;
    left: -1px;
    display: flex;
    flex-direction: column;
    z-index: -1;
    transition: top 0.5s ease;

    &.closed {
      top: -300px;
    }
    &.open {
      top: 79px;
    }
    a {
      width: 100%;
      flex: 1;
    }
  }
  .hamburger {
    color: white;
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
    padding-right: 3rem;
    & > * {
      cursor: pointer;
    }
  }
`;

export const NavBottomLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active,
  &:hover {
    color: ${colors.activeLink};
  }
`;
