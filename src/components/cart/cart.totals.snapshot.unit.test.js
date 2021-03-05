import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import CartTotals from './cart.totals';
import {
    getProductListWithQuantity,
    mockStore,
} from '../../test.utils/test.utils';

it('displays CartTotals with no products', () => {
    const store = mockStore({
        cart: {
            items: [],
        },
    });

    const tree = renderer.create(
        <Provider store={store}>
            <CartTotals />
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});

it('displays CartTotals with some products', () => {
    const store = mockStore({
        cart: {
            items: getProductListWithQuantity(),
        },
    });

    const tree = renderer.create(
        <Provider store={store}>
            <CartTotals />
        </Provider>
    );
    expect(tree).toMatchSnapshot();
});
