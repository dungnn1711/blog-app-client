import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        margin: '0 0 8px 0',
    },
    title: {
        marginBottom: '8px',
    },
    textArea: {
        marginBottom: '8px',
        padding: '8px',
    },
    footer: {
        marginTop: '8px',
    },
}));