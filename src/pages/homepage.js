import React, { useCallback } from 'react';
import { Container, Fab } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import PostList from '../components/PostList';
import CreatePostModal from '../components/CreatePostModal';
import useStyles from './styles';
import { showModal } from '../redux/actions';

export default function HomePage() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const openCreatePostModal = useCallback(() => {
        dispatch(showModal());
    }, [dispatch])
    return (
        <Container maxWidth='lg' className=''>
            <Header />
            <PostList />
            <CreatePostModal />
            <Fab
                color='primary'
                className={classes.fab}
                onClick={openCreatePostModal}
            >
                <AddIcon />
            </Fab>
        </Container>
    );
};