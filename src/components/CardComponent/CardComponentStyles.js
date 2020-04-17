import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        maxWidth: '100%',
        maxHeight:'205px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    text: {
        textAlign:'justify',
    },
    pos: {
        marginBottom: 12,
    },
    neuphormism: {
        minHeight:'185px!important',
        borderRadius: '4px',
        background: ' #ffffff',
        boxShadow: '8px 8px 25px #e3e3e3, -8px -8px 25px #ffffff',
    },
    actions: {
        bottom: '-30px',
        direction: 'rtl',
        position: 'relative',
        padding: '15PX',
    }
});