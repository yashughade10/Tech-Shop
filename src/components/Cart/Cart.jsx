import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { deletecart } from "../Action/Action"
import { increaseQuantity, decreaseQuantity } from "../Action/Action"
import { useEffect } from "react"
import { Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

function Cart() {

    const dispatch = useDispatch();

    let cart = useSelector(state => state.cart)

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            dispatch({ type: "SET_CART", payload: JSON.parse(storedCart) });
        }
    }, [dispatch]);

    const RemoveFromCart = (product) => {
        dispatch(deletecart(product));
    };

    const increaseItemCount = (product) => {
        dispatch(increaseQuantity(product));
    };

    const decreaseItemCount = (product) => {
        if(product.quantity <= 1){
            dispatch(deletecart(product));
        }else{
            dispatch(decreaseQuantity(product));
        }
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const calculateItemfinalPrice = (product) => {
        return product.finalPrice * product.quantity;
    };

    const calculateItemorPrice = (product) => {
        return product.originalPrice * product.quantity;
    };

    const discountprice = (product) => {
        let discount = (product.originalPrice * product.quantity) - (product.finalPrice * product.quantity);
        return discount
    }

    return (
        <>
            {cart.length === 0 ? (
                <div className="cartempty">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>
                    </div>
                    <div>
                        Your Cart is empty
                    </div>
                    {/* <i class="bi bi-cart-x"></i> */}
                    <Link to="/products">
                        <button>Start Shopping</button>
                    </Link>
                </div>
            ) : (
                <div className="cart-code">
                    <div className="product-list">
                        {cart.map(product => (
                            <div className="cart-card-item">
                                <section className="cart-1" key={product.id}>
                                    <img src={"/assets" + product.images[0]} alt="" />
                                    <div className="product-info-cart">
                                        <h3>{product.title + " " + product.info}</h3>
                                        <p >${calculateItemfinalPrice(product)} <del>${calculateItemorPrice(product)}</del></p>
                                        <div className="counter">
                                            <span className="minus" onClick={() => decreaseItemCount(product)}>-</span>
                                            <span className="value">{product.quantity}</span>
                                            <span className="plus" onClick={() => increaseItemCount(product)}>+</span>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                    <span className="delete" onClick={() => RemoveFromCart(product)}><Trash2 /></span>
                                </section>
                                <br />
                            </div>
                        ))}
                    </div>
                    <section className="cart-2 cart-summary">
                        <h3>Order Summary ({cart.reduce((total, product) => total + product.quantity, 0)} Item)</h3>
                        <div className="cart-2-sum">
                            <section>
                                <p>Original Price</p>
                                <p>Discount</p>
                                <p>Delivery</p>
                            </section>
                            <section>
                                <p>${cart.reduce((total, product) => total + calculateItemorPrice(product), 0)}</p>
                                <p style={{ color: "green" }}>${cart.reduce((total, product) => total + discountprice(product), 0)}</p>
                                <p style={{ color: "green" }}>Free</p>
                            </section>
                        </div>
                        <hr />
                        <div className="cart-2-sum">
                            <section>
                                <p className="price-tag-cart">Total Price</p>
                            </section>
                            <section>
                                <p className="price-tag-cart">${cart.reduce((total, product) => total + calculateItemfinalPrice(product), 0)}</p>
                            </section>
                        </div>
                        <button className="checkout">Checkout</button>
                    </section>
                </div>
            )}
        </>
    );
}

export default Cart;