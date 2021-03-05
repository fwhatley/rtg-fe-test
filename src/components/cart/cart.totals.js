import React from 'react';
import { useSelector } from 'react-redux';

const CartTotals = () => {
    const items = useSelector(state => state.cart.items);

    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    const subtotal = items.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );
    const taxTotal = subtotal * 0.1;
    const shippingCost = 50 + subtotal * 0.02 - 5 * totalQuantity;
    const total = subtotal + taxTotal + shippingCost;

    const convertToDollar = num => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    return (
        <div className="cell small-12" style={{ paddingTop: 50 }}>
            <div className="grid-x">
                <div className="cell small-3">SUBTOTAL</div>
                <div className="cell small-3">
                    $ {convertToDollar(subtotal)}
                </div>
            </div>
            <div className="grid-x">
                <div className="cell small-3">TAX @10%</div>
                <div className="cell small-3">
                    $ {convertToDollar(taxTotal)}
                </div>
            </div>
            <div className="grid-x">
                <div className="cell small-3">SHIPPING COST</div>
                <div className="cell small-3">
                    $ {convertToDollar(shippingCost)}
                </div>
            </div>
            <div className="grid-x">
                <div className="cell small-3">
                    <strong>TOTAL</strong>
                </div>
                <div className="cell small-3">
                    <strong>$ {convertToDollar(total)}</strong>
                </div>
            </div>
        </div>
    );
};
export default CartTotals;
