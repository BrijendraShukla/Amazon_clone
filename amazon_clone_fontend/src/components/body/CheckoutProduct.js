import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../../StateProvider';
function CheckoutProduct({ image, title, price, rating, id }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'Remove_From_Basket',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_img' src={image} alt="" />
            <div className="checkoutProduct_info">
                <div className="checkoutProduct_elements">

                    <p className="checkoutProduct_title">{title}</p>
                    <p className="checkoutProduct_price">
                        <small>Rs</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                        {Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct