import React, { useState, useEffect, useMemo } from 'react';
import { Carousel } from 'react-bootstrap';
import "./CatCarousel.css"
import gato1 from '../assets/images/gato1.jpg';
import gato2 from '../assets/images/gato2.jpg';
import gato3 from '../assets/images/gato3.jpg';



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
          <label>I'm looking for service for my:</label>
          <div class="form-check form-check-inline">
            <input class="form-check-input my-custom-checkbox" type="checkbox"/>
            <label class="form-check-label" for="inlineCheckbox1">Dogs</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input my-custom-checkbox" type="checkbox" id="inlineCheckbox2" value="option2"/>
            <label class="form-check-label" for="inlineCheckbox2">Cats</label>
          </div>
        </div>
        <div className='servicesMenuBody'>
          <p>Texto flotante</p>
        </div>  
        <div className='servicesMenuFooter'>  
          <p>Footer</p>
        </div>
      </div>
    </div>

  );
};
export default CatCarousel;