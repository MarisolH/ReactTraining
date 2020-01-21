import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        fontSize: 12,
        padding: 0,
        '& > *': {
            marginTop:'5em',
            width: '100%',
            height: '100%',
        },
    },
    paper: {
        marginTop:'5em',
        backgroundColor: '#474a54',
        padding: '10px',
        textAlign: 'center',
    },
    title:{
        color:'#fff'
    }
}));