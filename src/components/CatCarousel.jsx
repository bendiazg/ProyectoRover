import React, { useState, useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { Carousel } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import "./CatCarousel.css"
import gato1 from '../assets/images/gato1.jpg';
import gato2 from '../assets/images/gato2.jpg';
import gato3 from '../assets/images/gato3.jpg';
import trainingIcon from '../assets/images/trainingIcon.svg';



const CatCarousel = () => {

  const [index, setIndex] = useState(1);
  const images = useMemo(() => [gato1, gato2, gato3], []);  // Lista de imagenes de carrusel

  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSize, setSelectedSize] = useState(new Set());


  const handleServiceClick = (index) => {
    setSelectedService(index);
  };

  const handleSizeClick = (index) => {
    const newSelectedSize = new Set(selectedSize);

    if (newSelectedSize.has(index)) {
      newSelectedSize.delete(index);
    } else {
      newSelectedSize.add(index);
    }

    setSelectedSize(newSelectedSize);
  };

  const isSizeSelected = (index) => selectedSize.has(index);

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
            <img className="custom-carousel-image d-block w-100" src={image} alt={`Imagen ${i + 1}`} />
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
              <div className={`serviceCardContainer ${selectedService === 1 ? 'clicked' : ''}`}
              onClick={() => handleServiceClick(1)}>
                <div className='serviceCard'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M22 17v3a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3h-3v2H9v-2H7a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h2v-9h2v9h14v-9h2v9h2a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1h-2v2h-2v-2h-3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002zM7 15h22a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V18a3 3 0 0 1 3-3zm7-2h-2v-2a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2zm2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h-4z"></path>
                </svg>
                  <div>Boarding</div>
                </div>
              </div>
              <div className={`serviceCardContainer ${selectedService === 2 ? 'clicked' : ''}`}
              onClick={() => handleServiceClick(2)}>
                <div className='serviceCard'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M23.026 12H23v-.024l-5-4.615-10 9.23V30h2v-3a4 4 0 1 1 8 0v3h10V16.592L23.026 12zM30 15.716l1.678 1.55a1 1 0 0 1-1.356 1.469L30 18.438V32H16v-5a2 2 0 0 0-4 0v5H6V18.438l-.322.297a1 1 0 0 1-1.356-1.47L18 4.64l5 4.615V8.5A1.5 1.5 0 0 1 24.5 7h4A1.5 1.5 0 0 1 30 8.5v7.216zm-2-1.846V9h-3v2.1l3 2.77zM21 21h2v-3h-2v3zm4 0h1v2h-8v-2h1v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002z"></path>
                </svg>
                  <div>House Sitting</div>
                </div>
              </div>
              <div className={`serviceCardContainer ${selectedService === 3 ? 'clicked' : ''}`}
              onClick={() => handleServiceClick(3)}>
                <div className='serviceCard'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M23.026 12H23v-.024l-5-4.615-10 9.23V30h2v-3a4 4 0 1 1 8 0v3h10V16.592L23.026 12zM30 15.716l1.678 1.55a1 1 0 0 1-1.356 1.469L30 18.438V32H16v-5a2 2 0 0 0-4 0v5H6V18.438l-.322.297a1 1 0 0 1-1.356-1.47L18 4.64l5 4.615V8.5A1.5 1.5 0 0 1 24.5 7h4A1.5 1.5 0 0 1 30 8.5v7.216zm-2-1.846V9h-3v2.1l3 2.77zM21 21h2v-3h-2v3zm4 0h1v2h-8v-2h1v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3zM2.442 14C.81 14-.163 13.536.015 12.228c.05-.357.19-.676.459-1.153.017-.03.489-.836.631-1.099C1.676 8.924 1.97 8.01 1.97 7s-.293-1.924-.864-2.976c-.142-.263-.614-1.07-.631-1.1-.27-.476-.41-.795-.459-1.152C-.163.464.81 0 2.442 0c4.011 0 7 3.064 7 7s-2.989 7-7 7zm0-2c2.895 0 5-2.157 5-5s-2.105-5-5-5c-.068 0-.132 0-.19.002.115.198.477.82.612 1.069C3.579 4.39 3.969 5.606 3.969 7c0 1.394-.39 2.61-1.105 3.93-.135.249-.498.87-.613 1.068l.19.002z"></path>
                </svg>
                  <div>Drop-In Visits</div>
                </div>
              </div>
              <div className={`serviceCardContainer ${selectedService === 4 ? 'clicked' : ''}`}
              onClick={() => handleServiceClick(4)}>
                <div className='serviceCard'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M4.888 26.54A11.965 11.965 0 0 1 4 22c0-6.627 5.373-12 12-12s12 5.373 12 12c0 .282-.01.563-.029.84 1.924.122 2.853.16 4.029.16v2c-1.412 0-2.465-.052-5.102-.224-5.038-.329-7.498-.329-10.734.21-1.907.318-3.13.726-5.705 1.78C6.389 28.43 4.153 29 0 29v-2c1.94 0 3.412-.13 4.888-.46zm21.087-3.826c.016-.236.025-.474.025-.714 0-5.523-4.477-10-10-10S6 16.477 6 22c0 1.42.296 2.772.83 3.996a44.245 44.245 0 0 0 2.871-1.081c2.705-1.107 4.042-1.553 6.135-1.901 3.19-.532 5.643-.57 10.139-.3zM16 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zm14.83 10.866a1 1 0 0 1-.366 1.366l-2.598 1.5a1 1 0 0 1-1-1.732l2.598-1.5a1 1 0 0 1 1.366.366zm-29.33 0a1 1 0 0 1 1.366-.366L5.464 12a1 1 0 1 1-1 1.732l-2.598-1.5a1 1 0 0 1-.366-1.366zm28.571-7.159a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 0 1-1.414-1.414l4.95-4.95a1 1 0 0 1 1.414 0zm-28.253 0a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1-1.414 1.414l-4.95-4.95a1 1 0 0 1 0-1.414zm20.048.793a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 1 1-1.732-1l1-1.732a1 1 0 0 1 1.366-.366zm-12 0a1 1 0 0 1 1.366.366l1 1.732a1 1 0 0 1-1.732 1l-1-1.732A1 1 0 0 1 9.866 4.5zM30 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM2 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
                  <div>Doggy Day Care</div>
                </div>
              </div>
              <div className={`serviceCardContainer ${selectedService === 5 ? 'clicked' : ''}`}
              onClick={() => handleServiceClick(5)}>
                <div className='serviceCard'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M1.8 15.4a4 4 0 0 1 .8-5.6l4.6-3.45a3 3 0 0 1 3.6 0l4.6 3.45a4 4 0 1 1-4.8 6.4c-.64-.48-1.177-.7-1.6-.7-.423 0-.96.22-1.6.7a4 4 0 0 1-5.6-.8zM9 13.5c.91 0 1.84.38 2.8 1.1a2 2 0 1 0 2.4-3.2L9.6 7.95a1 1 0 0 0-1.2 0L3.8 11.4a2 2 0 1 0 2.4 3.2c.96-.72 1.89-1.1 2.8-1.1zM1.5 8C.672 8 0 7.105 0 6s.672-2 1.5-2S3 4.895 3 6s-.672 2-1.5 2zM6 5C4.895 5 4 3.88 4 2.5S4.895 0 6 0s2 1.12 2 2.5S7.105 5 6 5zm6 0c-1.105 0-2-1.12-2-2.5S10.895 0 12 0s2 1.12 2 2.5S13.105 5 12 5zm4.5 3c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zm-.7 22.4a4 4 0 0 1 .8-5.6l4.6-3.45a3 3 0 0 1 3.6 0l4.6 3.45a4 4 0 1 1-4.8 6.4c-.64-.48-1.177-.7-1.6-.7-.423 0-.96.22-1.6.7a4 4 0 0 1-5.6-.8zm4.4-.8c.96-.72 1.89-1.1 2.8-1.1.91 0 1.84.38 2.8 1.1a2 2 0 1 0 2.4-3.2l-4.6-3.45a1 1 0 0 0-1.2 0l-4.6 3.45a2 2 0 1 0 2.4 3.2zM15.5 23c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zm4.5-3c-1.105 0-2-1.12-2-2.5s.895-2.5 2-2.5 2 1.12 2 2.5-.895 2.5-2 2.5zm6 0c-1.105 0-2-1.12-2-2.5s.895-2.5 2-2.5 2 1.12 2 2.5-.895 2.5-2 2.5zm4.5 3c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z"></path>
                </svg>
                  <div>Dog Walking</div>
                </div>
              </div>
            </div>
            <div >
              <div className='hContainer marginTop'>
                <div className='hContainerTittle1'>
                  <h6>Boarding near</h6>
                </div>
                <div className='hContainerTittle3'>
                  <h6>For these days</h6>
                </div>
              </div>
              <div className='inputContainer'>
                <div className='addressContainer'>
                  <input type="text" placeholder='Zip code or address' />
                </div>
                <div className='dateContainer'>
                  <div className='dropContainer'>
                    <DatePicker
                      className='dateInput'
                      showIcon
                      icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1B1F23" viewBox="0 0 32 32" class="DatePicker__StyledIcon-c3dx7l-0 ivxhfA"><path d="M8 0a1 1 0 0 1 1 1v5H7V1a1 1 0 0 1 1-1zm16 0a1 1 0 0 1 1 1v5h-2V1a1 1 0 0 1 1-1zM2 12v17a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12H2zm23-2v2h5V5a1 1 0 0 0-1-1h-2V2h2a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2v2H3a1 1 0 0 0-1 1v5h23zm-4-8v2H11V2h10z"></path></svg>}
                      isClearable 
                      dateFormat="dd/MM/yyyy" 
                      placeholderText="Drop off" 
                      selected={selectedDate} 
                      onChange={(date) => setSelectedDate(date)}
                    />
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                  <div className='pickContainer'>
                    <DatePicker 
                      className='dateInput'
                      showIcon
                      icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1B1F23" viewBox="0 0 32 32" class="DatePicker__StyledIcon-c3dx7l-0 ivxhfA"><path d="M8 0a1 1 0 0 1 1 1v5H7V1a1 1 0 0 1 1-1zm16 0a1 1 0 0 1 1 1v5h-2V1a1 1 0 0 1 1-1zM2 12v17a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V12H2zm23-2v2h5V5a1 1 0 0 0-1-1h-2V2h2a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2v2H3a1 1 0 0 0-1 1v5h23zm-4-8v2H11V2h10z"></path></svg>}
                      isClearable 
                      dateFormat="dd/MM/yyyy" 
                      placeholderText="Pick up" 
                      selected={selectedDate} 
                      onChange={(date) => setSelectedDate(date)} 
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='hContainer'>
                <h6>My Dog size</h6>
              </div>
              <div className='sizeContainer'>
                <div className={`sizeCardContainer ${isSizeSelected(1) ? 'clicked' : ''}`}
                onClick={() => handleSizeClick(1)}>
                  <div className='sizeCard'>
                    <div>Small</div> 
                    <div>0 - 15 lbs</div>
                  </div>
                </div>
                <div className={`sizeCardContainer ${isSizeSelected(2) ? 'clicked' : ''}`}
                onClick={() => handleSizeClick(2)}>
                  <div className='sizeCard'>
                    <div>Medium</div> 
                    <div>16 - 40 lbs</div>
                  </div>
                </div>
                <div className={`sizeCardContainer ${isSizeSelected(3) ? 'clicked' : ''}`}
                onClick={() => handleSizeClick(3)}>
                  <div className='sizeCard'>
                    <div>Large</div> 
                    <div>41 - 100 lbs</div>
                  </div>
                </div>
                <div className={`sizeCardContainer ${isSizeSelected(4) ? 'clicked' : ''}`}
                onClick={() => handleSizeClick(4)}>
                  <div className='sizeCard'>
                    <div>Giant</div> 
                    <div>101+ lbs</div>
                  </div>
                </div>
                <div className='buttonContainer'>
                  <button className='searchButton'>Search</button>
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