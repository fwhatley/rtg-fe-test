import React from 'react';
import renderer from 'react-test-renderer';

import CartItem from './cart.item';
import { getProductListWithQuantity } from '../../test.utils/test.utils';

it('displays a CartItem with its details', () => {
    const tree = renderer.create(
        <CartItem
            product={getProductListWithQuantity()[0]}
            onUpdate={jest.fn()}
            onRemoveProduct={jest.fn()}
        />
    );
    expect(tree).toMatchSnapshot();
});
