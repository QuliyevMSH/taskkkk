import React from 'react'
import style from './CardSec.module.css'

const CardSec = ({item}) => {
  return (
    <div>
      <div className={style.cards}>
            <div className={style.card}>
                <img src={item.thumbnail} alt="image" />
                <p className={style.hoodie}>{item.title}</p>
                <div className={style.numbers}>
                    <span>{item.rating}</span>
                    <div className={style.heart}>
                        <p>$ <span> {item.price}</span></p>
                    </div>
                </div>
                <p className={style.comment}>{item.description}</p>
                <div className={style.buttons}>
                    <button className={style.cartButton}>Cart</button>
                    <button className={style.viewButton}>View</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardSec
