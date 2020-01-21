import React from 'react'
import Grid from '@material-ui/core/Grid';

import MenuBar from '../../components/MenuBar/MenuBar';
// import Typography from '@material-ui/core/Typography';
import { useStyles } from './JaviScreenStyles';

export default function JaviScreen(props) {
    const classes = useStyles()
    // console.log(props)

    return <React.Fragment>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12} sm container >
                <MenuBar/>
            </Grid>
        </Grid>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.rootContainer}
        >
                Aquí irá tu código J

        </Grid>
    </React.Fragment>
}