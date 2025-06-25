import React, {useEffect} from 'react'
import './Reviews.css'
import { AiFillStar } from "react-icons/ai";
import persona1 from '../../assets/persona1.jpg'
import persona2 from '../../assets/persona2.jpg'
import persona3 from '../../assets/persona3.jpg'
import persona4 from '../../assets/persona4.jpg'
import persona5 from '../../assets/persona5.jpg'
import Aos from 'aos';
export const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv">
          <span className='redText' data-aos="fade-up">DE NUESTROS CLIENTES</span>
          <h3 data-aos="fade-up">historias reales de nuestro clientes satisfechos.</h3>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem omnis nisi provident perspiciatis odio quam! Corrupti neque distinctio nostrum iste fugiat molestiae maiores perspiciatis cumque, repellendus reiciendis dignissimos quibusdam quae.
          </p>
          <span className="stars flex" data-aos="fade-up">
             <AiFillStar className='icon'/>
             <AiFillStar className='icon'/>
             <AiFillStar className='icon'/>
             <AiFillStar className='icon'/>
             <AiFillStar className='icon'/>
          </span>
          <div className="clientsImage flex">
            <img src={persona1} alt="Cliente 1" data-aos="fade-up"/>
            <img src={persona2} alt="Cliente 2" data-aos="fade-up"/>
            <img src={persona3} alt="Cliente 3" data-aos="fade-up"/>
            <img src={persona4} alt="Cliente 4" data-aos="fade-up"/>
            <img src={persona5} alt="Cliente 5" data-aos="fade-up"/>
          </div>
        </div>
        <div className="imgDiv">
          <img src={persona3} alt="persona 3" data-aos="fade-down"/>
        </div>
      </div>
    </div>
  )
}
