import { Route, Routes, useLocation } from "react-router-dom";
import Info from "./components/Info/Info";
import Nav from "./components/Nav/Nav";
import Logistic from "./components/Logistic/Logistic";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Service from "./components/Service/Service";
import ContactUs from "./components/ContactUs/ContactUs";
import Result from "./components/Result/Result";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutHome from "./components/AboutHome/AboutHome";
import ServicesHome from "./components/ServicesHome/ServicesHome";
import ContactHome from "./components/ContactHome/ContactHome";
import NewsHome from "./components/NewsHome/NewsHome";
import NewsPage from "./components/NewsPage/NewsPage";
import Sliders from "./components/Sliders/Sliders";





export default function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
   

      
      <div>
      <Info />
      <Nav />
      {isHomePage && (
        <>
          <Logistic />
          <About />
          <Card />
          <Service />
          <ContactUs />
          <Result />
          <Sliders />
          <Contact />
        </>
      )}
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<AboutHome />} />
        <Route path="/services" element={<ServicesHome />} />
        <Route path="/contact-us" element={<ContactHome />} />
        <Route path="/news" element={<NewsHome />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>

  
    
  );
}
