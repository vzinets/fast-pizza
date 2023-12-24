import React from 'react'
import css from './style.module.css'

const PopUp = ({children}) => {

    const popupClose = () => {
        detailHendler();
      };
  return (
    <div className={css.popup}>
        <button className={css.popup__close} onClick = {popupClose}>X</button>
        {children}

    </div>
  )
}

export default PopUp