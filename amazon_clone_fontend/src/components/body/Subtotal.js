import React from "react"
import './Subtotal.css'
import { useStateValue } from "../../StateProvider"
import { getBasketTotal } from "../../reducer";

function Subtotal() {
    var formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const [{ basket }, dispatch] = useStateValue();
    return <div className="subtotal">
        <p>Subtotal ({basket?.length} items): <strong> {formatter.format(Number(getBasketTotal(basket)))}</strong></p>
        <small className="subtotal_gift"><input type="checkbox" />This order contains a gift</small>
        <button>Proceed to Checkout</button>
    </div>

}

export default Subtotal