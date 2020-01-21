import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root:{
        height: '40em'
    },
    transform: {
        zIndex:-1,
        position: 'absolute',
        width: '1000.76px',
        height:' 1000.76px',
        left: '-347px',
        top: '-570.28px',
        
        /* white */
        
        background: '#d2dbf5',
        borderRadius: '200px',
        transform: 'rotate(-45deg)',

    },
    illustration: {
        position:'absolute',
        width: '450px',
        height:'450px',
        top: '10em',
    },
    title:{
        margin:'20px'
    }
}));
