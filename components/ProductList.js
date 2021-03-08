import React, { useContext } from 'react'
import Product from "../components/Product"
import data from '../products.json'

function ProductList() {
    const products = data;

    return (
        <div className="products">
          {products.map(product => {
            return (
              <Product {...product} />
            )
          })}
        </div>
    )
}

export default ProductList
