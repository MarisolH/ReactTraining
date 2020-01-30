import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './DecorationForScreenStyles'

export default function DecorationForScreen(props) {
    const classes = useStyles();

    return <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
    >
        <Grid item xs={12} md={7} lg={7} sm container >
            <div className={classes.transform} />
            <Typography variant='h3' align='center' className={classes.title} color='textPrimary' gutterBottom>
                <img alt='' width={'70%'} className={classes.logo} src={require('../../assets/keeplearning.png')}></img>
            </Typography>

        </Grid>
        <Grid item xs={12} md={5} lg={5} sm container >
            <img alt='' className={classes.illustration} src={require('../../assets/image.png')}></img>
        </Grid>
    </Grid>

}