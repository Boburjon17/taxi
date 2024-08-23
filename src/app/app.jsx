
import "./app.scss";
import Navbar from '../navbar/navbar';
import Main from '../main/main';
import Afzallik from '../afzallik/afzallik';
import Boshqaruv from '../boshqaruv-dastur/boshqaruv';
import Fikr from '../fikrlar/fikr';
import Footer from '../footer/footer';
import DasturF from "../foydalnuvchi dastur/dastur-f";
import DasturH from "../haydovchi dastur/dastur-h";
import Accordionn from "../FAQ/accordion";
import { useEffect, useState } from "react";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [
    <Main />,
    <Afzallik />,
    <DasturF />,
    <DasturH />,
    <Boshqaruv />,
    <Fikr />,
    <Accordionn />,
    <Footer />,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll(".section");
      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="scrol">
        <div className="sectionn" id="nav">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
            />
          ))}
        </div>
        <div className="content">
          {sections.map((section, index) => (
            <div id={`section${index + 1}`} key={index} className="section">
              {section}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
