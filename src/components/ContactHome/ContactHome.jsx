import Contact from "../Contact/Contact";
import ContactHomeScroll from "../ContactHomeScroll/ContactHomeScroll";
import ContactUs from "../ContactUs/ContactUs";
import Result from "../Result/Result";

export default function ContactHome() {
  return (
    <div>
      <ContactHomeScroll/>
      <ContactUs />
      <Result />
      <Contact />
    </div>
  );
}
