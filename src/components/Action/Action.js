
export const addtocart = (product) => ({
    type: "Add_to_cart",
    payload: product
})

export const deletecart = (product) => ({
    type: "Delete_cart",
    payload: {
        product: product,
        quantity: product.quantity // Include the quantity of the product
    }
})

export const increaseQuantity = (product) => ({
    type: 'INCREASE_QUANTITY',
    payload: product
});

export const decreaseQuantity = (product) => ({
    type: 'DECREASE_QUANTITY',
    payload: product
});

export const setCart = (cart) => ({
    type: "SET_CART",
    payload: cart,
});