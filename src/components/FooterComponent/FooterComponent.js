import React from 'react'
import Paper from '@material-ui/core/Paper';
import { useStyles } from './FooterComponentStyles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function FooterComponent() {
    const classes = useStyles();
    const year = new Date().getFullYear()


    return <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
    >

        <Paper variant="outlined" className={classes.paper} square >
            <Typography variant='caption' align='center' className={classes.title} >
                Copyright © {year} MSH Todos los derechos reservados.
                Sed accumsan fermentum est sit amet venenatis. In eleifend tortor enim, sit amet congue mi condimentum sed. Mauris sit amet tincidunt massa. Vestibulum ut scelerisque turpis. Nulla facilisi. Nulla aliquam lorem quis lectus semper rhoncus. Duis in pharetra justo. Curabitur pulvinar metus eget lacus consequat, eu feugiat mi tincidunt.
            </Typography>
        </Paper>
    </Grid>


}