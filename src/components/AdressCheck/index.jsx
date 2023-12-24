import React from 'react'
import css from './style.module.css'
const AdressCheck = () => {
  return (
    <div className='container'>
        <div className={css.adress__wrapper}>
            <h2 className={css.adress_title}>Перевірити адресу</h2>

                <form className={css.adress__form}>
                <label className={css.adress__label}> 
                <input className={css.adress__input} type="text" placeholder='Адреса'/>
                </label>
                <button className={css.adress__submit}>Перевірити</button>
                </form>
        </div>
    </div>
  )
}

export default AdressCheck;