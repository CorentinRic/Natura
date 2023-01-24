import React, {useState} from 'react'
import './Carousel.css'
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'

const Carousel = ({slides}) => {

  /* Effet du Carrousel. */
  const [current, setCurrent] = useState(0);
  const length = slides.length

  /* Prochain slide. */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  /* Slide précédent. */
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div  key={slides.id} className="carousel">
      {slides.map((picture, index) => {
        return (
          <div key={index}
          className={index === current ? "carousel__active-img" : "carousel__inactive-img"}>
            {index === current && (
              <img className="carousel__img" src={picture} alt='Travaux réalsiés.' />
            )}
          </div>
        )
      }
      )}
      {length > 1 ? (
        <>
          <div className="carousel__previous" onClick={prevSlide}>
            <span className="carousel__previous-icon"><RiArrowLeftSLine /></span>
          </div>
          <div className="carousel__next" onClick={nextSlide}>
            <span className="carousel__previous-icon"><RiArrowRightSLine /></span>
          </div>
          <p className="indicatif">{current === length - 0 ? 1 : current + 1}/{length}</p>
        </>
      ) : null}
    </div>
  )
}

export default Carousel