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

    return  <Grid
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
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                    className={classes.rootContainer}>
                <Grid xs={4} md container>
                    <Grid item xs={6} md={5} lg={5} sm container >
                    <img width = {"200%"} alt='' className={classes.illustration} src={require('../../assets/victor.png')}></img>
                    </Grid>
                </Grid>
                <Grid xs={8} md container direction = "column">
                <Grid item xs={8} md={5} lg={5} sm container>
                    <Grid 
                    container
                    direction="column"
                    justify="right"
                    alignItems="right">
                    <h2>Experiencia Profesional</h2>
                    <TextField label = "Titulo"></TextField>
                    <div></div>
                    <TextField label = "Compañia"></TextField>
                    <div></div>
                    <TextField label = "Ubicacion"></TextField>
                    <div></div>
                    <TextField label = "Año de Finalizacion"></TextField>
                    <div></div>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12}  sm container direction="column">
                    <Grid item xs={12} md={5} lg={5} sm container>
                <Button variant ="contained" color= {props.color} onClick={(e)=>console.log(e)}>
                        GUARDAR
                    </Button>
                    </Grid>
                </Grid>

                </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Grid>
}