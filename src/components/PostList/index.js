import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import { postState$ } from '../../redux/selectors';
import { postActions } from '../../redux/slices/postSlice';

function PostList(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postActions.getPostsRequest());
    }, [dispatch]);

    const posts = useSelector(postState$);

    return (
        <Grid container spacing={2} alignItems='stretch'>
            {posts.map((post) => (
                <Grid item xs={12} sm={6} key={post._id}>
                    <Post post={post}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default PostList;