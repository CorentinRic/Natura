import React from 'react'
import './Calendar.css'
import image from '../../assets/images/dan-burton-RZ9h94Q4LhA-unsplash.webp'
import Accordion from '../../components/Accordion/Accordion'
import data from '../../datas/DataCalendar'

const datas = [
    {
        id : "1C",
        title : "Évènements",
        alt : "Évènements lors de travaux pratique.",

    }
]

function Calendar() {
  return (
    <section id='calendar'>
        {
        datas.map(({id, alt, title}) => {
          return (
            <div key={id} className='calendar-container'>
                <div className="box-calendar">
                    <div className="calendar-container-collapse">
                        <div className="calendar-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="container-collapse">
                            {/* Accordéons */} 
                            {data.map((data) => {
                                return (
                                <Accordion
                                key={data.id} 
                                content={data.content} 
                                title={data.title} 
                                image={data.image} 
                                alt={data.alt} 
                                adress={data.address}
                                city={data.city}
                                opening={data.opening}
                                />
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="calendar-img">
                        <img src={image} alt={alt} />
                    </div>
                </div>
            </div>
            )
        })
        }
    </section>
  )
}

export default Calendar