import "./App.scss";
import PreNav from "./components/preNav/preNav";
import Nav from "./components/Nav/Nav";
import Card from "./components/Card/Card";
import ContactUs from "./components/ContactUs/ContactUs";
export default function App() {
  return (
    <div>
      <PreNav />
      <Nav />
      <Card />
      <ContactUs />
    </div>
  );
}
