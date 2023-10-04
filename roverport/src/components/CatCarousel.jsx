import React from 'react';
import { Carousel } from 'react-bootstrap';
import gato1 from '../assets/gato1.jpg';
import gato2 from '../assets/gato2.jpg';
import gato3 from '../assets/gato3.jpg';

const CatCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gato1}
          alt="Gato 1"
        />
        <Carousel.Caption>
          <h3>Rover</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gato2}
          alt="Gato 2"
        />
        <Carousel.Caption>
          <h3>Rover</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gato3}
          alt="Gato 3"
        />
        <Carousel.Caption>
          <h3>Rover</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CatCarousel;