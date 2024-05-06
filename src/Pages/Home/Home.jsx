import React, { useContext } from 'react'
import { MainContext } from '../../Context/Context';
import CardSec from '../../Companents/CardSec/CardSec';
import style from './Home.module.css';

const Home = () => {


    const { products } = useContext(MainContext);





  return (
    <div>
      <div className={style.cards}>
                <div className={style.top}>
                    <span>POPULAR PRODUCTS</span>
                    <h1>Our Products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
                {products.map(item => <CardSec item={item} />)}
            </div>
    </div>
  )
}

export default Home
