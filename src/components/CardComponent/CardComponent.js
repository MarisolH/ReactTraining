import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useStyles } from './CardComponentStyles'
export default function CardComponent(props) {
    const classes = useStyles();
    const {children} = props;

    return  <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.root}
    >
        <Card className={classes.neuphormism}>
            <CardContent>
                {children ? children : <React.Fragment>
                    <Typography variant='h6' align='center' className={classes.title} color='textPrimary' gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography variant='caption' className={classes.text} color='textSecondary' gutterBottom>
                        {props.text}
                    </Typography>
                </React.Fragment>
                }
            </CardContent>
        </Card>
    </Grid>
}