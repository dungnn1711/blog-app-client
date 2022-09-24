import React, { useCallback, useState } from 'react';
import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// Allow user to import image
import FileBase64 from 'react-file-base64';

import { hideModal, createPost } from '../../redux/actions';
import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';

const DEFAULT_DATA = {
    title: '',
    content: '',
    attachment: '',
};

function CreatePostModal(props) {
    // State
    const [data, setData] = useState(DEFAULT_DATA);
    // Selector
    const { isShow } = useSelector(modalState$);
    // Style
    const classes = useStyles();
    // Dispatching
    const dispatch = useDispatch();
    const onClose = useCallback(() => {
        dispatch(hideModal());
    }, [dispatch]);
    // Submit form handler
    const onSubmit = useCallback(() => {
        // Request create new post
        dispatch(createPost.createPostRequest(data));
        // Clear form
        setData(DEFAULT_DATA);
        // Close modal
        dispatch(hideModal());
    }, [data, dispatch])
    return (
        <Modal open={isShow} onClose={onClose}>
            <div className={classes.paper}>
                <h2>Create New Post</h2>
                <form noValidate autoComplete='off' className={classes.form}>
                    <TextField
                        className={classes.title}
                        required
                        label='Title'
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                    />
                    <TextareaAutosize
                        className={classes.textArea}
                        minRows={8}
                        maxRows={16}
                        placeholder='Post content...'
                        value={data.content}
                        onChange={(e) => setData({ ...data, content: e.target.value })}
                    />
                    <FileBase64
                        accept='image/*'
                        multiple={false}
                        type='file'
                        value={data.attachment}
                        onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
                    />
                    <div className={classes.footer}>
                        <Button
                            variant='contained'
                            color='primary'
                            component='span'
                            fullWidth
                            onClick={onSubmit}
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </Modal>
    );
}

export default CreatePostModal;