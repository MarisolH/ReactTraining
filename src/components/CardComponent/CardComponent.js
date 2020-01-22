import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './CardComponentStyles'
export default function CardComponent(props) {
    const classes = useStyles();
    const text ={
        listaDeLabel : [
            {titulo:'Información Escolar'
            ,Escuela:'Escuela'
            ,Licenciatura: 'Licenciatura'
            ,Campodeestudio: 'Campo de estudio'
            ,AñoFinal:'Año final'}
        ]
    }

    return  <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.root}
    >
        <Card className={classes.neuphormism}>
            <CardContent >
               
               <Grid container
                    direction='column'
                    justify='center'
                    alignItems='center'>
                        <Grid>
                        <Typography  component="h1" align='center' className={classes.title} container  >
                            {text.listaDeLabel[0].titulo}
                        </Typography>
                        </Grid>
                    
                         <Grid  container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start">
                            <img alt='' className={classes.img} src={require('../../assets/rodolfo.png')}></img>
                        </Grid>
                <Grid container
                            direction='row'
                            justify='center'
                            alignItems='flex-end'>
                        <Grid item xs={4}>
                        <TextField className={classes.pos} label={text.listaDeLabel[0].Escuela}></TextField>
                        </Grid>
                        <Grid item xs={4}>
                        <TextField className={classes.pos} label={text.listaDeLabel[0].Licenciatura} ></TextField> 
                        </Grid>
                        <Grid item xs={4}>
                        <TextField className={classes.pos} label={text.listaDeLabel[0].Campodeestudio} ></TextField> 
                        </Grid>
                        <Grid item xs={4}>
                        <TextField className={classes.pos} label={text.listaDeLabel[0].AñoFinal}></TextField> 
                        </Grid>      
                </Grid>
               </Grid>
                
               
            </CardContent>
        </Card>
    </Grid>
    

}