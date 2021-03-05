import { createStore as reduxCreateStore } from 'redux';

import allReducers from './all.reducers';

const createStore = () => reduxCreateStore(allReducers);
export default createStore;
