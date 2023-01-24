import React from 'react'
import './Banner.css'
import Btn from '../Btn/Btn'

const datas = [
  {
    id : "1B",
    title : "Protégeons notre maison",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    btnlink : "#contact",
    btn : "Nous rejoindre ?"
  }
]

function Banner() {
  return (
    <div className="banner">
    {
      datas.map(({id, title, subtitle, btnlink, btn}) => {
        return (
          <div key={id} className="banner-container">
            <div className="banner-title">
              <h1>{title}</h1>
            </div>
            <span className='banner-line'></span>
            <div className="banner-subtitle">
              <h2>{subtitle}</h2>
            </div>
            <Btn
            link= {btnlink}
            btn= {btn}
            />
          </div>
        )
        
      })
    }
    </div>
  )
}

export default Banner