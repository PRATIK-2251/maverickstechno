import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import "./Home.css";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <div className="container-fluid p-0 main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
