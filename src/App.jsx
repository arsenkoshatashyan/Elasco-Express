// import "./App.scss";
// import Nav from "./components/Nav/Nav";
// import PreNav from "./components/PreNav/PreNav";
// import Logistic from "./components/Logistic/Logistic";
// import About from "./components/About/About";
// import Card from "./components/Card/Card";
// import Service from "./components/Service/Service";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import { Route, Routes } from "react-router-dom";

// export default function App() {
//   return (
//     <div>
//       <Routes>
//         <Route element={<Nav />}>
//           <Route path="/" />
//           <Route path="/about" element={<About />} />
//         </Route>
//       </Routes>
//       <PreNav />
//       <Nav />
//       <Logistic />
//       <About />
//       <Card />
//       <Service />
//       <ContactUs />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PreNav from "./components/PreNav/PreNav";
import Logistic from "./components/Logistic/Logistic";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Service from "./components/Service/Service";
import ContactUs from "./components/ContactUs/ContactUs";
import Result from "./components/Result/Result";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


export default function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <div>
      {isHomePage && (
        <>
          <Logistic />
          <About />
          <Card />
          <Service />
          <ContactUs />
          <Result />
          <Contact />
        </>
      )}

      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
