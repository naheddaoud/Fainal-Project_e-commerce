import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export let CartContext = createContext();

export default function CartContextProvider(props) {
    // State to manage the number of cart items
    const [numOfCartItems, setNumOfCartItems] = useState(0);

    // Function to fetch cart items
    function getCartItems() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/cart")
            .then((response) => {
                // Update the number of cart items based on the received data
                setNumOfCartItems(response.data.numOfCartItems);
                return response;
            })
            .catch((error) => error);
    }

    // Function to add a product to the cart
    function addToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId })
            .then((response) => {
                // Update the number of cart items after adding
                setNumOfCartItems(response.data.numOfCartItems);
                return response;
            })
            .catch((error) => error);
    }

    // Function to remove a product from the cart
    function removeFromCart(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`)
            .then((response) => {
                // Update the number of cart items after removal
                setNumOfCartItems(response.data.numOfCartItems);
                return response;
            })
            .catch((error) => error);
    }

    // Function to update the quantity of a cart item
    function updateCartItemQuantity(productId, newQuantity) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count: newQuantity })
            .then((response) => {
                // Update the number of cart items after updating quantity
                setNumOfCartItems(response.data.numOfCartItems);
                return response;
            })
            .catch((error) => error);
    }

    // Use useEffect to fetch the number of cart items when the app loads
    useEffect(() => {
        getCartItems();
    }, []);

    return (
        <CartContext.Provider value={{ getCartItems, addToCart, removeFromCart, updateCartItemQuantity, numOfCartItems }}>
            {props.children}
        </CartContext.Provider>
    );
}
