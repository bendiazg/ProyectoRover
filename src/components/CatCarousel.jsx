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
                  <img src={boardingIcon} alt="" />
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