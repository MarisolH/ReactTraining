import React from 'react'
import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import GridComp from '../../components/CardComponent/CardComponent';

import MenuBar from '../../components/MenuBar/MenuBar';
// import Typography from '@material-ui/core/Typography';
import { useStyles } from './VicScreenStyles';

export default function VicScreen(props) {

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
                <div>
                    <h1></h1>
                </div>
                <GridComp>
                </GridComp>
        </Grid>

    </React.Fragment>
}