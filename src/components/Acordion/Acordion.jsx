import React, { useState } from 'react';
import './Acordion.css';

export const Acordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      question: "¿Qué es React?",
      answer: "React es una biblioteca de JavaScript para construir interfaces de usuario. Permite crear componentes reutilizables y manejar el estado de la aplicación de manera eficiente."
    },
    {
      question: "¿Cómo funciona el acordeón?",
      answer: "El acordeón muestra una lista de elementos donde solo uno puede estar expandido a la vez. Al hacer clic en un elemento, se expande para mostrar su contenido y los demás se contraen."
    },
    {
      question: "¿Qué es JSX?",
      answer: "JSX es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. React lo utiliza para describir cómo debería ser la interfaz de usuario."
    },
    {
      question: "¿Por qué usar SCSS con React?",
      answer: "SCSS es un preprocesador CSS que añade características como variables, anidamiento y mixins, lo que facilita la escritura y mantenimiento de estilos en aplicaciones React."
    }
  ];

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
          </button>
          <div
            className={`accordion-content ${activeIndex === index ? 'show' : ''}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
