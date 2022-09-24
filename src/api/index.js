import axios from 'axios';

const URL = process.env.SERVER_URL || 'http://localhost:5000';

export const getPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);