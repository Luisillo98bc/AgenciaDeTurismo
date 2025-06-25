import React, {useEffect} from "react";
import "./Home.css";
import Video from "../../Assets/Video.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";

import imagen1 from "../../Assets/imagen1.jpg";
import imagen2 from "../../Assets/imagen2.jpg";
import imagen3 from "../../Assets/imagen3.jpg";
import imagen4 from "../../Assets/imagen4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">Mira el viaje de tus sueños con nosotros</h1>
        <p data-aos="fade-up">Descubre el valle del mantaro, aventura natural. La vida es corta como para un viaje</p>
        <button className="btn" data-aos="fade-up">Empezar <AiOutlineSwapRight className="icon"/></button>
      </div>
      <div className="polularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={imagen1} alt="imagen" />
            <img src={imagen2} alt="imagen" />
            <img src={imagen3} alt="imagen" />
            <img src={imagen4} alt="imagen" />
          </div>
        </div>
      </div>
    </div>
  );
}; 
