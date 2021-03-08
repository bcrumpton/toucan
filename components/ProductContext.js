import React, { useState, createContext } from 'react';

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [products, setProducts] = useState([
        {         
            "imgSrc" : "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro-Max/Pacific-Blue/Apple-iPhone-12-Pro-Max-Pacific-Blue-frontimage.png",
            "imgAlt" : "iPhone 12 Pro Max",
            "title" : "iPhone 12 Pro Max",
            "price" : "$1089.99",
            "stars" : 4
        },
        {  
            
            "imgSrc" : "https://c1.neweggimages.com/ProductImageCompressAll1280/14-126-457-V06.jpg",
            "imgAlt" : "ASUS ROG Strix 3080",
            "title" : "ASUS ROG Strix 3080",
            "price" : "$949.99",
            "stars" : 5
        },
        {   
            "imgSrc" : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh6kWgNBj4Jy8q2YvHWOu7ahJ7B-QVQml7B5oUh3OOjbnohzM",
            "imgAlt" : "Playstation 5",
            "title" : "Playstation 5",
            "price" : "$549.99",
            "stars" : 4
        },
        {
            "imgSrc" : "https://images-na.ssl-images-amazon.com/images/I/71gOkVA6-eL._AC_SX679_.jpg",
            "imgAlt" : "Apple iPad - Space Gray",
            "title" : "Apple iPad - Space Gray",
            "price" : "$479.99",
            "stars" : 5
        }
    ]);

    const [cart, setCart] = useState([]);

    return (
        <ProductContext.Provider value={[products, setProducts, cart, setCart]}>
            {props.children}
        </ProductContext.Provider>
    )
}