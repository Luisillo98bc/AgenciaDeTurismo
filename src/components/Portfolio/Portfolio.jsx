import React, {useEffect} from "react";
import "./Portfolio.css";
/* import icono1 from '../../Assets/icono1.png' */
/* import icono2 from '../../Assets/icono2.png' */
import portada41 from "../../Assets/portada41.png";
import icono3 from "../../Assets/icono3.png";

import Aos from "aos";
import "aos/dist/aos.css";
export const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portafolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="segHeading">
            <h3 data-aos="fade-up">Por que deberias escogernos</h3>
            <p data-aos="fade-up">
              Nosotros tenemos una gran experiencia en el sector de viajes y
              turismo, lo que nos permite ofrecerte las mejores opciones y
              precios del mercado.
            </p>
          </div>
          <div className="grid">
            <div className="singlePortafolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icono3} alt="" />
              </div>
              <div className="infor">
                <h4>Seguridad y Soporte</h4>
                <p>
                  Nos preocupamos por tu seguridad y bienestar durante todo el
                  viaje. Nuestro equipo está disponible 24/7 para brindarte
                  asistencia y resolver cualquier inconveniente que pueda
                  surgir.
                </p>
              </div>
            </div>
            <div className="singlePortafolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icono3} alt="" />
              </div>
              <div className="infor">
                <h4>diversidad de destinos turisticos</h4>
                <p>
                  Ofrecemos una amplia variedad de destinos turísticos, desde
                  playas paradisíacas hasta montañas majestuosas. No importa
                  cuál sea tu preferencia, tenemos el lugar perfecto para ti.
                </p>
              </div>
            </div>
            <div className="singlePortafolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icono3} alt="" />
              </div>
              <div className="infor">
                <h4>Soporte 24/7</h4>
                <p>
                  Nuestro equipo de atención al cliente está disponible las 24
                  horas del día, los 7 días de la semana, para resolver
                  cualquier duda o inconveniente que puedas tener durante tu
                  viaje.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent">
          <img src={portada41} alt="machu picchu" data-aos="fade-down"/>
        </div>
      </div>
    </div>
  );
};
