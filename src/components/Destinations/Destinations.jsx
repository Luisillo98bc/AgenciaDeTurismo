import React, {useEffect} from "react";
import "./Destinations.css";
import { MdLocationPin } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

import imagen1 from "../../Assets/imagen1.jpg";
import imagen2 from "../../Assets/imagen2.jpg";
import imagen3 from "../../Assets/imagen3.jpg";
import imagen4 from "../../Assets/imagen4.jpg";
import imagen5 from "../../Assets/imagen5.jpg";
import imagen6 from "../../Assets/imagen6.jpg";
import imagen7 from "../../Assets/imagen7.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const destinations = [
  {
    id: 1,
    imagen: imagen1,
    name: "Parke de la Identidad Huanca",
    location: "Huancayo",
    rating: 4.6,
  },
  {
    id: 2,
    imagen: imagen2,
    name: "Laguna de Paca",
    location: "Jauja",
    rating: 4.0,
  },
  {
    id: 3,
    imagen: imagen3,
    name: "Aguas sulfurosas selva central",
    location: "Oxapampa",
    rating: 5.0,
  },
  {
    id: 4,
    imagen: imagen4,
    name: "Nevado de Huaytapallana",
    location: "Huancayo",
    rating: 4.2,
  },
  {
    id: 5,
    imagen: imagen5,
    name: "Virgen de la Inmaculada Concepción",
    location: "Concepción",
    rating: 4.9,
  },
  {
    id: 6,
    imagen: imagen6,
    name: "Cristo blaco 3 de diciembre",
    location: "3 de diciembre",
    rating: 4.2,
  },
  {
    id: 7,
    imagen: imagen7,
    name: "Piscigranja de Ingenio",
    location: "Ingenio",
    rating: 4.7,
  },
];

export const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle" data-aos="fade-up">
          <span className="redText">Explore ahora</span>
          <h3>Encuentra el destino perfecto para tu viaje</h3>
          <p>Llena los campos para encontrar el destino de tus sueños</p>
        </div>
        <div className="searchField grid" data-aos="fade-up">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>
          <div className="inputField flex">
            <BsCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Location" />
          </div>
          <button className="btn flex">
            <BiSearchAlt className="icon" />
            Buscar
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">Todo</li>
            <li>Recomendado</li>
            <li>Playas</li>
            <li>Parques</li>
            <li>Naturaleza</li>
            <li>Montañas</li>
          </ul>
        </div>
        <div className="destinationContainer grid" >
          {destinations.map((destiantion) => {
            return (
              <div className="singleDestination" key={destiantion.id}>
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destiantion.imagen} alt="Destination 1" />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destiantion.name}</span>
                      <p className="flex">
                        <MdLocationPin className="icon" />
                        {destiantion.location}
                      </p>
                    </div>
                    <span className="rating">{destiantion.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
