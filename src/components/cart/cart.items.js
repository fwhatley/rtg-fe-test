import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACTION_TYPES } from '../../redux.app.state/cart.reducer';

import CartItem from './cart.item';

const CartItems = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const onUpdate = product => {
        dispatch({
            type: ACTION_TYPES.UPDATE_ITEM,
            payload: product,
        });
    };

    const onRemoveProduct = product => {
        dispatch({
            type: ACTION_TYPES.REMOVE_ITEM,
            payload: product,
        });
    };

    return (
        <div className="product-list grid-x grid-margin-y">
            {items.length > 0 &&
                items.map(product => (
                    <CartItem
                        product={product}
                        key={product.sku}
                        onUpdate={onUpdate}
                        onRemoveProduct={onRemoveProduct}
                    />
                ))}
        </div>
    );
};
export default CartItems;
