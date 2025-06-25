import React from "react";
import { useState, useEffect } from "react";
import "./Questions.css";
import { Accordions } from "./Acordions";

import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
export const Questions = () => {
  const [active, setActive] = useState(
    "¿puedo elegir el correcto paquete de viaje?"
  );
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="questions section container">
      <div className="secHeading" data-aos="fade-up">
        <h3>Preguntas frecuentes</h3>
      </div>
      <div className="secContainer grid" >
        <div className="accordion grid" >
          <Accordions
            title="¿puedo elegir el correcto paquete de viaje?"
            desc="Considera tu intereses, presupuesto y duración del viaje. Investiga diferentes destinos y actividades. Consulta con agentes de viajes o utiliza plataformas en línea para comparar opciones. Lee reseñas y testimonios de otros viajeros. Asegúrate de que el paquete incluya lo que deseas, como alojamiento, transporte y actividades. Verifica las políticas de cancelación y cambios. Si es posible, contacta a la agencia para aclarar dudas antes de tomar una decisión."
            active={active}
            setActive={setActive}
          />
          <Accordions
            title="viajes seguros"
            desc="Considera tu intereses, presupuesto y duración del viaje. Investiga diferentes destinos y actividades. Consulta con agentes de viajes o utiliza plataformas en línea para comparar opciones. Lee reseñas y testimonios de otros viajeros. Asegúrate de que el paquete incluya lo que deseas, como alojamiento, transporte y actividades. Verifica las políticas de cancelación y cambios. Si es posible, contacta a la agencia para aclarar dudas antes de tomar una decisión."
            active={active}
            setActive={setActive}
          />
          <Accordions
            title="¿puedo "
            desc="Considera tu intereses, presupuesto y duración del viaje. Investiga diferentes destinos y actividades. Consulta con agentes de viajes o utiliza plataformas en línea para comparar opciones. Lee reseñas y testimonios de otros viajeros. Asegúrate de que el paquete incluya lo que deseas, como alojamiento, transporte y actividades. Verifica las políticas de cancelación y cambios. Si es posible, contacta a la agencia para aclarar dudas antes de tomar una decisión."
            active={active}
            setActive={setActive}
          />
          <Accordions
            title="viajes seguros 2"
            desc="Considera tu intereses, presupuesto y duración del viaje. Investiga diferentes destinos y actividades. Consulta con agentes de viajes o utiliza plataformas en línea para comparar opciones. Lee reseñas y testimonios de otros viajeros. Asegúrate de que el paquete incluya lo que deseas, como alojamiento, transporte y actividades. Verifica las políticas de cancelación y cambios. Si es posible, contacta a la agencia para aclarar dudas antes de tomar una decisión."
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos="fade-up">¿Tienes alguna pregunta especific</h4>
            <p data-aos="fade-up">
              por favor llenar el formulario abajo y nuestro equipo dedicado se
              pondra en contacto con usted lo mas pronto posible.{" "}
            </p>
          </div>
          <div className="formContent grid">
            <input type="email" placeholder="ingrese su correo electronico" data-aos="fade-up" />
            <textarea placeholder="ingrese su pregunta" id="" data-aos="fade-up"></textarea>
            <button className="btn" data-aos="fade-up">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
