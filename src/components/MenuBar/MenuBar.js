import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './MenuBarStyles';
import DehazeIcon from '@material-ui/icons/Dehaze';

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBarStyles}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <DehazeIcon className={classes.menuButton} />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        CURSO REACT
                    </Typography>
                    <Button color="primary">Victor</Button>
                    <Button color="primary">Rodolfo</Button>
                    <Button color="primary">Miguel</Button>
                    <Button color="primary">Javi</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
