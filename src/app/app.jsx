
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
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollImgRef = useRef(null); 
  const sectionRefs = useRef([]);
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

      // Taxi rasmini harakatlantirish
      if (scrollImgRef.current) {
        scrollImgRef.current.style.transform = `translateY(${activeIndex * 55}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const handleDotClick = (index) => {
    setActiveIndex(index); // Aktiv indexni yangilash
    sectionRefs.current[index].scrollIntoView({ behavior: "smooth" }); 
  };

  return (
    <div>
      <Navbar />
      <div className="scrol">
        <div className="sectionn" id="index">

          <div className="scroll-handle">
            <div className="scroll-dot">

            {sections.map((_, index) => (
                <div key={index} className="dot-big" >
                  <div
                    className={`dot ${index === activeIndex ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                  />
                </div>
              ))}
            </div>

           
       

           <div  className="scroll-img "  ref={scrollImgRef} >
            <img src="./public/taxi.png" alt="" />
            </div>

          </div>

        

        



        </div>
     
        <div className="content">
          {sections.map((section, index) => (
            <div id={`section${index + 1}`}
             key={index} 
             className="section"
             ref={(el) => (sectionRefs.current[index] = el)}
             >
              {section}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
