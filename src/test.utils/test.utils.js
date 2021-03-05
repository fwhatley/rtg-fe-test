import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import productList from './mocks/product.list.json';

const mockStore = configureMockStore([thunk]);

const getProductListWithQuantity = () => {
    return productList.map(product => {
        product.quantity = 3;
        return product;
    });
};

export { mockStore, getProductListWithQuantity };
