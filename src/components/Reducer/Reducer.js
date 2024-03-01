let initialstate = {
    cart: [],
    cartcount: 0
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "Add_to_cart":
            const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                const updatedCart = state.cart.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });
                return {
                    ...state,
                    cart: updatedCart,
                    cartcount: state.cartcount + 1 // Increment cart count
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                    cartcount: state.cartcount + 1 // Increment cart count
                };
            }

        case "Delete_cart":
            const updatedCart = state.cart.filter(item => item !== action.payload.product);
            return {
                ...state,
                cart: updatedCart,
                cartcount: state.cartcount - action.payload.quantity // Decrement cart count by the quantity of the product being deleted
            };

        case "INCREASE_QUANTITY":
            const increasedCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            return {
                ...state,
                cart: increasedCart,
                cartcount: state.cartcount + 1 // Increment cart count
            };

        case "DECREASE_QUANTITY":
            const decreasedCart = state.cart.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
                }
                return item;
            });
            return {
                ...state,
                cart: decreasedCart,
                cartcount: state.cartcount - 1 // Decrement cart count
            };

        case "SET_CART":
            return {
                ...state,
                cart: action.payload,
                cartcount: action.payload.reduce((total, item) => total + item.quantity, 0) // Recalculate cart count
            };

        default:
            return state;
    }
};



export default reducer