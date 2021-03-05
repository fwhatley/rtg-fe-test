import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { ACTION_TYPES } from '../../redux.app.state/cart.reducer';

import ProductItem from './product.item';
import '../../assets/css/components/product/product-list.css';

const ProductList = () => {
    const { allDataJson } = useStaticQuery(
        graphql`
            query {
                allDataJson {
                    edges {
                        node {
                            products {
                                sku
                                title
                                price
                                image
                            }
                        }
                    }
                }
            }
        `
    );

    const dispatch = useDispatch();

    const onAddToCart = product => {
        const productToAdd = { ...product, quantity: 1 };
        dispatch({
            type: ACTION_TYPES.ADD_ITEM,
            payload: productToAdd,
        });

        const options = {
            hideProgressBar: true,
            position: 'bottom-right',
        };
        toast.success(`Added to cart: $${productToAdd.price}`, options);
    };

    return (
        <div className="product-list grid-x grid-margin-y">
            {allDataJson.edges[0].node.products.map(product => (
                <ProductItem
                    product={product}
                    key={product.sku}
                    onAddToCart={onAddToCart}
                />
            ))}
            <ToastContainer />
        </div>
    );
};
export default ProductList;
