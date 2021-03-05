import React from 'react';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';

import CartItem from './cart.item';
import { getProductListWithQuantity } from '../../test.utils/test.utils';

it('calls "onUpdate" prop on button decrement click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
        <CartItem
            product={getProductListWithQuantity()[0]}
            onUpdate={onClick}
            onRemoveProduct={jest.fn()}
        />
    );

    fireEvent.click(getByTestId('decrement'));
    expect(onClick).toHaveBeenCalled();
});

it('calls "onUpdate" prop on button increment click', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
        <CartItem
            product={getProductListWithQuantity()[0]}
            onUpdate={onClick}
            onRemoveProduct={jest.fn()}
        />
    );

    fireEvent.click(getByTestId('increment'));
    expect(onClick).toHaveBeenCalled();
});

it('calls "onRemoveProduct" prop on button Remove click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
        <CartItem
            product={getProductListWithQuantity()[0]}
            onUpdate={jest.fn()}
            onRemoveProduct={onClick}
        />
    );

    fireEvent.click(getByText('Remove'));
    expect(onClick).toHaveBeenCalled();
});
