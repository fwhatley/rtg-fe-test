import React from 'react';
import PropTypes from 'prop-types';

const CartItem = props => {
    const {
        product,
        onUpdate = product => {},
        onRemoveProduct = product => {},
    } = props;

    const onIncrementQuantity = () => {
        onUpdate({ ...product, quantity: product.quantity + 1 });
    };

    const onDecrementQuantity = () => {
        onUpdate({ ...product, quantity: product.quantity - 1 });
    };

    return (
        <div
            className="product cell small-12 grid-x grid-margin-x"
            id={product.sku}
        >
            <div className="product-image cell small-2">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-title cell small-3">{product.title}</div>
            <div className="product-sku cell small-2">{product.sku}</div>
            <div className="product-price cell small-2">${product.price}</div>
            <div className="product-add-to-cart cell small-2">
                <div className="grid-x grid-margin-x text-center">
                    <div className={'cell auto align-self-middle'}>Qty:</div>
                    <div>
                        <button
                            data-testid={'decrement'}
                            onClick={onDecrementQuantity}
                        >
                            -
                        </button>
                    </div>
                    <div
                        className="cell small-3 align-self-middle"
                        style={{ width: 19 }}
                    >
                        {product.quantity}
                    </div>
                    <div>
                        <button
                            data-testid={'increment'}
                            onClick={onIncrementQuantity}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
            <div className="cell small-1 small-1">
                <button
                    data-testid={'remove'}
                    className="align-self-middle button alert"
                    onClick={() => onRemoveProduct(product)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string,
        sku: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemoveProduct: PropTypes.func.isRequired,
};

export default CartItem;
