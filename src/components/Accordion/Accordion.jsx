import React, {useState} from 'react'
import './Accordion.css'
import {IoIosArrowUp} from 'react-icons/io'

const Accordion = ({image, alt, content, title, adress, city, opening }) => {

  /* Effet collapse */
  const [activeCollapse, setActiveCollapse] = useState(false)

  const handleToggle = e => {
    setActiveCollapse(!activeCollapse)
  }

  return (

        <article className={`accordion ${activeCollapse && "activeCollapse"}`}>
            <div className="accordion__title" onClick={handleToggle}>
                <h2 className='accordion__title-h2'>{title}</h2>
                <span className='accordion__icon'><IoIosArrowUp /></span>
            </div>
            <div className="accordion__content">
                <div className="accordion__content-img">
                    <img src={image} alt={alt} />
                </div>
                <p className="accordion__content-p">{content}</p>
                <div className="accodion__content-infos">
                    <ul className='accordion__adress btn-background'>
                        <li>{adress}</li>
                        <li>{city}</li>
                    </ul>
                    <p className='accordion__opening btn-background'>{opening}</p>
                </div>
            </div>
        </article>
  )
}

export default Accordion