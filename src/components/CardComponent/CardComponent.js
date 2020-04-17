import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './CardComponentStyles'
export default function CardComponent(props) {
    const classes = useStyles();

    return <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.root}
    >
        <Card className={classes.neuphormism}>
            <CardContent>
                <Typography variant='h6' align='center' className={classes.title} color='textPrimary' gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant='caption' className={classes.text} color='textSecondary' gutterBottom>
                    {props.text}
                </Typography>
            </CardContent>
            {props.actions ? <CardActions className={classes.actions}>
                <Button size="small" color="primary" onClick={props.actions}>
                    Ir al proyecto
                </Button>
            </CardActions> : null}
        </Card>
    </Grid>

}