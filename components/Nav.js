import React, { useContext } from 'react'
import Link from 'next/link'
import { CartContext } from "../components/CartContext"

function Nav() {
    const [cart] = useContext(CartContext);
    console.log(cart)
    return (
        <div className="navbar">
          <div className="navbar__left">
            <h1>Toucan.io</h1>
            <h2>The hottest items money can buy</h2>
          </div>
          <div className="navbar__right">
            <Link href="/checkout">Cart</Link>
            <div className="navbar__cart">{cart.length}</div>
          </div>
        </div>
    )
}

export default Nav
