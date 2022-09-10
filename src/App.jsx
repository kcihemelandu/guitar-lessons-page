import React from "react";
import Components from "./Components";
import ThemeContextProvider from "./contexts/ThemeContext";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Components />
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
