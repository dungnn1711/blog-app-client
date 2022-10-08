import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as api from '../../api';
import { postActions } from '../slices/postSlice';

function* fetchPostsSaga() {
    try {
        // Use `call` to call api
        const posts = yield call(api.getPosts);
        // Use `put` to trigger an action
        yield put(postActions.getPostsSuccess(posts.data));
    } catch (err) {
        yield put(postActions.getPostsFailure(err));
    }
}

function* createPostSaga(action) {
    try {
        // Use `call` to call api
        const post = yield call(api.createPost, action.payload);
        // Use `put` to trigger an action
        yield put(postActions.createPostSuccess(post.data));
    } catch (err) {
        yield put(postActions.createPostFailure(err));
    }
}

function* updatePostSaga(action) {
    try {
        // Use `call` to call api
        const updatedPost = yield call(api.updatePost, action.payload);
        // Use `put` to trigger an action
        yield put(postActions.updatePostSuccess(updatedPost.data));
    } catch (err) {
        yield put(postActions.updatePostFailure(err));
    }
}

function* mySaga() {
    // Execute sagas parallel
    yield all([
        // Listen latest action
        takeLatest(postActions.getPostsRequest, fetchPostsSaga),
        takeLatest(postActions.createPostRequest, createPostSaga),
        takeLatest(postActions.updatePostRequest, updatePostSaga),
    ]);
}

export default mySaga;