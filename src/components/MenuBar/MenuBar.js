import React from 'react';
import { withRouter } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './MenuBarStyles';

function MenuBar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBarStyles}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={6} md >
                            <IconButton focusVisible edge="start" className={classes.menuButton} onClick={() => props.history.push('/')} color="inherit" aria-label="menu">
                                <img alt='' width={'100%'} className={classes.logo} src={require('../../assets/logo.png')}></img>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6} className={classes.gridItems} md >
                            <Button color="primary" onClick={() => props.history.push('/JaviScreen')}>Javier</Button>
                            <Button color="primary" onClick={() => props.history.push('/MigueScreen')} > Miguel</Button>
                            <Button color="primary" onClick={() => props.history.push('/RodoScreen')}>Rodolfo</Button>
                            <Button color="primary" onClick={() => props.history.push('/VicScreen')}>Victor</Button>
                            <Button color="primary" onClick={() => props.history.push('/MarisolScreen')}>Marisol</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(MenuBar);
