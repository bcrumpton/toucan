import React, { useContext } from 'react'
import { CartContext } from '../components/CartContext'

export default function Product({ imgSrc, imgAlt, stars, title, price }) {
    const [cart, setCart] = useContext(CartContext);


    const addToCart = () => {
      setCart(prevCart => [...prevCart, {
        imgSrc,
        imgAlt,
        stars,
        title,
        price
      }])
    }

    return (
      <div className="product">
        <img className="product__img" src={imgSrc} alt={imgAlt} />
        <div className="product__stars">
          {Array(stars)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="star" key={i}>
                ⭐
              </span>
            ))}
        </div>
        <h3 className="product__title">{title}</h3>
        <p className="product__price">{price}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    );
  }
  