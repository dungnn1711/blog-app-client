import { createSlice } from '@reduxjs/toolkit';
import { INIT_STATE } from '../init-state';

const postSlice = createSlice({
    name: 'post',
    initialState: INIT_STATE.posts,
    reducers: {
        // Get
        getPostsRequest: (state, action) => {
            state.isLoading = true;
        },
        getPostsSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        getPostsFailure:  (state, action) => {
            state.isLoading = false;
            state.data = [];
        },
        // Create
        createPostRequest: (state, action) => {
            state.isLoading = true;
        },
        createPostSuccess: (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        },
        createPostFailure: (state, action) => {
            state.isLoading = false;
        },
        // Update
        updatePostRequest: (state, action) => {
            state.isLoading = true;
        },
        updatePostSuccess: (state, action) => {
            state.isLoading = false;
            state.data = state.data.map((p) => (p._id === action.payload._id ? action.payload : p));
        },
        updatePostFailure: (state, action) => {
            state.isLoading = false;
        },
    },
});

// Actions
export const postActions = postSlice.actions;

// Reducer
export const postReducer = postSlice.reducer; 