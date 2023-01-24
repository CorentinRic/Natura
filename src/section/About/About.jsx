import React from 'react'
import './About.css'
import Asso from '../../assets/images/arthur-poulin-NhU0nUR7920-unsplash.webp'

const datas = [
    {
        id : "1A",
        alt : "Association",
        title : "Qui sommes nous ?",
        content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        
    }
]

const About = () => {

  return (
    <section id="about">
        {
        datas.map(({id, alt, title, content}) => {
          return (
            <div key={id} className="container container-about">
                <div className="box">
                    <div className="about-img">
                        <img src={Asso} alt={alt} />
                    </div>
                </div>
                <div className="box">
                    <div className="about-container-content">
                        <h2>{title}</h2>
                        <div className="about-content">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
        }

    </section>
  )
}

export default About