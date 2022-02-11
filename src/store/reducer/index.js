import { combineReducers } from 'redux';

import message from 'store/reducer/message';
import input from 'store/reducer/input';
import modal from 'store/reducer/modal';
import user from 'store/reducer/user';

const rootReducer = combineReducers({ message, input, modal, user });

export default rootReducer;
