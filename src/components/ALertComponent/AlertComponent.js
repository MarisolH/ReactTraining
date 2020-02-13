import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    }
}));

export default function AlertComponent(props) {
    const classes = useStyles();
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        props.setOpenAlert(false);
    };
    return (
        <div className={classes.root}>
            <Snackbar
                open={props.openAlert}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Alert onClose={props.handleClose} severity={props.type}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
}
