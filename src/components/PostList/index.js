import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../redux/actions';
import Post from './post';
import { postState$ } from '../../redux/selectors';

function PostList(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
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