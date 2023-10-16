import React, { useState, useEffect, useMemo } from 'react';
import { Carousel } from 'react-bootstrap';
import "./CatCarousel.css"
import gato1 from '../assets/images/gato1.jpg';
import gato2 from '../assets/images/gato2.jpg';
import gato3 from '../assets/images/gato3.jpg';
import trainingIcon from '../assets/images/trainingIcon.svg';
import boardingIcon from '../assets/images/boardingIcon.svg';
import sittingIcon from '../assets/images/sittingIcon.svg';
import visitIcon from '../assets/images/visitIcon.svg';
import careIcon from '../assets/images/careIcon.svg';
import walkingIcon from '../assets/images/walkingIcon.svg';



const CatCarousel = () => {

  const [index, setIndex] = useState(1);
  const images = useMemo(() => [gato1, gato2, gato3], []);  // Lista de imagenes de carrusel

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 10000); // tiempo para cambio entre imagenes en ms

    return () => {
      clearInterval(interval);
    };

  }, [index, images]);

  return (
    <div className='carouselContainer'>
      <Carousel className='Carousel' indicators={false} controls={false} activeIndex={index} onSelect={handleSelect}>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="d-block w-100" src={image} alt={`Imagen ${i + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className='menuTittle'>
        <h1>Loving pet care in your neighborhood™</h1>
        <h2>Book trusters sitters and dog walkers</h2>
      </div>
      <div className='servicesMenuContainer'>
        <div className='servicesMenuHead'>
          <h6>I'm looking for service for my:</h6>
          <div className="form-check form-check-inline">
            <input className="form-check-input my-custom-checkbox" type="checkbox"/>
            <label className="form-check-label" for="inlineCheckbox1">Dogs</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input my-custom-checkbox" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label className="form-check-label" for="inlineCheckbox2">Cats</label>
          </div>
        </div>
        <div className='servicesMenuBody'>
          <div>
            <div className='hContainer'>
              <div className='hContainerTittle1'>
                <h6>For When You're Away</h6>
              </div>
              <div className='hContainerTittle2'>
                <h6>For When You're At Work</h6>
              </div>
            </div>
            <div className='serviceContainer'>
              <div className='serviceCardContainer'>
                <div className='serviceCard'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#555" viewBox="0 0 32 32">
                  <path d="M22 17v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3h-3v2H9v-2H7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2v-9h2v9h14v-9h2v9h2a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1h-2v2h-2v-2h-3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002zM7 15h22a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3zm7-2h-2v-2a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2zm2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h-4z"></path>
                </svg>
                  <div>Boarding</div>
                </div>
              </div>
              <div className='serviceCardContainer'>
                <div className='serviceCard'>
                  <img src={sittingIcon} alt="" />
                  <div>House Sitting</div>
                </div>
              </div>
              <div className='serviceCardContainer'>
                <div className='serviceCard'>
                  <img src={visitIcon} alt="" />
                  <div>Drop-In Visits</div>
                </div>
              </div>
              <div className='serviceCardContainer'>
                <div className='serviceCard'>
                  <img src={careIcon} alt="" />
                  <div>Doggy Day Care</div>
                </div>
              </div>
              <div className='serviceCardContainer'>
                <div className='serviceCard'>
                  <img src={walkingIcon} alt="" />
                  <div>Dog Walking</div>
                </div>
              </div>
            </div>
          </div>
        </div>  
        <div className='servicesMenuFooter'>  
          <div>
            <img src={trainingIcon} alt="" />
          </div>
          <div className='trainingCard'>
            <h6>Dog training</h6>
            <p>1-1 virtual dog training through GoodPup, the newest member of the Rover family.</p>
          </div>
          <a className='linkCard' href="https://www.rover.com/dog-training/" target="_blank" rel="noreferrer">Start a free trial</a>
        </div>
      </div>
    </div>

  );
};

export default CatCarousel;