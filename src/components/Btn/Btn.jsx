import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './Btn.css'

function Btn({ link, btn }) {
  return (
    <HashLink className='btn' to={link}>{btn}</HashLink>
  )
}

export default Btn