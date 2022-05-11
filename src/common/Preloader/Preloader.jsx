import React from 'react'
import module from './Preloader.module.css'
import preloader from '../../images/Winter.gif'

let Preloader = (props) => {
  return (
    <div className={module.preloader}>
      <img src={preloader} />
    </div>
  )
}

export default Preloader
