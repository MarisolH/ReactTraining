import React from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './MenuBarStyles';
import HomeIcon from '@material-ui/icons/Home';

function MenuBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBarStyles}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} onClick={() => props.history.push('/')} color="inherit" aria-label="menu">
                        <HomeIcon className={classes.menuButton} fontSize='large'/>
                    </IconButton>
                    <Typography variant="h5"  className={classes.title}>
                        CURSO REACT
                    </Typography>
                    <Button color="primary" onClick={() => props.history.push('/JaviScreen')}>Javier</Button>
                    <Button color="primary" onClick={() => props.history.push('/MigueScreen')} > Miguel</Button>
                    <Button color="primary" onClick={() => props.history.push('/RodoScreen')}>Rodolfo</Button>
                    <Button color="primary" onClick={() => props.history.push('/VicScreen')}>Victor</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(MenuBar);
