import React from 'react'
import Grid from '@material-ui/core/Grid';

import MenuBar from '../../components/MenuBar/MenuBar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './RodoScreenStyles';
import CardComponent from '../../components/CardComponent/CardComponent';
import TextInput from '../../components/TextInput/TextInput';

export default function RodoScreen(props) {
    const classes = useStyles()
    //console.log(props)
    const text ={
        listaDeLabel : [
            {titulo:'Información Escolar'
            ,Escuela:'Escuela'
            ,Licenciatura: 'Licenciatura'
            ,Campodeestudio: 'Campo de estudio'
            ,AñoFinal:'Año final'}
        ]
    } 
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
       
             <CardComponent alignItems='right' title={<Typography variant="h3" component="h2"> {text.listaDeLabel[0].titulo}</Typography>}></CardComponent>
            
            
            
            
        </Grid>
    </React.Fragment>
}