import { createStore } from 'redux';
import rootReducer from 'store/reducer';

const store = createStore(rootReducer);

export default store;
