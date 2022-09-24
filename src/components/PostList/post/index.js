import React, { useCallback, useState } from 'react';
import { Card, Avatar, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import { Favorite, MoreVert } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import useStyles from './styles';
import * as actions from '../../../redux/actions';

const DEFAULT_MEDIA = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png';

function Post({ post }) {
    const { title, content, author, likeCount, createAt, attachment } = post;
    // const [like, setLike] = useState(likeCount);
    const classes = useStyles();
    const dispath = useDispatch();
    const onLikeButtonClick = useCallback(() => {
        dispath(actions.updatePost.updatePostRequest({...post, likeCount: likeCount + 1}));
    }, [dispath, likeCount]);
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>{author.charAt(0)}</Avatar>}
                title={author}
                subheader={moment(createAt).format('HH:MM MM DD, YYYY')}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardMedia className={classes.media} image={attachment || DEFAULT_MEDIA} title='Media title' />
            <CardContent>
                <Typography variant='h5' color='textPrimary'>{title}</Typography>
                <Typography variant='body2' component='p' color='textSecondary'>{content}</Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={onLikeButtonClick}>
                    <Favorite />
                    <Typography component='span' color='textSecondary'>{likeCount}</Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;