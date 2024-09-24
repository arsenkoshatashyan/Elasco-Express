import "./App.scss";
import Nav from "./components/Nav/Nav";
import PreNav from "./components/PreNav/PreNav";
import Logistic from "./components/Logistic/Logistic";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Service from "./components/Service/Service";
import ContactUs from "./components/ContactUs/ContactUs";
import Result from "./components/Result/Result";

export default function App() {
  return (
    <div>
      <PreNav />
      <Nav />
      <Logistic />
      <About />
      <Card />
      <Service />
      <ContactUs />
      <Result />
    </div>
  );
}
