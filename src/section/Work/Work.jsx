import React from 'react'
import data from '../../datas/DataWork'
import Carousel from '../../components/Carousel/Carousel'
import './Work.css'

const datas = [
  {
    id : "1W",
    title : "Nos actions",
    strong : "Protection :",
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iusto quasi aliquam impedit nisi, rerum quas culpa vel facere saepe nostrum tempore porro ratione eos iure sunt soluta a ad."
  }
]

const Work = () => {

  return (
    <section id='work'>
      {
        datas.map(({id, title, strong, content}) => {
          return (
              <div key={id} className="container work-container">
                  <h2>{title}</h2>
                  <p><strong>{strong}</strong> {content}</p>
              {data.map((data) => {
                  return (
                    <Carousel key={data.id}
                    slides={data.pictures}
                    />
                  )
                  }
                  )}
              </div>
          )
      })
      }
    </section>
  )
}

export default Work