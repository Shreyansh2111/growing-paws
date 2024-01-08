import React from 'react';
import { i1, i2, i3 } from '../images';

// import { CarouselStyle } from '../cssfiles/Carousel.css';

export default function Carousel() {
  return (
    <>
      <div
         className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner' style={{ height: '37rem' }}>
          <div className='carousel-item active' data-bs-interval='3000'>
            <img src={i1} className='d-block w-100' alt='' />
          </div>
          <div className='carousel-item' data-bs-interval='3000'>
            <img src={i2} className='d-block w-100' alt='' />
          </div>
          <div className='carousel-item' data-bs-interval='3000'>
            <img src={i3} className='d-block w-100' alt='' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleInterval'
          data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          {/* <span className='visually-hidden'>Previous</span> */}
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleInterval'
          data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          {/* <span className='visually-hidden'>Next</span> */}
        </button>
      </div>
    </>
  );
}
