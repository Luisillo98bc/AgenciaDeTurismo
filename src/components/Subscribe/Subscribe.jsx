import React, {useEffect} from 'react'
import './Subscribe.css'
import llamada from '../../Assets/portada1.png'

import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="subscribe section container">
      <div className="secContainer grid">
        <img src={llamada} alt="imagen" data-aos="fade-down"/>
        <div className="textDiv">
          <h4 data-aos="fade-up">la mejor forma de empezar tu viaje</h4>
          <p data-aos="fade-up">nuestro itinerario personalizado disponible para usted</p>
          <button className='btn' data-aos="fade-up">Start Here</button>
        </div>
      </div>
    </div>
  )
}
