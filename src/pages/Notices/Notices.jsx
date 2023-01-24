import React from 'react'
import './Notices.css'
import datas from '../../datas/dataNotices.json'

function Notices() {
  return (
    <section className='notices'>
        <main className="notices-container">
            <h1 className='notices-title'><span>Mentions</span> <i>Légales</i></h1>
            <div className="notices-content">
                {datas.map((data => {
            return (
                <div className="notices-box" key={data.id}>
                    <h2>{data.name}</h2>
                    {Array.isArray(data.content) ? (
                        <ul className="notices-list">
                        {data.content.map((content, index) => (
                            <li key={index}>
                            {content}
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <p className="notices-content-p">{data.content}</p>
                    )}
                </div>
            )
        }
        ))}
            </div>
        </main>
    </section>
  )
}

export default Notices