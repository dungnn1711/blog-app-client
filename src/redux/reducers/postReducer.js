import { INIT_STATE } from "../init-state";
import { createPost, getPosts, updatePost } from "../actions";

export default function post(state = INIT_STATE.posts, action) {
    switch (action.type) {
        // Get
        case getPosts.getPostsRequest().type:
            return {
                ...state,
                isLoading: true,
            };
        case getPosts.getPostsSuccess().type:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            };
        case getPosts.getPostsFailure().type:
            return {
                ...state,
                isLoading: false,
            };
        // Create
        case createPost.createPostRequest().type:
            return {
                ...state,
                isLoading: true,
            }
        case createPost.createPostSuccess().type:
            return {
                ...state,
                isLoading: false,
                data: [...state.data, action.payload],
            }
        case createPost.createPostFailure().type:
            return {
                ...state,
                isLoading: false,
            }
        // Update
        case updatePost.updatePostRequest().type:
            return {
                ...state,
                isLoading: true,
            }
        case updatePost.updatePostSuccess().type:
            return {
                ...state,
                isLoading: false,
                data: state.data.map((p) => (p._id === action.payload._id ? action.payload : p)),
            }
        case updatePost.updatePostFailure().type:
            return {
                ...state,
                isLoading: false,
            }
        // Default
        default:
            return state;
    }
}