import { combineReducers } from "@reduxjs/toolkit";

import { postReducer } from '../slices/postSlice';
import modal from './modalReducer';

export default combineReducers({
    post: postReducer,
    modal,
});