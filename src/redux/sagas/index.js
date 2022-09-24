import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga() {
    try {
        // Use `call` to call api
        const posts = yield call(api.getPosts);
        // Use `put` to trigger an action
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (err) {
        yield put(actions.getPosts.getPostsFailure(err));
    }
}

function* createPostSaga(action) {
    try {
        // Use `call` to call api
        const post = yield call(api.createPost, action.payload);
        // Use `put` to trigger an action
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (err) {
        yield put(actions.createPost.createPostFailure(err));
    }
}

function* updatePostSaga(action) {
    try {
        // Use `call` to call api
        const updatedPost = yield call(api.updatePost, action.payload);
        // Use `put` to trigger an action
        yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
    } catch (err) {
        yield put(actions.updatePost.updatePostFailure(err));
    }
}

function* mySaga() {
    // Execute sagas parallel
    yield all([
        // Listen latest action
        takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga),
        takeLatest(actions.createPost.createPostRequest, createPostSaga),
        takeLatest(actions.updatePost.updatePostRequest, updatePostSaga),
    ]);
}

export default mySaga;