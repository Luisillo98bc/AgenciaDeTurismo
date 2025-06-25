import React, {useEffect} from 'react'
import './Middle.css'
import Aos from 'aos'
export const Middle = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="middle section">
      <div className="secContainer container">
        <div className="grid">
            <span className="flex" data-aos="fade-up">
              <h1>10</h1>
              <p>Mundos de experiencia</p>
            </span>
            <span className="flex" data-aos="fade-up">
              <h1>2K+</h1>
              <p>Destinos encontrados</p>
            </span>
            <span className="flex" data-aos="fade-up">
              <h1>10K</h1>
              <p>Recomendaciones</p>
            </span>
            <span className="flex" data-aos="fade-up">
              <h1>4.8</h1>
              <p>Aceptacion del cliente</p>
            </span>
        </div>
      </div>
    </div>
  )
}
