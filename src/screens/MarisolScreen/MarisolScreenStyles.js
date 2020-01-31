import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
    rootContainer: {
        marginTop: '6em'
    },
    img: {
        width: '80%'
    },
    gridInputs: {
        flexDirection: 'column',
    },
    gridItems: {
        padding: 10
    },
    buttonItem: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
    }
}));

export const styles = ({
    image: {
        width: '250px'
    }
})
