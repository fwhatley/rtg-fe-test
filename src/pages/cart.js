import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../components/layout';
import SEO from '../components/seo';
import CartItems from '../components/cart/cart.items';
import CartTotals from '../components/cart/cart.totals';

const Cart = () => {
    const items = useSelector(state => state.cart.items);

    return (
        <Layout>
            <SEO title="Cart" />
            <h1>Cart</h1>

            {items.length > 0 && (
                <>
                    <CartItems />
                    <CartTotals />
                </>
            )}

            {items.length === 0 && (
                <div className="cell small-12 grid-x grid-margin-x">
                    <p className="cell">You have no items in your cart.</p>
                </div>
            )}
        </Layout>
    );
};

export default Cart;
