import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Sigunp from "./pages/Signup/Signup";
import PageNotFound from "./pages/404/404";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Sigunp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
