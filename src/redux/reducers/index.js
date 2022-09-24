import { combineReducers } from "redux";

import post from './postReducer';
import modal from './modalReducer';

export default combineReducers({
    post,
    modal,
});