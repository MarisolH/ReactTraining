import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        backgroundColor: 'transparent',

    },
    appBarStyles: {
        backgroundColor: '#d2dbf578',
        position: 'fixed'

    },
    menuButton: {
        marginRight: theme.spacing(0),
        color: '#073d6f',
        width: '150px',
        display: 'flex',
        justifyContent: 'end',
        '&:hover': {
            background: "none",
         },
    },
    title: {
        flexGrow: 1,
        color: '#073d6f',
        paddingLeft: 10
    },
    gridItems:{
        textAlign: 'end'
    }
}));
