import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container } from "../../styles/GlobalComponents";
import { NotFoundContainer } from "./404.styles";

const PageNotFound = () => {
  const { pathname } = useLocation();
  return (
    <NotFoundContainer>
      <Container>
        <h1 className="error">404 Error</h1>
        <h1>The route {pathname} is Not Found</h1>
        <p>
          You can go to the <Link to="/">Home Page</Link>
        </p>
      </Container>
    </NotFoundContainer>
  );
};

export default PageNotFound;
