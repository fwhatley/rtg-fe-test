import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import CartItems from './cart.items';
import {
    getProductListWithQuantity,
    mockStore,
} from '../../test.utils/test.utils';

it('displays CartItems with no products', () => {
    const store = mockStore({
        cart: {
            items: [],
        },
    });

    const tree = renderer.create(
        <Provider store={store}>
            <CartItems />
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});

it('displays CartItems with some products', () => {
    const store = mockStore({
        cart: {
            items: getProductListWithQuantity(),
        },
    });

    const tree = renderer.create(
        <Provider store={store}>
            <CartItems />
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});
